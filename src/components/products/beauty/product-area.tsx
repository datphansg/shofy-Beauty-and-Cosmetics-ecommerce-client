'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
// internal
import { ArrowRightSmTwo } from '@/svg';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeThreePrdLoader } from '@/components/loader';
import slugify from 'slugify';
// Hàm để gọi API lấy sản phẩm từ server
async function fetchBrandData(id: string) {
  const response = await fetch(`https://app-api.selly.vn/brands/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch brand data');
  }
  return response.json();
}

async function getProductByCatogories(brand) {
  const response = await fetch(
    `https://app-api.selly.vn/products?limit=20&page=0&sort=top_sale&city=&inventory=61cadc451a1082f8685ce26c&brand=${brand}&pageToken=eyJwYWdlIjowfQ%3D%3D`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  return response.json();
}

const ProductArea = ({brandId}) => {
  const [brandInfo, setBrandInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState(''); // Default page value
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [nextToken, setNextToken] = useState('');

  // Fetch dữ liệu sản phẩm khi component được mount hoặc khi currPage thay đổi
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productData = await getProductByCatogories(brandId);
        const brandData = await fetchBrandData(brandId);
        setNextToken(productData?.data?.nextPageToken || '');
        setProducts(productData?.data?.products || []);
        setBrandInfo(brandData?.data?.brand || {});
        setLoading(false);
        setUrl(`/brand/${slugify(brandData?.data?.brand?.name || "default-name", { lower: true })}/${brandId}`)
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Xử lý nội dung để hiển thị
  let content = null;
  if (isLoading) {
    content = <HomeThreePrdLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  } else if (!isLoading && products.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else {
    content = products.map((item) => (
      !item.isOutOfStock && (
        <div
          key={item._id}
          className="col-xl-4 col-md-6 col-sm-6"
        >
          <ProductItem product={item} />
        </div>
      )
    ));
  }

  
  return (
    <>
      <section className="tp-product-area grey-bg-8 pt-95 pb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="tp-section-title-wrapper-3 mb-55">
                {/* Kiểm tra brandInfo trước khi truy cập */}
                <h3 className="tp-section-title-3">{brandInfo?.name || "Brand Name"}</h3>
                <h5>{brandId === '64113bcebb13ac6800c377bd' && ' Zalo 0363 500 604'}</h5>
                <h5>{brandId === '61cad96f1a1082f8685ce25d' && ' Zalo 0933 686 604'}</h5>
                <span>
                {brandInfo?.desc || "Brand Name"}
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-product-more-3 text-md-end mb-65">
                <Link href={url} className="tp-btn">
                  Xem thêm {" "}<ArrowRightSmTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductArea;

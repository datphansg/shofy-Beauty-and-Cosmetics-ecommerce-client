'use client'
import React, { useEffect, useState } from "react";
import Pagination from "@/ui/Pagination";
import ProductItem from "../products/fashion/product-item";
import CategoryFilter from "./shop-filter/category-filter";

import PriceFilter from "./shop-filter/price-filter";
import ProductBrand from "./shop-filter/product-brand";
import StatusFilter from "./shop-filter/status-filter";
import TopRatedProducts from "./shop-filter/top-rated-products";
import ShopListItem from "./shop-list-item";
import ShopTopLeft from "./shop-top-left";
import ShopTopRight from "./shop-top-right";
import ResetButton from "./shop-filter/reset-button";
import base64 from 'base-64';
import ShopLoader from "@/components/loader/shop/shop-loader";
import ErrorMsg from "@/components/common/error-msg";
// Hàm để gọi API lấy sản phẩm từ server
async function getProductByCatogories(categoryId, page, nextTokenPage, pageToken, subCategory,brand) {
  const response = await fetch(
    `https://app-api.selly.vn/products?brand=${brand}&limit=20&page=${page}&sort=top_sale&city=&category=${categoryId}&subCategory=${subCategory}&nextTokenPage=${nextTokenPage}&pageToken=${pageToken}==`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  return response.json();
}
export function base64UrlEncode(payload) {

  // Mã hóa chuỗi JSON thành Base64
  const base64String = Buffer.from(payload).toString('base64');

  // Chuyển đổi Base64 sang Base64 URL (thay các ký tự +, / và xóa padding =)
  const base64UrlString = base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  return base64UrlString;
}

const ShopArea = ({ categoryId, subCategory='', brandId='' }) => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1); // Default page value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextToken, setNextToken] = useState('');
  const [pageToken, setPageToken] = useState('');
  // Fetch dữ liệu sản phẩm khi component được mount hoặc khi currPage thay đổi
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {       
        const productData = await getProductByCatogories(categoryId, currPage, nextToken, pageToken,subCategory,brandId);
        setNextToken(productData?.data?.nextPageToken || '');
        setProducts(productData?.data?.products || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, currPage]);

  const handlePageChange = async (newPage) => {
    setCurrPage(newPage); // Cập nhật currPage khi trang thay đổi
    const payload = { page: newPage - 1 };
    const jsonPayload = JSON.stringify(payload);
    setPageToken(await base64UrlEncode(jsonPayload));
  };

  return (
    <>
      <section className="tp-shop-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                {/* Thêm các bộ lọc vào đây nếu cần */}
                {/* <PriceFilter
                  priceFilterValues={priceFilterValues}
                  maxPrice={maxPrice}
                /> */}
                {/* status */}
                {/* <StatusFilter setCurrPage={setCurrPage} /> */}
                {/* categories */}
                <CategoryFilter categoryId={categoryId} />
                {/* color */}
                {/* <ColorFilter setCurrPage={setCurrPage} /> */}
                {/* product rating */}
                {/* <TopRatedProducts /> */}
                {/* brand */}
                <ProductBrand categoryId={categoryId} />
                {/* reset filter */}
                {/* <ResetButton/> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row">
                    <div className="col-xl-6">
                      {/* <ShopTopLeft    
                        showing={products.length}                  
                        total={products.length}
                      /> */}
                    </div>
                    <div className="col-xl-6">
                      {/* <ShopTopRight selectHandleFilter={selectHandleFilter} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-shop-main-wrapper">
                {loading && <ShopLoader loading={loading}/>}
                {error && <ErrorMsg msg="There was an error" />}
                {!loading && products.length === 0 && <ErrorMsg msg="No Products found!" />}
                {!loading && products.length > 0 && (
                  <div className="tp-shop-items-wrapper tp-shop-item-primary">
                    <div className="tab-content" id="productTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="grid-tab-pane"
                        role="tabpanel"
                        aria-labelledby="grid-tab"
                      >
                        <div className="row">
                        {products.map((item) => (
                              !item.isOutOfStock && (
                                <div
                                  key={item._id}
                                  className="col-xl-4 col-md-6 col-sm-6"
                                >
                                  <ProductItem product={item} />
                                </div>
                              )
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {!loading && products.length > 0 && (
                  <div className="tp-shop-pagination mt-20">
                    <div className="tp-pagination">
                      <Pagination
                        totalItems={2000}
                        countOfPage={20}
                        currPage={currPage}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopArea;

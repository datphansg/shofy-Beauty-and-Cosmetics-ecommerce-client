'use client'
import React, { useEffect, useState } from 'react';
import DetailsThumbWrapper from './details-thumb-wrapper';
import DetailsWrapper from './details-wrapper';
import DetailsTabNav from './details-tab-nav';
import RelatedProducts from './related-products';

const getProductQuery = async (id: string) => {
  const response = await fetch(`https://app-api.selly.vn/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }
  return response.json();
};

const ProductDetailsArea = ({ productId }) => {
  const [productItem, setProductItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImg , setActiveImg] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductQuery(productId);
        setProductItem(product?.data?.product);        
        setActiveImg(product?.data?.product?.shareImages[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>; // Có thể thay thế bằng một loader component
  }

  if (error) {
    return <div>Error: {error}</div>; // Hiển thị thông báo lỗi
  }

  if (!productItem) {
    return <div>No product found</div>; // Hiển thị thông báo không có sản phẩm
  }

  const { shareImages, videoId, status } = productItem;
  const handleImageActive = (item) => {
    setActiveImg(item);
    // Tính năng này không còn cần thiết trong version này
  };
  return (
    <section className="tp-product-details-area">
      <div className="tp-product-details-top pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <DetailsThumbWrapper
                activeImg={activeImg}
                imageURLs={shareImages}
                imgWidth={580}
                imgHeight={670}
                videoId={videoId}
                status={status}
                handleImageActive={handleImageActive}
              />
            </div>
            <div className="col-xl-5 col-lg-6">
              <DetailsWrapper
                productItem={productItem}
                activeImg={activeImg}
                detailsBottom={true}
                handleImageActive={handleImageActive}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tp-product-details-bottom pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <DetailsTabNav product={productItem} />
            </div>
          </div>
        </div>
      </div>
      <section className="tp-related-product pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="tp-section-title-wrapper-6 text-center mb-40">
              <h3 className="tp-section-title-6">Sản phẩm tương tự</h3>
            </div>
          </div>
          <div className="row">
            <RelatedProducts id={productItem._id} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetailsArea;

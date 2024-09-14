
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetActiveBrandsQuery } from "@/redux/features/brandApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopBrandLoader from "@/components/loader/shop/shop-brand-loader";
import slugify from 'slugify';
async function getBrandByCatogoryId(categoryId) {
  const response = await fetch(
    `https://app-api.selly.vn/brands?category=${categoryId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  return response.json();
}
const ProductBrand = ({categoryId,shop_right=false}) => {
  const [all_brands, setallBrands] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  // handle brand route 
  useEffect(() => {
    const fetchData = async () => {
      try {       
        const brandsJson = await getBrandByCatogoryId(categoryId);
        setallBrands(brandsJson?.data?.brands || []);
      } catch (err) {
      }
    };

    fetchData();
  }, [categoryId]);
  const handleBrandRoute = (name,brandId,categoryId) => {
    router.push(
      `/brand/${slugify(name || "default-name", { lower: true })}/${brandId}/${categoryId
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );    
  }
  // decide what to render
  let content = null;
  
  // const sortedBrands = all_brands.slice().sort((a, b) => b.products.length - a.products.length);
  // const brand_items = sortedBrands.slice(0,6);
  content = all_brands.map((b) => (
    <div key={b._id} className="tp-shop-widget-brand-item">
      <a
        onClick={() => handleBrandRoute(b.name, b._id, categoryId)}
        style={{ cursor: "pointer" }}
      >
        <Image src={b.logo.dimensions.md.url} alt="brand" width={60} height={60} />
      </a>
    </div>
  ));
  // if (isLoading) {
  //   content = <ShopBrandLoader loading={isLoading}/>;
  // } else if (!isLoading && isError) {
  //   content = <ErrorMsg msg="There was an error" />;
  // } else if (!isLoading && !isError && brands?.result?.length === 0) {
  //   content = <ErrorMsg msg="No Brands found!" />;
  // } else if (!isLoading && !isError && brands?.result?.length > 0) {
  //   const all_brands = brands.result;
  //   const sortedBrands = all_brands.slice().sort((a, b) => b.products.length - a.products.length);
  //   const brand_items = sortedBrands.slice(0,6);
    
  //   content = brand_items.map((b) => (
  //     <div key={b._id} className="tp-shop-widget-brand-item">
  //       <a
  //         onClick={() => handleBrandRoute(b.name)}
  //         style={{ cursor: "pointer" }}
  //       >
  //         <Image src={b.logo} alt="brand" width={60} height={50} />
  //       </a>
  //     </div>
  //   ));
  // }
  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Thương hiệu</h3>
        <div className="tp-shop-widget-content ">
          <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBrand;

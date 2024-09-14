'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopCategoryLoader from "@/components/loader/shop/shop-category-loader";
import slugify from 'slugify';

async function getSubCategoryByCatogoryId(categoryId) {
  const response = await fetch(
    `https://app-api.selly.vn/product-categories/${categoryId}/sub-categories`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  return response.json();
}
const CategoryFilter = ({categoryId,shop_right=false}) => {
  //const { data: categories, isLoading, isError } = useGetShowCategoryQuery({});
  const [category_items, setCategoryItems] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {       
        const categoryItems = await getSubCategoryByCatogoryId(categoryId);
        setCategoryItems(categoryItems?.data?.subCategories || []);
      } catch (err) {
      }
    };
    fetchData();
  }, [categoryId]);
  // handle category route
  const handleCategoryRoute = (name,categoryId,subCategory) => {
    router.push(
      `/category/${slugify(name || "default-name", { lower: true })}/${categoryId}/${subCategory
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );    
  }
  // decide what to render
  let content = null;
  content = category_items.map((item) => (
    <li key={item._id}>
      <a
        onClick={() => handleCategoryRoute(item.name, categoryId, item._id)}
        style={{ cursor: "pointer" }}
        // className={
        //   router.query.category ===
        //   item.parent.toLowerCase().replace("&", "").split(" ").join("-")
        //     ? "active"
        //     : ""
        // }
      >
          {item.name}
        </a>
      </li>
  ));
  // if (isLoading) {
  //   content = <ShopCategoryLoader loading={isLoading}/>;
  // }
  // if (!isLoading && isError) {
  //   content = <ErrorMsg msg="There was an error" />;
  // }
  // if (!isLoading && !isError && categories?.data?.news?.length === 0) {
  //   content = <ErrorMsg msg="No Category found!" />;
  // }
  // if (!isLoading && !isError && categories?.data?.news?.length > 0) {
  //     content = category_items.map((item) => (
  //     <li key={item._id}>
  //       <a
  //         onClick={() => handleCategoryRoute(item.title, item.action.value)}
  //         style={{ cursor: "pointer" }}
  //         // className={
  //         //   router.query.category ===
  //         //   item.parent.toLowerCase().replace("&", "").split(" ").join("-")
  //         //     ? "active"
  //         //     : ""
  //         // }
  //       >
  //           {item.title}
  //         </a>
  //       </li>
  //   ));
  // }
  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Danh mục sản phẩm</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;

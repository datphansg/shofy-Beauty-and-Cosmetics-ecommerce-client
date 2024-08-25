import React, { useState, useEffect } from "react";

import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import { useGetProductByCatogoriesQuery } from '@/redux/features/productApi';
import ErrorMsg from "@/components/common/error-msg";
import Footer from "@/layout/footers/footer";
import ShopFilterOffCanvas from "@/components/common/shop-filter-offcanvas";
import ShopLoader from "@/components/loader/shop/shop-loader";
import { useGetCategoryQuery } from "@/redux/features/categoryApi";
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { categoryName, Id } = router.query;
  const [currPage, setCurrPage] = useState(1);
  const [nextToken, setNextToken] = useState("");
  const { data: products, isError, isLoading } = useGetProductByCatogoriesQuery({ categoryId: Id, page: currPage });
  
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  
  const { data: categoryInfo } = useGetCategoryQuery(Id, {
    skip: !Id,
  });

  // Load the maximum price once the products have been loaded
  useEffect(() => {
    if (products?.length > 0 && !isLoading && !isError) {
      // Cập nhật nextToken nếu có
      setNextToken(products?.data?.nextPageToken || "");
    }
  }, [products, isLoading, isError]);

  // Theo dõi sự thay đổi của currPage và gọi API để lấy sản phẩm mới
  useEffect(() => {
    if (Id) {
      // Khi currPage thay đổi, gọi lại API với trang mới
      const fetchProducts = async () => {
        // Gọi API để lấy sản phẩm mới
        // Ví dụ: const response = await api.get(`/products?category=${Id}&page=${currPage}`);
        // Cập nhật trạng thái sản phẩm với dữ liệu mới
      };
      fetchProducts();
    }
  }, [currPage, Id]);

  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
    },
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  let content = null;

  if (isLoading) {
    content = <ShopLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <div className="pb-80 text-center"><ErrorMsg msg="There was an error" /></div>;
  }
  if (!isLoading && !isError && products?.data?.products?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.products?.length > 0) {
    let product_items = products.data.products;

    if (selectValue) {
      if (selectValue === "Default Sorting") {
        product_items = products.data.products;
      } else if (selectValue === "Low to High") {
        product_items = products.data.products
          .slice()
          .sort((a, b) => Number(a.price.market) - Number(b.price.market));
      } else if (selectValue === "High to Low") {
        product_items = products.data.products
          .slice()
          .sort((a, b) => Number(b.price.market) - Number(a.price.market));
      } else if (selectValue === "On Sale") {
        product_items = products.data.products.filter((p) => p.discount > 0);
      } else {
        product_items = products.data.products;
      }
    }

    content = (
      <>
        <ShopArea
          CategoryId={Id}
          all_products={products}
          products={product_items}
          otherProps={otherProps}
        />
        <ShopFilterOffCanvas
          all_products={products.data.products}
          otherProps={otherProps}
        />
      </>
    );
  }

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb name={categoryInfo?.data?.category?.name} subtitle={categoryInfo?.data?.category?.name} />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default CategoryPage;

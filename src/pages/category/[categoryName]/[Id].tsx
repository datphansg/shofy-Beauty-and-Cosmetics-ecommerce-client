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
import { Metadata, ResolvingMetadata } from 'next';
import base64 from 'base-64';
import utf8 from 'utf8';
import slugify from "slugify";

async function fetchCategoryData(id: string) {
  // You might need to call your API endpoint directly here
  const response = await fetch(`https://app-api.selly.vn/product-categories/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch category data');
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
type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  // Nếu URL có ít nhất 2 phần, phần tử cuối cùng là ID
  const id  = slug[slug.length - 1];
  const restOfSlug = slug.slice(0, -1).join('/');
  const { data: categoryInfo } = await fetchCategoryData(id);
  console.log(categoryInfo);
  const url = process.env.NEXT_PUBLIC_URL +`${categoryInfo.categoryId}/${slugify(categoryInfo.title, { lower: true })}/${categoryInfo.videoId}`
  return {
    title: categoryInfo.title,
    description: categoryInfo.description,
    keywords: categoryInfo.keywords,
    openGraph: {
      title: categoryInfo.title,
      description: categoryInfo.description,
      url,
      images: [
        {
          url: categoryInfo.image,
          width: 800,
          height: 600,
        }
      ]
    },
    alternates: {
      canonical: url
    },
    robots: {
      index:true,
      follow:true,
    }
  }
}

const CategoryPage = () => {
  const router = useRouter();
  const { categoryName, Id } = router.query;
  const [currPage, setCurrPage] = useState(1);
  const [nextToken, setNextToken] = useState("");
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [nextTokenPage, setNextTokenPage] = useState("");
  const [pageToken, setPageToken] = useState("");
  const { data: products, isError, isLoading } = useGetProductByCatogoriesQuery(
    { categoryId: Id, page: (currPage - 1), nextTokenPage: nextToken, pageToken: pageToken},
    {
      skip: !Id || currPage < 1, // Skip the query if Id is not present or currPage is invalid
    }
  );
  const { data: categoryInfo } = useGetCategoryQuery(Id, {
    skip: !Id,
  });

   // Update nextToken when products are loaded
   useEffect(() => {
    if (products?.data?.products?.length > 0 && !isLoading && !isError) {
       setNextTokenPage(products?.data?.nextPageToken || "");
    }
  }, [products, isLoading, isError]);

  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  const selectPage =(val) =>{
    const payload = { page: val - 1 };
    const jsonPayload = JSON.stringify(payload);
    const encodedPayload = base64UrlEncode(jsonPayload);
    console.log(jsonPayload , encodedPayload);
    setPageToken(encodedPayload);
    setNextToken(nextTokenPage);
    setCurrPage(val);

  };
  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
    },
    selectHandleFilter,
    currPage,
    selectPage,
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

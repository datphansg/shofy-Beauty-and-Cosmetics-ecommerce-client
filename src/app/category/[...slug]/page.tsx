import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import Footer from "@/layout/footers/footer";
import { Metadata, ResolvingMetadata } from 'next';
import slugify from "slugify";
import { Slide } from "react-toastify";
// Hàm fetch thông tin danh mục
async function fetchCategoryData(id: string) {
  const response = await fetch(`https://app-api.selly.vn/product-categories/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch category data');
  }
  return response.json();
}

// Metadata cho trang dựa trên slug của danh mục
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  let categoryId = slug[slug.length - 1]; // Lấy category ID từ slug
  if(slug.length === 3)
  {
    categoryId = slug[slug.length - 2]; 
  }
  const categoryInfo = await fetchCategoryData(categoryId);

  const url = `/category/${slugify(categoryInfo.data.category.name  || "default-name", { lower: true })}/${categoryInfo.data.category._id}`;
 
  return {
    title: categoryInfo.data.category.name,
    openGraph: {
      title: categoryInfo.data.category.name,
    },
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  let categoryId = params.slug[params.slug.length - 1];
  let subCategory = '';
  categoryId = params.slug[params.slug.length - 1]; // Lấy category ID từ slug
  if(params.slug.length === 3)
  {
    categoryId =params.slug[params.slug.length - 2];
    subCategory= params.slug[params.slug.length - 1];
  }
  // Fetch thông tin danh mục
  const categoryInfo = await fetchCategoryData(categoryId);
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb name={categoryInfo.data.category.name} subtitle={categoryInfo.data.category.name} />
      {/* Truyền CategoryId và totalItems vào ShopArea */}
      <ShopArea categoryId={categoryId} subCategory={subCategory} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default CategoryPage;

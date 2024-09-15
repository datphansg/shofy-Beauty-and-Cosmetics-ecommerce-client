import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import Footer from "@/layout/footers/footer";
import Image from 'next/image';
import JewelryBrands from "@/components/brand/jewelry-brands";
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


async function fetchBrandData(id: string) {
  const response = await fetch(`https://app-api.selly.vn/brands/${id}`);
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
  let brandId = slug[slug.length - 1]; // Lấy category ID từ slug
  let url = '';
  if(slug.length === 3)
  {
    brandId = slug[slug.length - 2]; 
  }
  
  const brandInfo = await fetchBrandData(brandId);
  url = `/brand/${slugify(brandInfo.data.brand.name  || "default-name", { lower: true })}/${brandInfo.data.brand._id}`;
 
  return {
    title: brandInfo.data.brand.name,
    description: brandInfo.data.brand.desc,
    openGraph: {
      title: brandInfo.data.brand.name,
      description: brandInfo.data.brand.desc,
      images: [
        {
          url: brandInfo.data.brand.logo.dimensions.sm.url,
          width: 800,
          height: 600,
        }
      ]
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

const BrandPage = async ({ params }: { params: { slug: string } }) => {
  let brandId = params.slug[params.slug.length - 1];
  let categoryId = '';
  brandId = params.slug[params.slug.length - 1]; // Lấy category ID từ slug
  if(params.slug.length === 3)
  {
    brandId =params.slug[params.slug.length - 2];
    categoryId= params.slug[params.slug.length - 1];
  }
  // Fetch thông tin danh mục
  const brandInfo = await fetchBrandData(brandId);
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb name={brandInfo.data.brand.name} subtitle={brandInfo.data.brand.name}  desc={brandInfo.data.brand.desc}/>     
      {/* Truyền CategoryId và totalItems vào ShopArea */}
      <ShopArea categoryId={categoryId} brandId={brandId} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default BrandPage;

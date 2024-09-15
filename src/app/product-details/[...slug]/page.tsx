import React from 'react';
// internal
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import ProductDetailsArea from '@/components/product-details/product-details-area';
import { Metadata, ResolvingMetadata } from 'next';
import slugify from "slugify";
type Props = {
  params: {
    slug: string;
  };
};
const getProductQuery = async (id: string) => {
  const response = await fetch(`https://app-api.selly.vn/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }
  return response.json();
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  let brandId = slug[slug.length - 1]; // Lấy category ID từ slug
  const productInfo = await getProductQuery(brandId);
  const title =productInfo.data.product.categories[0].name +' - Giá Chỉ '+  productInfo.data.product.price.minimum.toLocaleString('vi-VN') + ' - ' +  productInfo.data.product.name ;
  const url = `/product-details/${slugify(productInfo.data.product.name  || "default-name", { lower: true })}/${productInfo.data.product._id}`;
  return {
    title: title,
    description: productInfo.data.product.shareDesc,
    openGraph: {
      title: title,
      description: productInfo.data.product.shareDesc,
      images: [
        {
          url: productInfo.data.product.shareImages[0],
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
const ProductDetailsPage = async ({ params }: Props) => {
  const productId = params.slug[params.slug.length - 1];

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea productId={productId} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ProductDetailsPage;

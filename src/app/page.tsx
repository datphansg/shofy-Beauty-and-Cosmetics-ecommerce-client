
import Wrapper from "@/layout/wrapper";
import HeaderThree from '@/layout/headers/header-3';
import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import BeautyFeatured from '@/components/features/beauty-featured';
import ProductArea from '@/components/products/beauty/product-area';
import BeautyOfferBanner from '@/components/offer-banner/beauty-offer-banner';
import ProductAreaTwo from '@/components/products/beauty/product-area-2';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import HomeSlider from "@/components/home-slider/home-slider";
import Footer from '@/layout/footers/footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Mỹ Phẩm Chính Hãng Anh Thư',
    template: '%s - Mỹ Phẩm Chính Hãng Anh Thư', // `%s` sẽ được thay thế bằng tiêu đề trang con
  },
  description: "Khám phá bộ sưu tập mỹ phẩm chính hãng từ các thương hiệu hàng đầu Hàn Quốc, Nhật Bản, Pháp và Mỹ tại Anh Thư. Chúng tôi cam kết mang đến sản phẩm chất lượng vượt trội với mức giá tốt nhất, giúp bạn tỏa sáng mỗi ngày.",
  openGraph: {
    title: "Mỹ Phẩm Chính Hãng Anh Thư",
    description: "Khám phá bộ sưu tập mỹ phẩm chính hãng từ các thương hiệu hàng đầu Hàn Quốc, Nhật Bản, Pháp và Mỹ tại Anh Thư. Chúng tôi cam kết mang đến sản phẩm chất lượng vượt trội với mức giá tốt nhất, giúp bạn tỏa sáng mỗi ngày.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Mỹ Phẩm Chính Hãng Anh Thư",
      },
    ],
  },
};
export default function Home() {
  return (
    <Wrapper>
        <HeaderThree/>
       <BeautyBanner/> 
       <BeautyCategory/> 
       <BeautyFeatured/> 
       <ProductArea brandId='64113bcebb13ac6800c377bd'/> 
       <ProductArea brandId='61cad96f1a1082f8685ce25d'/> 
       {/* <BeautyOfferBanner/> 
       <ProductAreaTwo/> 
       <TrendingSpecialPrd/> 
       <BeautyTestimonial/> 
       <FeatureAreaTwo/> 
       <InstagramAreaThree/>  */}
      <Footer style_3={true} />
    </Wrapper>
  )
}

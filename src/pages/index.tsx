
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
import Footer from '@/layout/footers/footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Next.js 14 App",
  description: "A description of my app",
  openGraph: {
    title: "My App",
    description: "A description for social media",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "My App",
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
      <ProductArea/>
      <BeautyOfferBanner/>
      <ProductAreaTwo/>
      <TrendingSpecialPrd/>
      <BeautyTestimonial/>
      <FeatureAreaTwo/>
      <InstagramAreaThree/>
      <Footer style_3={true} />
    </Wrapper>
  )
}

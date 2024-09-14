import { ReactNode } from "react";
import ReduxProvider from "@/components/ReduxProvider";
import StripeProvider from "@/components/StripeProvider";
import GoogleAuthProviderComponent from "@/components/GoogleAuthProvider";
import '@/styles/index.scss';
import { Metadata, ResolvingMetadata } from 'next';
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAuthProviderComponent>
          <ReduxProvider>
            <StripeProvider>
              <div id="root">
                {children}
              </div>
            </StripeProvider>
          </ReduxProvider>
        </GoogleAuthProviderComponent>
      </body>
    </html>
  );
}

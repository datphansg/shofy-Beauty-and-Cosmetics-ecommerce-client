// pages/shop/[categoryName]/[productName]/[id].tsx

import { GetServerSideProps } from 'next';

interface Props {
  categoryName: string;
  productName: string;
  id: string;
  data: any; // Thay đổi kiểu dữ liệu phù hợp với dữ liệu bạn đang lấy
}

const ProductPage: React.FC<Props> = ({ categoryName, productName, id, data }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p><strong>Category:</strong> {categoryName}</p>
      <p><strong>Product:</strong> {productName}</p>
      <p><strong>ID:</strong> {id}</p>
      {/* Hiển thị dữ liệu sản phẩm ở đây */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryName, productName, id } = context.query;

  // Lấy dữ liệu từ API hoặc cơ sở dữ liệu dựa trên các tham số
  // Ví dụ: const res = await fetch(`https://api.example.com/products/${id}`);
  // const data = await res.json();

  // Thay thế đoạn này với việc lấy dữ liệu thực tế
  const data = {}; // Dữ liệu mẫu

  return {
    props: {
      categoryName: categoryName as string,
      productName: productName as string,
      id: id as string,
      data, // Dữ liệu sản phẩm
    },
  };
};

export default ProductPage;

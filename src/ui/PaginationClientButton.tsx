'use client'; // Đây là Client Component

import { useState } from "react";

const PaginationClientButton = ({ direction, currPage, totalPage, onPageChange, children }) => {
  const [page, setPage] = useState(currPage);

  const handlePageChange = () => {
    let newPage = page;

    if (direction === "prev" && page > 1) {
      newPage = page - 1;
    } else if (direction === "next" && page < totalPage) {
      newPage = page + 1;
    }

    if (newPage !== page) {
      setPage(newPage);
      onPageChange(newPage); // Gọi callback để thông báo trang mới
    }
  };

  return (
    <button
      onClick={handlePageChange}
      className={`page-numbers ${direction} ${
        (direction === "prev" && page === 1) ||
        (direction === "next" && page === totalPage)
          ? "disabled"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PaginationClientButton;

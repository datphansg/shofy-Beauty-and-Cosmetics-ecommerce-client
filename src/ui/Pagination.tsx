import { useEffect } from "react";
import { PaginationNext, PaginationPrev } from "@/svg";

const Pagination = ({
  totalItems = 12,
  items = [],
  countOfPage = 12,
  paginatedData,
  currPage,
  setCurrPage,
}) => {
  const totalPage = Math.ceil(totalItems / countOfPage);
  const pageStart = (currPage - 1) * countOfPage;

  function setPage(idx) {
    if (idx <= 0 || idx > totalPage) {
      return;
    }
    // setCurrPage(idx);
    // window.scrollTo(0, 0);
    paginatedData(idx);
  }

  // useEffect(() => {
  //   paginatedData(items, pageStart, countOfPage);
  // }, [items, pageStart, countOfPage]);

  return (
    <nav>
      {totalPage > 1 && (
        <ul>
          {/* Previous Button */}
          <li>
            <button
              onClick={() => setPage(currPage - 1)}
              className={`tp-pagination-prev prev page-numbers ${
                currPage === 1 ? "disabled" : ""
              }`}
            >
              <PaginationPrev />
            </button>
          </li>

          {/* Display Previous Page */}
          {currPage > 1 && (
            <li onClick={() => setPage(currPage - 1)}>
              <span>{currPage - 1}</span>
            </li>
          )}

          {/* Display Current Page */}
          <li>
            <span className="current">{currPage}</span>
          </li>

          {/* Display Next Page */}
          {currPage < totalPage && (
            <li onClick={() => setPage(currPage + 1)}>
              <span>{currPage + 1}</span>
            </li>
          )}

          {/* Next Button */}
          <li>
            <button
              onClick={() => setPage(currPage + 1)}
              className={`next page-numbers ${
                currPage === totalPage ? "disabled" : ""
              }`}
            >
              <PaginationNext />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Pagination;

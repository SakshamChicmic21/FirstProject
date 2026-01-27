import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Button from "./Button";

type PaginationProps = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (selectedPage: number) => void;
  onPageSizeChange: (size: number) => void;
  title: string;
};
export const PageLabel = ({
  page,
  currentPage,
}: {
  page: number;
  currentPage: number;
}) => (
  <Button variant={page === currentPage ? "primary" : "ghost"} size="sm">
    {page}
  </Button>
);

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
  title = "users",
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const [inputPage, setInputPage] = useState("");

  const handleJump = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onPageChange(page - 1); // react-paginate uses 0-based index
      setInputPage("");
    }
  };

  return (
    <div className="bg-white px-6 py-4 rounded-b-xl flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 border-t dark:bg-gray-900">
      <div className="flex items-center space-x-2">
        {/* Page size selector */}
        <div className="flex items-center space-x-2">
          <label htmlFor="pageSize" className="text-xs">
            Show
          </label>
          <div className="CustomSelect smSelect">
            <select
              id="pageSize"
              className="border rounded-md  px-2 py-1 text-xs dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              disabled={totalItems === 0}
            >
              {[10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Show count info */}
        {totalItems === 0 ? (
          <p className="text-xs text-gray-500">No {title} to display</p>
        ) : (
          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * pageSize + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * pageSize, totalItems)}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span> {title}
          </p>
        )}
      </div>
      {totalPages ? (
        <div className="flex items-center space-x-2 lg:flex-row gap-2 flex-col">
          {/* Pagination */}

          <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage - 1}
            onPageChange={(selected) => onPageChange(selected.selected)}
            containerClassName="flex space-x-2 items-center paginationWrapper"
            pageClassName="rounded"
            activeClassName="text-black font-bold"
            previousLabel={
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
            }
            nextLabel={
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            }
            pageLabelBuilder={(page) => (
              <PageLabel page={page} currentPage={currentPage} />
            )}
            disabledClassName="opacity-50 cursor-not-allowed"
          />

          {/* Jump to page */}
          <div className="flex items-center space-x-2 w-full">
            <input
              type="number"
              min={1}
              max={totalPages}
              className="w-full border p-2 rounded-md text-xs h-[32px] min-w-[80px] dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
              placeholder="Go to..."
              value={inputPage}
              onChange={(e) => setInputPage(e.target.value)}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleJump}
              disabled={!inputPage}
              className="h-[32px]"
            >
              Go
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;

"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaginationItemComponent from "./PaginationItemComponent";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/store.hooks";
import { setPageNumber } from "@/lib/features/productSlice";
import { useEffect, useMemo, useState } from "react";

export function PaginationComponent() {
  const currentPage = useAppSelector((state) => state.products.pageNumber);
  const dispatch = useAppDispatch();
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/count`
      );
      const productsCount = await res.json();
      setTotalPages(Math.ceil(productsCount.data / 12));
    }

    fetchProducts();
  }, []);
  console.log("totalPages ===> ", totalPages);

  const pages = useMemo(() => {
    if (totalPages === 0) return [];

    const maxPagesToShow = 5;
    const pagesArray: (number | string)[] = [];

    // إذا كان عدد الصفحات قليل، نعرضهم كلهم
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }

    if (startPage > 1) {
      pagesArray.unshift("...");
      pagesArray.unshift(1); // نعرض الصفحة الأولى
    }

    if (endPage < totalPages) {
      pagesArray.push("...");
      pagesArray.push(totalPages); // نعرض الصفحة الأخيرة
    }

    return pagesArray;
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    if (page !== currentPage) {
      dispatch(setPageNumber(page));
    }
  };

  return (
    <Pagination className="w-full my-10">
      <PaginationContent className="flex justify-between items-center">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
              } else {
                goToPage(currentPage - 1);
              }
            }}
            aria-disabled={currentPage === 1}
            className={`px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </PaginationItem>

        {pages.map((page, index) =>
          page === "..." ? (
            <PaginationEllipsis
              key={index}
              className="px-2 text-white bg-sky-400 rounded-md hover:bg-transparent border hover:border-sky-400 hover:text-sky-400"
            />
          ) : (
            <PaginationItemComponent
              key={index}
              link="#"
              number={+page}
              isActive={+page === currentPage}
              goToPage={goToPage}
            />
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
              } else {
                goToPage(currentPage + 1);
              }
            }}
            aria-disabled={currentPage === 1}
            className={`px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

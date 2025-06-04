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
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { useState } from "react";
import useFetchPagesCount from "../hooks/useFetchPagesCount";
import useMemoPagination from "../hooks/useMemoPagination";
import useGoto from "../hooks/useGoto";

export function PaginationComponent() {
  const currentPage: number = useAppSelector(
    (state) => state.products.pageNumber
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  useFetchPagesCount(setTotalPages);

  const pages = useMemoPagination(totalPages, currentPage);

  const goToPage = useGoto();

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
                goToPage(currentPage - 1, currentPage);
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
              goToPage={() => goToPage(+page, currentPage)}
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
                goToPage(currentPage + 1, currentPage);
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

import fetchProductsCountApiCall from "../services/paginationService";

export async function calcTotalPages(
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
) {
  const productsCount = await fetchProductsCountApiCall();

  setTotalPages(Math.ceil(productsCount.data / 12));
}

export function calcPaginationHandler(totalPages: number, currentPage: number) {
  if (totalPages === 0) return [];

  const maxPagesToShow = 5;
  const pagesArray: (number | string)[] = [];

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
    pagesArray.unshift(1);
  }

  if (endPage < totalPages) {
    pagesArray.push("...");
    pagesArray.push(totalPages);
  }

  return pagesArray;
}

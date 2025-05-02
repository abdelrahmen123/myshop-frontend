import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaginationItemComponent from "./PaginationItemComponent";

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function PaginationComponent() {
  return (
    <Pagination className="w-full my-10">
      <PaginationContent className="flex justify-between items-center">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400"
          />
        </PaginationItem>

        {data.map((page) => (
          <PaginationItemComponent key={page} link={"#"} number={page} />
        ))}
        <PaginationEllipsis className="px-2 text-white bg-sky-400 rounded-md hover:bg-transparent border hover:border-sky-400 hover:text-sky-400" />

        <PaginationItem>
          <PaginationNext
            href="#"
            className="px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

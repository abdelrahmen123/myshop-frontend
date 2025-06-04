import { PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { PaginationItemComponentParams } from "../paginationTypes";

function PaginationItemComponent({
  link,
  number,
  isActive,
  goToPage,
}: PaginationItemComponentParams) {
  return (
    <PaginationItem>
      <PaginationLink
        className={`px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400 ${
          isActive && "bg-sky-600 border-sky-600"
        }`}
        href={link}
        onClick={() => goToPage(number)}
      >
        {number}
      </PaginationLink>
    </PaginationItem>
  );
}

export default PaginationItemComponent;

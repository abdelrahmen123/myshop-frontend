import { PaginationItem, PaginationLink } from "@/components/ui/pagination";

function PaginationItemComponent({
  link,
  number,
}: {
  link: string;
  number: number;
}) {
  return (
    <PaginationItem>
      <PaginationLink
        className="px-2 text-white bg-sky-400 hover:bg-transparent border hover:border-sky-400 hover:text-sky-400"
        href={link}
      >
        {number}
      </PaginationLink>
    </PaginationItem>
  );
}

export default PaginationItemComponent;

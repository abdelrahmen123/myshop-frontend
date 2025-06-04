import BestSellers from "../modules/bestSellers/components/BestSellers";
import Categories from "../modules/category/components/Categories";
import { PaginationComponent } from "../modules/pagination/components/Pagination";
import Section from "../modules/product/components/ProductsSection";

export default function Home() {
  return (
    <main>
      <BestSellers />
      <div>
        <Categories />
        <Section />
      </div>
      <PaginationComponent />
    </main>
  );
}

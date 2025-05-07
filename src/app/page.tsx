import BestSellers from "./_components/BestSellers";
import HomePageBody from "./_components/HomePageBody";
import { PaginationComponent } from "./_components/Pagination";

export default function Home() {
  return (
    <main>
      <BestSellers />
      <HomePageBody />
      <PaginationComponent />
    </main>
  );
}

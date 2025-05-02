import Categories from "./_components/Categories";
import { PaginationComponent } from "./_components/Pagination";
import Section from "./_components/Section";
import { Product } from "./types";

const data: Product[] = [
  {
    id: "1",
    title: "Product 1",
    description: "Description 1",
    price: 100,
    discount: 10,
    category: "Category 1",
    imageCover: "/LOGO9.png",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    quantity: 10,
    sold: 5,
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description 2",
    price: 200,
    discount: 20,
    category: "Category 2",
    imageCover: "/LOGO9.png",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    quantity: 10,
    sold: 5,
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description 3",
    price: 300,
    discount: 30,
    category: "Category 3",
    imageCover: "/LOGO9.png",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    quantity: 10,
    sold: 5,
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
  {
    id: "4",
    title: "Product 4",
    description: "Description 4",
    price: 400,
    discount: 40,
    category: "Category 4",
    imageCover: "/LOGO9.png",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    quantity: 10,
    sold: 5,
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
];

const sections: string[] = ["Offers", "Best Sellers", "Others"];

export default function Home() {
  return (
    <main>
      <Categories />
      <div>
        {sections.map((section) => (
          <Section key={section} sectionTitle={section} products={data} />
        ))}
      </div>
      <PaginationComponent />
    </main>
  );
}

import React from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface SectionProps {
  sectionTitle: string;
  products: Product[];
}

function Section({ sectionTitle, products }: SectionProps) {
  return (
    <section className="my-10 mx-10 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-sky-800">{sectionTitle}</h2>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-15">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <hr className="mt-7" />
    </section>
  );
}

export default Section;

import CategoryItem from "./CategoryItem";

const data = ["clothes", "electronics", "furniture", "shoes", "accessories"];

function Categories() {
  return (
    <ul className="flex justify-center mt-6 items-center gap-4">
      {data.map((category) => (
        <li key={category}>
          <CategoryItem categoryname={category} />
        </li>
      ))}
    </ul>
  );
}

export default Categories;

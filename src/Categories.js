import { useState } from "react";

const Categories = ({ categories, selectedCategory }) => {
  const [selectedCategoryState, setSelectedCategoryState] = useState("Recipes");

  return (
    <div className="category-list-and-theme">
      <ul className="category-list">
        {categories?.map((category, index) => (
          <li
            key={category + index}
            className={
              selectedCategoryState === category ? "selected-category" : null
            }
            onClick={() => {
              setSelectedCategoryState(category);
              selectedCategory(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

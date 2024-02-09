import { ALL_CATEGORIES } from "./shared/constant";
const RestaurantCard = ({
  recipe,
  recipeNutitionCategory,
  selectedCategory,
}) => {
  const { name, image } = recipe;
  return (
    <div className="card" key={recipe.id}>
      <img className="card-image" src={image} />
      <h3 className="card-name">
        {name} &nbsp;
        {selectedCategory === ALL_CATEGORIES.RECIPES && recipeNutitionCategory
          ? `[${recipeNutitionCategory} : ${recipe[recipeNutitionCategory]}g]`
          : ""}
      </h3>
    </div>
  );
};

export default RestaurantCard;

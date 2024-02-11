import { ALL_CATEGORIES } from "./shared/constant";
import { Link } from "react-router-dom";
const RestaurantCard = ({
  recipe,
  recipeNutitionCategory,
  selectedCategory,
}) => {
  const { name, image } = recipe;
  return (
    <Link
      className="details"
      to={"/details/" + selectedCategory + "/" + recipe.id}
    >
      <div className="card" key={recipe.id}>
        <img className="card-image" src={image} />
        <h3 className="card-name">
          {name} &nbsp;
          {selectedCategory === ALL_CATEGORIES.RECIPES && recipeNutitionCategory
            ? `[${recipeNutitionCategory} : ${recipe[recipeNutitionCategory]}g]`
            : ""}
        </h3>
      </div>
    </Link>
  );
};

export default RestaurantCard;

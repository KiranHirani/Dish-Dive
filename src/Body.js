import { useEffect, useState } from "react";
import Categories from "./Categories";
import RestaurantCard from "./RestaurantCard";
import Sort from "./Sort";
import { ALL_CATEGORIES } from "./shared/constant";
import Shimmer from "./Shimmer";
import useFetchDataCards from "./Hooks/useFetchDataCards";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";

const Body = ({ searchValue }) => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const data = useFetchDataCards((value) => {
    setDishes(value);
    setFilteredDishes(value);
  });
  const categories = data?.categories;
  const apiResponse = data?.searchResults;
  const [recipeNutritionValue, setRecipeNutitionValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Recipes");
  const onlineStatus = useOnlineStatus();
  const recipesNutritionArray = {
    protein: 10,
    fat: 4,
    calories: 150,
  };

  const showResultsAccToCategory = (category) => {
    const results = getArrayForCategory(category);
    setSelectedCategory(category);
    setDishes(results);
    setFilteredDishes(results);
  };

  const getArrayForCategory = (category) => {
    const { results } = apiResponse.find(({ name }) => name === category);
    return results;
  };

  const filterDishes = (chosenCategory) => {
    if (selectedCategory == ALL_CATEGORIES.RECIPES) {
      setRecipeNutitionValue(chosenCategory);
      const array = getArrayForCategory(selectedCategory).filter((dish) => {
        if (dish[chosenCategory] > recipesNutritionArray[chosenCategory]) {
          return dish;
        }
      });
      setFilteredDishes(array);
    }
  };

  const resetDishes = () => {
    setDishes(getArrayForCategory(ALL_CATEGORIES.RECIPES));
    setFilteredDishes(getArrayForCategory(ALL_CATEGORIES.RECIPES));
  };

  useEffect(() => {
    const filteredArray = dishes?.filter((dish) =>
      dish.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (dishes?.length > 0) setFilteredDishes(filteredArray);
  }, [searchValue]);

  //Conditional Rendering - Rendering on the basis of a condition
  return dishes?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="categories">
        <Categories
          categories={categories}
          selectedCategory={showResultsAccToCategory}
        />

        <Sort
          sortDishes={filterDishes}
          resetDishes={resetDishes}
          categoryArray={recipesNutritionArray}
          selectedCategory={selectedCategory}
        />
      </div>
      <hr />
      <div className="container">
        {/* Restaurant Card */}
        {filteredDishes?.map((recipe) => (
          <RestaurantCard
            recipe={recipe}
            recipeNutitionCategory={recipeNutritionValue}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

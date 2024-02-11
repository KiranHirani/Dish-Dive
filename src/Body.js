import { useEffect, useState } from "react";
import Categories from "./Categories";
import RestaurantCard from "./RestaurantCard";
import Sort from "./Sort";
import {
  ALL_CATEGORIES,
  API_KEY,
  CATEGORY_TO_API_MAPPING,
  ROOT_ADDRESS,
} from "./shared/constant";
import Shimmer from "./Shimmer";

const Body = ({ searchValue }) => {
  const [dishes, setDishes] = useState([]);
  const [recipeNutritionValue, setRecipeNutitionValue] = useState("");
  const [categories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Recipes");
  const [apiResponse, setApiResponse] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
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

  const modifyRecipes = (results) => {
    const modifyDishes = results.map((dish) => {
      const extractRegex = /<b>(\d+(\.\d+)?)(g of)? (protein|fat|calories)/g;
      for (let component of dish.content.matchAll(extractRegex)) {
        dish[component[4]] = Number(component[1]);
      }
      return dish;
    });
    setDishes(modifyDishes);
  };

  const filterDishes = (chosenCategory) => {
    if (selectedCategory == ALL_CATEGORIES.RECIPES) {
      setRecipeNutitionValue(chosenCategory);
      const array = getArrayForCategory(selectedCategory).filter((dish) => {
        if (dish[chosenCategory] > recipesNutritionArray[chosenCategory]) {
          return dish;
        }
      });
      setDishes(array);
      setFilteredDishes(array);
    }
  };

  const resetDishes = () => {
    setDishes(getArrayForCategory(ALL_CATEGORIES.RECIPES));
    setFilteredDishes(getArrayForCategory(ALL_CATEGORIES.RECIPES));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredArray = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (dishes?.length > 0) setFilteredDishes(filteredArray);
  }, [searchValue]);

  let fetchData = async () => {
    try {
      const response = await fetch(
        ROOT_ADDRESS +
          CATEGORY_TO_API_MAPPING["All Category"] +
          "&apiKey=" +
          API_KEY
      );
      response
        .json()
        .then(({ searchResults }) => {
          setApiResponse(searchResults);
          modifyRecipes(searchResults[0].results);
          setFilteredDishes(searchResults[0].results);
          setAllCategories(searchResults.map(({ name }) => name));
        })
        .catch((err) =>
          alert("Something went wrong. Kindly try after some time")
        );
    } catch (err) {
      console.log(err);
    }
  };

  //Conditional Rendering - Rendering on the basis of a condition

  return dishes.length === 0 ? (
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
        {filteredDishes.map((recipe) => (
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

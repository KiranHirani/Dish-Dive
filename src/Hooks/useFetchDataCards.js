import { useEffect, useState } from "react";
import {
  ROOT_ADDRESS,
  CATEGORY_TO_API_MAPPING,
  API_KEY,
} from "../shared/constant";

const useFetchDataCards = (setDishes) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      const response = await fetch(
        ROOT_ADDRESS +
          CATEGORY_TO_API_MAPPING["All Category"] +
          "&apiKey=" +
          API_KEY
      );
      const { searchResults } = await response.json();
      setResponse({
        modifiedRecipeData: modifyRecipes(searchResults[0]?.results),
        searchResults,
        categories: searchResults?.map(({ name }) => name),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const modifyRecipes = (results) => {
    const modifyDishes = results?.map((dish) => {
      const extractRegex = /<b>(\d+(\.\d+)?)(g of)? (protein|fat|calories)/g;
      for (let component of dish.content.matchAll(extractRegex)) {
        dish[component[4]] = Number(component[1]);
      }
      return dish;
    });
    setDishes(modifyDishes);
    return modifyDishes;
  };

  return response;
};

export default useFetchDataCards;

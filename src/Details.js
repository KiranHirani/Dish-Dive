import { useParams } from "react-router-dom";
import CommonHeader from "./Common-Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import RecipeCard from "./RecipeCard";
import Products from "./Products";
import MenuItems from "./Menu_Items";
import RandomRecipe from "./RandomRecipe";
import SimpleFoods from "./SimpleFoods";
import Loader from "./shared/Loader";
import {
  ROOT_ADDRESS,
  API_KEY,
  CATEGORY_TO_API_MAPPING,
  ALL_CATEGORIES,
} from "./shared/constant";
import Videos from "./Videos";

const Details = () => {
  const { category, id } = useParams();
  const [data, setData] = useState({});
  const categoryComponents = {
    [ALL_CATEGORIES.RECIPES]: <RecipeCard data={data} />,
    [ALL_CATEGORIES.PRODUCTS]: <Products data={data} />,
    [ALL_CATEGORIES.ARTICLES]: <RandomRecipe data={data} />,
    [ALL_CATEGORIES.VIDEOS]: <Videos data={data} />,
    [ALL_CATEGORIES.MENU_ITEMS]: <MenuItems data={data} />,
    [ALL_CATEGORIES.SIMPLE_FOODS]: <SimpleFoods data={data} />,
  };
  let selectedComponent = categoryComponents[category];

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const appendIdToUrl = CATEGORY_TO_API_MAPPING[category].replace("{id}", id);
    const apiQueryParam =
      category === ALL_CATEGORIES.VIDEOS ? "&apiKey=" : "apiKey=";
    try {
      const response = await fetch(
        ROOT_ADDRESS + appendIdToUrl + apiQueryParam + API_KEY
      );
      const json = await response.json();
      setResponseInData(json);
    } catch {
      console.log("Error");
    }
  };

  const setResponseInData = (json) => {
    if (category === ALL_CATEGORIES.VIDEOS) {
      const videoResponse = json.searchResults?.find(
        (obj) => obj.name === category
      ).results;
      const selectedObj = videoResponse.find((res) => res.id == id);
      setData(selectedObj);
    } else if (category === ALL_CATEGORIES.ARTICLES) {
      const response = json.recipes[0];
      setData(response);
    } else {
      setData(json);
    }
  };

  const isEmpty = () => {
    return Object.keys(data).length === 0;
  };

  return isEmpty() ? (
    <Loader />
  ) : (
    <div className="details-page">
      <CommonHeader header={data.title || data.name} />
      <div className="navigation-bar">
        <h5>
          {category} > {data.title || data.name}
        </h5>
      </div>
      {selectedComponent}
      <Footer />
    </div>
  );
};

export default Details;

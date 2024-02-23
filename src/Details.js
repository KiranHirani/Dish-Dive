import { useParams } from "react-router-dom";
import CommonHeader from "./Common-Header";
import Footer from "./Footer";
import RecipeCard from "./RecipeCard";
import Products from "./Products";
import MenuItems from "./Menu_Items";
import RandomRecipe from "./RandomRecipe";
import SimpleFoods from "./SimpleFoods";
import useFetchData from "./Hooks/useFetchData";
import Loader from "./shared/Loader";
import { ALL_CATEGORIES } from "./shared/constant";
import Videos from "./Videos";

const Details = () => {
  const { category, id } = useParams();
  const data = useFetchData(category, id);

  const categoryComponents = {
    [ALL_CATEGORIES.RECIPES]: <RecipeCard data={data} />,
    [ALL_CATEGORIES.PRODUCTS]: <Products data={data} />,
    [ALL_CATEGORIES.ARTICLES]: <RandomRecipe data={data} />,
    [ALL_CATEGORIES.VIDEOS]: <Videos data={data} />,
    [ALL_CATEGORIES.MENU_ITEMS]: <MenuItems data={data} />,
    [ALL_CATEGORIES.SIMPLE_FOODS]: <SimpleFoods data={data} />,
    [ALL_CATEGORIES.RANDOM_RECIPE]: <RandomRecipe data={data} />,
  };
  let selectedComponent = categoryComponents[category];

  const isEmpty = () => Object.keys(data).length === 0;

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

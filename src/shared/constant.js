export const HEADER_IMAGE_URL =
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ALL_CATEGORIES = {
  RECIPES: "Recipes",
  PRODUCTS: "Products",
  MENU_ITEMS: "Menu Items",
  ARTICLES: "Articles",
  VIDEOS: "Videos",
  SIMPLE_FOODS: "Simple Foods",
  RANDOM_RECIPE: "Random",
};

export const ROOT_ADDRESS = "https://api.spoonacular.com/";

export const API_KEY = "9a2ebf857c494c68ab8498047a62e44f";

export const CATEGORY_TO_API_MAPPING = {
  "All Category": "food/search?query=vegetable",
  Recipes: "recipes/{id}/information?",
  Products: "food/products/{id}?",
  "Menu Items": "food/menuItems/{id}?",
  Articles: "recipes/random?",
  Videos: "food/search?query=vegetable",
  "Simple Foods": "food/ingredients/{id}/information?",
  Random: "recipes/random?",
  Joke: "food/jokes/random?",
};

//SIMPLE FOODS IMAGE API
export const IMAGE_API = "https://spoonacular.com/cdn/ingredients_250x250/";

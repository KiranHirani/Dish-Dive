import { useEffect, useState } from "react";
import {
  ROOT_ADDRESS,
  API_KEY,
  CATEGORY_TO_API_MAPPING,
  ALL_CATEGORIES,
} from "../shared/constant";

const useFetchData = (category, id) => {
  const [data, setData] = useState([]);

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
    } else if (
      category === ALL_CATEGORIES.ARTICLES ||
      category === ALL_CATEGORIES.RANDOM_RECIPE
    ) {
      const response = json.recipes[0];
      setData(response);
    } else {
      setData(json);
    }
  };

  return data;
};

export default useFetchData;

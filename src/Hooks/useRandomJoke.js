import { useEffect, useState } from "react";

const useRandomJoke = () => {
  const [joke, setJoke] = useState(null);
  const url = `https://api.spoonacular.com/food/jokes/random?apiKey=9a2ebf857c494c68ab8498047a62e44f`;
  //   const url = `https://api.spoonacular.com/recipes/4632/card?apiKey=9a2ebf857c494c68ab8498047a62e44f`;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setJoke(json);
  }

  return joke;
};

export default useRandomJoke;

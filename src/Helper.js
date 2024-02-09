export const getArrayForCategory = (category, apiResponse) => {
  const { results } = apiResponse.find(({ name }) => name === category);
  return results;
};

export const modifyRecipes = (results) => {
  const modifyDishes = results.map((dish) => {
    const extractRegex = /<b>(\d+(\.\d+)?)(g of)? (protein|fat|calories)/g;
    for (let component of dish.content.matchAll(extractRegex)) {
      dish[component[4]] = Number(component[1]);
    }
    return dish;
  });
  return modifyDishes;
};

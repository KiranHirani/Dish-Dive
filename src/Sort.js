import { useState } from "react";
import { ALL_CATEGORIES } from "./shared/constant";
const Sort = ({ sortDishes, resetDishes, categoryArray, selectedCategory }) => {
  const [theme, setTheme] = useState("light");
  const [resetButtonStatus, setReset] = useState("inactive");
  return (
    <>
      <div className="dropdown">
        {selectedCategory === ALL_CATEGORIES.RECIPES && (
          <span>
            <label
              className={`reset ${resetButtonStatus}`}
              onClick={() => {
                setReset("active");
                resetDishes();
              }}
            >
              Show All
            </label>
            <label>High</label>
            <select
              onChange={($event) => {
                setReset("inactive");
                sortDishes($event.target.value);
              }}
            >
              <option disabled selected value>
                {" "}
                Select an option
              </option>
              <option value="protein">
                Protein (>{categoryArray["protein"]}g)
              </option>
              <option value="calories">
                Calories (>{categoryArray["calories"]}g)
              </option>
              <option value="fat">Fat (>{categoryArray["fat"]}g)</option>
            </select>
            <label>Food</label>
          </span>
        )}

        {/* <label className="theme">
          <i
            className="fa-solid fa-moon"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          ></i>
        </label> */}
      </div>
    </>
  );
};
export default Sort;

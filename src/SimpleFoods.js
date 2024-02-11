import { useEffect } from "react";
import { IMAGE_API } from "./shared/constant";
const SimpleFoods = ({ data }) => {
  const { aisle, image } = data;

  return (
    <div className="outer-container">
      <div className="category-details-card">
        <img src={IMAGE_API + image} />
        <h2 className="desc">You will find it in {aisle} section</h2>
      </div>
    </div>
  );
};

export default SimpleFoods;

import { HEADER_IMAGE_URL } from "./shared/constant";
import { Link } from "react-router-dom";

const CommonHeader = ({ header }) => {
  return (
    <div className="common-header">
      <div className="header-background-image">
        <img
          className="common-header-background-image"
          src={HEADER_IMAGE_URL}
        />
      </div>
      <div className="header-brand">
        <span className="title">
          <Link to="/">Dish Dive</Link>
        </span>
        <h2 className="description">{header}</h2>
      </div>
    </div>
  );
};

export default CommonHeader;

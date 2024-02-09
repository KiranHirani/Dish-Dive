import { HEADER_IMAGE_URL } from "./shared/constant";

const CommonHeader = ({ header }) => {
  return (
    <div className="header">
      <div className="header-background-image">
        <img
          className="common-header-background-image"
          src={HEADER_IMAGE_URL}
        />
      </div>
      <div className="header-brand">
        <span className="title">Dish Dive</span>
        <h2 className="description">{header}</h2>
      </div>
    </div>
  );
};

export default CommonHeader;

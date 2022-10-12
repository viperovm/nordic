import PropTypes from "prop-types";
import React from "react";
import ProductGridTwo from "./ProductGridTwo";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const NewProductGrid = ({ category, limit, spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={`product-area pb-60 section-padding-1 ${spaceTopClass ? spaceTopClass : ""} ${
      spaceBottomClass ? spaceBottomClass : ""
    }`}>
      <div className="container-fluid">
        <SectionTitleTwo
          titleText="Новые поступления"
          subTitleText="Посмотрите на наши самые крутые новинки!"
          positionClass="text-center"
          spaceClass="mb-60"
        />
        <div className="row five-column">
          <ProductGridTwo
            category={category}
            type="new"
            limit={limit}
            spaceBottomClass="mb-25"
          />
        </div>
      </div>
    </div>
  );
};

NewProductGrid.propTypes = {
  category: PropTypes.string,
  limit: PropTypes.number
};

export default NewProductGrid;

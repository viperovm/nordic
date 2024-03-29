import PropTypes from "prop-types";
import React, {useState} from "react";
import { setActiveLayout } from "../../helpers/product";
import ShopCategories from "./ShopCategories";
import ShopSize from "./ShopSize";
import ShopTag from "./ShopTag";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount
}) => {
  return (
    <div className="shop-top-bar mb-0 mb-lg-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={e => getFilterSortParams("filterSort", e.target.value)}
          >
            <option value="default">По умолчанию</option>
            <option value="priceLowToHigh">Цена - Дешевле</option>
            <option value="priceHighToLow">Цена - Дороже</option>
          </select>
        </div>
        <p>
          Показано {sortedProductCount} из {productCount} продуктов
        </p>
      </div>

      <div className="shop-tab">
        <button
          onClick={e => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={e => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
        {/*<button*/}
        {/*  onClick={e => {*/}
        {/*    getLayout("list");*/}
        {/*    setActiveLayout(e);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <i className="fa fa-list-ul" />*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number
};

export default ShopTopAction;

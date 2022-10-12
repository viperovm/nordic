import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
import ShopSize from "../../components/product/ShopSize";
import ShopTag from "../../components/product/ShopTag";
import {getAllCategories} from "../../redux/actions/goodsActions";
import {connect} from "react-redux";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass, categories}) => {
  // const uniqueCategories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);
  // const uniqueSizes = getProductsIndividualSizes(products);
  // const uniqueTags = getIndividualTags(products);

  console.log(categories)

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      {categories && <ShopCategories
        categories={categories}
        getSortParams={getSortParams}
      />}

      {/* filter by color */}
      {/*<ShopColor colors={uniqueColors} getSortParams={getSortParams} />*/}

      {/*/!* filter by size *!/*/}
      {/*<ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />*/}

      {/*/!* filter by tag *!/*/}
      {/*<ShopTag tags={uniqueTags} getSortParams={getSortParams} />*/}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  categories: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;

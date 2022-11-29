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
import {getAllCategories, getCommercial} from "../../redux/actions/goodsActions";
import {connect} from "react-redux";
import CommercialBanner from "../../components/product/CommercialBanner";

const ShopSidebar = ({
                       products,
                       getSortParams,
                       sideSpaceClass,
                       categories,
                       active,
                       commercial,
                       getCommercial,}) => {

  useEffect(() => {
    getCommercial()
  }, [])

  // const uniqueCategories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);
  // const uniqueSizes = getProductsIndividualSizes(products);
  // const uniqueTags = getIndividualTags(products);

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      {/*<ShopSearch />*/}

      {/* filter by categories */}
      {categories && <ShopCategories
        active={active}
        categories={categories}
        getSortParams={getSortParams}
      />}
      {commercial?.length>0 && <CommercialBanner
        commercial={commercial}
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

const mapStateToProps = state => ({
  commercial: state.goods.commercial,
})
const mapDispatchToProps = {
  getCommercial,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopSidebar)

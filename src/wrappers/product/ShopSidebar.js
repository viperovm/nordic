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
import {getAllCategories, getAllSizes, getCommercial} from "../../redux/actions/goodsActions";
import {connect} from "react-redux";
import CommercialBanner from "../../components/product/CommercialBanner";

const ShopSidebar = ({
                       products,
                       getAllCategories,
                       getSortParams,
                       sideSpaceClass,
                       active,
                       commercial,
                       getCommercial,
                       action,
                       params,
                       all_categories,
                       all_sizes,
                       getAllSizes,
                     }) => {

  console.log(active)

  useEffect(() => {
    getCommercial()
    getAllCategories()
    getAllSizes()
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
      {all_categories && <ShopCategories
        params={params}
        active={active}
        categories={all_categories}
        getSortParams={getSortParams}
        action={action}
      />}
      {all_sizes && <ShopSize
        params={params}
        sizes={all_sizes}
        getSortParams={getSortParams}
        action={action}
      />}
      <ShopTag
        params={params}
        getSortParams={getSortParams}
        action={action}
      />
      {commercial?.length > 0 && <CommercialBanner
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
  sideSpaceClass: PropTypes.string
};

const mapStateToProps = state => ({
  commercial: state.goods.commercial,
  all_categories: state.goods.all_categories,
  all_sizes: state.goods.all_sizes,
})
const mapDispatchToProps = {
  getCommercial,
  getAllCategories,
  getAllSizes,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopSidebar)

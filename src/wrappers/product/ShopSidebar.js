import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
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
                       action,
                       params,
                       all_categories,
                       all_sizes,
                       getAllSizes,
                     }) => {

  const [activeFilter, setActiveFilter] = useState(true)

  useEffect(() => {
    getAllCategories()
    getAllSizes()
  }, [])

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      {/*<ShopSearch />*/}
      <div className="select-shoing-wrap" style={{marginBottom: activeFilter ? '20px' : '5px', cursor: 'pointer'}}>
        <p className="pro-sidebar-title" onClick={() => setActiveFilter(activeFilter => !activeFilter)}>
          Фильтры
          {activeFilter
            ?
            <i className="fa fa-chevron-up" style={{fontSize: '10px', marginLeft: '5px'}}/>
            :
            <i className="fa fa-chevron-down" style={{fontSize: '10px', marginLeft: '5px'}}/>
          }

        </p>
      </div>

      {
        activeFilter && (
          <>
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
          </>
        )
      }

      {commercial?.length > 0 && <CommercialBanner
        commercial={commercial}
      />}

    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

const mapStateToProps = state => ({
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

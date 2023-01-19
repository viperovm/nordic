import PropTypes from "prop-types";
import React from "react";
import ProductgridList from "./ProductgridList";
import CommercialBanner from "../../components/product/CommercialBanner";

const ShopProducts = ({ products, layout, commercial }) => {
  return (
    <div className="shop-bottom-area mt-0 mt-lg-4">
      <div className={`row ${layout ? layout : ""}`}>
        <div className='d-block d-lg-none mb-20'>
          {commercial?.length > 0 && <CommercialBanner
            commercial={commercial}
            fixed={false}
          />}
        </div>
        <ProductgridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProducts;

import PropTypes from "prop-types";
import React, {Fragment, useEffect} from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import {getOneGoods} from "../../redux/actions/goodsActions";
import {useHistory} from "react-router-dom";

const Product = ({ location, product, getOneGoods, ...props }) => {

  const history = useHistory()

  useEffect(() => {
    getOneGoods(props.match.params.id)
    return () => getOneGoods()
  }, [])

  console.log(props.match.params.id)
  console.log(product)

  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Product Page</title>
        <meta
          name="description"
          content="Product page of NordicWay."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      {/*<BreadcrumbsItem to={process.env.PUBLIC_URL + "/shop"}>Магазин</BreadcrumbsItem>*/}
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/shop"}>
        {product?.name}
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <div onClick={history.goBack} className={'backwards'}><i className="fa fa-arrow-left"/>Назад</div>
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product?.description}
        />

        {/* related product slider */}
        {/*<RelatedProductSlider*/}
        {/*  spaceBottomClass="pb-95"*/}
        {/*  category={product.category[0]}*/}
        {/*/>*/}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = state => ({
  product: state.goods.one_goods,
})

export default connect(mapStateToProps, {getOneGoods, })(Product);

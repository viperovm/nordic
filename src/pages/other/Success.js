import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {Link} from "react-router-dom";
import {resetStatus} from "../../redux/actions/goodsActions";

const Success = ({ location, resetStatus }) => {
  const { pathname } = location;

  useEffect(() => {
    resetStatus()
  }, [])

  return (
    <>
      <Fragment>
        <MetaTags>
          <title>NordicWay | Заказ оформлен</title>
          <meta
            name="description"
            content="Success"
          />
        </MetaTags>
        <BreadcrumbsItem to={"/"}>Главная</BreadcrumbsItem>
        <BreadcrumbsItem to={pathname}>
          Заказ оформлен
        </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="error-area pt-40 pb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 text-center">
                  <div className="success">
                    <h1>УРА!</h1>
                    <h2>Ваш заказ успешно оформлен!</h2>
                    <p className='mb-50'>
                      Наши сотрудники уже приступили к его обработке и свяжутся с Вами в ближайшее время.
                    </p>
                    {/*<form className="searchform mb-50">*/}
                    {/*  <input*/}
                    {/*    type="text"*/}
                    {/*    name="search"*/}
                    {/*    id="error_search"*/}
                    {/*    placeholder="Search..."*/}
                    {/*    className="searchform__input"*/}
                    {/*  />*/}
                    {/*  <button type="submit" className="searchform__submit">*/}
                    {/*    <i className="fa fa-search" />*/}
                    {/*  </button>*/}
                    {/*</form>*/}
                    <Link to={"/"} className="success-btn">
                      На Главную
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {resetStatus,}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Success)
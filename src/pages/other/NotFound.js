import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const NotFound = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Not Found</title>
        <meta
          name="description"
          content="404 page"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        404
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>ОЙ! СТРАНИЦА НЕ НАЙДЕНА</h2>
                  <p className='mb-50'>
                    Мы сожалеем, но страница, которую Вы ищите, не существует, была удалена, или временно недоступна.
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
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    На Главную
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;

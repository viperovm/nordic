import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/temp" + "/shop"}>
              Магазин
              {" "}
              {strings["Магазин"]}
              {/*{sidebarMenu ? (*/}
              {/*  <span>*/}
              {/*    <i className="fa fa-angle-right"></i>*/}
              {/*  </span>*/}
              {/*) : (*/}
              {/*  <i className="fa fa-angle-down" />*/}
              {/*)}*/}
            </Link>
            {/*<ul className="mega-menu">*/}
            {/*  <li>*/}
            {/*    <ul>*/}
            {/*      <li className="mega-menu-title">*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>*/}
            {/*          {strings["shop_layout"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>*/}
            {/*          {strings["shop_grid_standard"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-filter"}>*/}
            {/*          {strings["shop_grid_filter"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-two-column"}>*/}
            {/*          {strings["shop_grid_two_column"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-no-sidebar"}>*/}
            {/*          {strings["shop_grid_no_sidebar"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-full-width"}>*/}
            {/*          {strings["shop_grid_full_width"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link*/}
            {/*          to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-right-sidebar"}*/}
            {/*        >*/}
            {/*          {strings["shop_grid_right_sidebar"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-standard"}>*/}
            {/*          {strings["shop_list_standard"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-full-width"}>*/}
            {/*          {strings["shop_list_full_width"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-two-column"}>*/}
            {/*          {strings["shop_list_two_column"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <ul>*/}
            {/*      <li className="mega-menu-title">*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>*/}
            {/*          {strings["product_details"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>*/}
            {/*          {strings["product_tab_bottom"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product-tab-left/1"}>*/}
            {/*          {strings["product_tab_left"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product-tab-right/1"}>*/}
            {/*          {strings["product_tab_right"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product-sticky/1"}>*/}
            {/*          {strings["product_sticky"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product-slider/1"}>*/}
            {/*          {strings["product_slider"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link*/}
            {/*          to={process.env.PUBLIC_URL + "/temp" + "/product-fixed-image/1"}*/}
            {/*        >*/}
            {/*          {strings["product_fixed_image"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product/8"}>*/}
            {/*          {strings["product_simple"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>*/}
            {/*          {strings["product_variation"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/product/9"}>*/}
            {/*          {strings["product_affiliate"]}*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <ul>*/}
            {/*      <li className="mega-menu-img">*/}
            {/*        <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>*/}
            {/*          <img*/}
            {/*            src={*/}
            {/*              process.env.PUBLIC_URL + "/temp" +*/}
            {/*              "/assets/img/banner/banner-12.png"*/}
            {/*            }*/}
            {/*            alt=""*/}
            {/*          />*/}
            {/*        </Link>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </li>
          {/*<li>*/}
          {/*  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>*/}
          {/*    {strings["collection"]}*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>*/}
          {/*    {strings["pages"]}*/}
          {/*    {sidebarMenu ? (*/}
          {/*      <span>*/}
          {/*        <i className="fa fa-angle-right"></i>*/}
          {/*      </span>*/}
          {/*    ) : (*/}
          {/*      <i className="fa fa-angle-down" />*/}
          {/*    )}*/}
          {/*  </Link>*/}
          {/*  <ul className="submenu">*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/cart"}>*/}
          {/*        {strings["cart"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/checkout"}>*/}
          {/*        {strings["checkout"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/wishlist"}>*/}
          {/*        {strings["wishlist"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/compare"}>*/}
          {/*        {strings["compare"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/my-account"}>*/}
          {/*        {strings["my_account"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/login-register"}>*/}
          {/*        {strings["login_register"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/about"}>*/}
          {/*        {strings["about_us"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/contact"}>*/}
          {/*        {strings["contact_us"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/not-found"}>*/}
          {/*        {strings["404_page"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-standard"}>*/}
          {/*    {strings["blog"]}*/}
          {/*    {sidebarMenu ? (*/}
          {/*      <span>*/}
          {/*        <i className="fa fa-angle-right"></i>*/}
          {/*      </span>*/}
          {/*    ) : (*/}
          {/*      <i className="fa fa-angle-down" />*/}
          {/*    )}*/}
          {/*  </Link>*/}
          {/*  <ul className="submenu">*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-standard"}>*/}
          {/*        {strings["blog_standard"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-no-sidebar"}>*/}
          {/*        {strings["blog_no_sidebar"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-right-sidebar"}>*/}
          {/*        {strings["blog_right_sidebar"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-details-standard"}>*/}
          {/*        {strings["blog_details_standard"]}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={process.env.PUBLIC_URL + "/temp" + "/contact"}>*/}
          {/*    {strings["contact_us"]}*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);

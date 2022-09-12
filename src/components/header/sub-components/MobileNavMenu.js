import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>{strings["home"]}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>
                {strings["home_group_one"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion"}>
                    {strings["home_fashion"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-two"}>
                    {strings["home_fashion_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-three"}>
                    {strings["home_fashion_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-four"}>
                    {strings["home_fashion_four"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-five"}>
                    {strings["home_fashion_five"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-six"}>
                    {strings["home_fashion_six"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-seven"}>
                    {strings["home_fashion_seven"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-fashion-eight"}>
                    {strings["home_fashion_eight"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-kids-fashion"}>
                    {strings["home_kids_fashion"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-cosmetics"}>
                    {strings["home_cosmetics"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture"}>
                    {strings["home_furniture"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-two"}>
                    {strings["home_furniture_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-three"}>
                    {strings["home_furniture_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-four"}>
                    {strings["home_furniture_four"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>
                {strings["home_group_two"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-five"}>
                    {strings["home_furniture_five"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-six"}>
                    {strings["home_furniture_six"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-furniture-seven"}>
                    {strings["home_furniture_seven"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-electronics"}>
                    {strings["home_electronics"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-electronics-two"}>
                    {strings["home_electronics_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-electronics-three"}>
                    {strings["home_electronics_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-book-store"}>
                    {strings["home_book_store"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-book-store-two"}>
                    {strings["home_book_store_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-plants"}>
                    {strings["home_plants"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-flower-shop"}>
                    {strings["home_flower_shop"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-flower-shop-two"}>
                    {strings["home_flower_shop_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-organic-food"}>
                    {strings["home_organic_food"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-organic-food-two"}>
                    {strings["home_organic_food_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-onepage-scroll"}>
                    {strings["home_onepage_scroll"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>
                {strings["home_group_three"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-grid-banner"}>
                    {strings["home_grid_banner"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-auto-parts"}>
                    {strings["home_auto_parts"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-cake-shop"}>
                    {strings["home_cake_shop"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-handmade"}>
                    {strings["home_handmade"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-pet-food"}>
                    {strings["home_pet_food"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-medical-equipment"}>
                    {strings["home_medical_equipment"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-christmas"}>
                    {strings["home_christmas"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-black-friday"}>
                    {strings["home_black_friday"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-black-friday-two"}>
                    {strings["home_black_friday_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/home-valentines-day"}>
                    {strings["home_valentines_day"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>
            {strings["shop"]}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>
                {strings["shop_layout"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>
                    {strings["shop_grid_standard"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-filter"}>
                    {strings["shop_grid_filter"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-two-column"}>
                    {strings["shop_grid_two_column"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-no-sidebar"}>
                    {strings["shop_grid_no_sidebar"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-full-width"}>
                    {strings["shop_grid_full_width"]}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-right-sidebar"}
                  >
                    {strings["shop_grid_right_sidebar"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-standard"}>
                    {strings["shop_list_standard"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-full-width"}>
                    {strings["shop_list_full_width"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-list-two-column"}>
                    {strings["shop_list_two_column"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>
                {strings["product_details"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>
                    {strings["product_tab_bottom"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product-tab-left/1"}>
                    {strings["product_tab_left"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product-tab-right/1"}>
                    {strings["product_tab_right"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product-sticky/1"}>
                    {strings["product_sticky"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product-slider/1"}>
                    {strings["product_slider"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product-fixed-image/1"}>
                    {strings["product_fixed_image"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>
                    {strings["product_simple"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>
                    {strings["product_variation"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/temp" + "/product/1"}>
                    {strings["product_affiliate"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/temp" + "/shop-grid-standard"}>
            {strings["collection"]}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>{strings["pages"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/cart"}>
                {strings["cart"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/checkout"}>
                {strings["checkout"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/wishlist"}>
                {strings["wishlist"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/compare"}>
                {strings["compare"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/my-account"}>
                {strings["my_account"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/login-register"}>
                {strings["login_register"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/about"}>
                {strings["about_us"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/contact"}>
                {strings["contact_us"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/not-found"}>
                {strings["404_page"]}
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-standard"}>
            {strings["blog"]}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-standard"}>
                {strings["blog_standard"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-no-sidebar"}>
                {strings["blog_no_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-right-sidebar"}>
                {strings["blog_right_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/temp" + "/blog-details-standard"}>
                {strings["blog_details_standard"]}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/temp" + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);

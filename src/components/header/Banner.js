import PropTypes from "prop-types";
import React, {useState} from "react";
import {multilanguage} from "redux-multilanguage";
import {connect} from "react-redux";
import {setCurrency} from "../../redux/actions/currencyActions";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import {closeBanner} from "../../redux/actions/goodsActions";

const Banner = ({
                  action,
                  text_1,
                  text_2,
                }) => {


  return (

    <>
      <div className={"header-top-banner-container"}>
        {/* header top */}
        <div className="banner-text">
          <div>{text_1}</div>
          {' '}
          <div>{text_2}</div>
        </div>
        <i className="pe-7s-close-circle banner-close" onClick={action}/>
      </div>
    </>

  );
};

export default Banner

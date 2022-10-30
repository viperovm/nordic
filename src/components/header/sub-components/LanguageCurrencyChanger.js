import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import wa from '../../../assets/img/wa.svg'
import tg from '../../../assets/img/tg.svg'

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency-wrap">
      {/*<div className="same-language-currency language-style">*/}
      {/*  <span>*/}
      {/*    {currentLanguageCode === "en"*/}
      {/*      ? "English"*/}
      {/*      : currentLanguageCode === "fn"*/}
      {/*      ? "French"*/}
      {/*      : currentLanguageCode === "de"*/}
      {/*      ? "Germany"*/}
      {/*      : ""}{" "}*/}
      {/*    <i className="fa fa-angle-down" />*/}
      {/*  </span>*/}
      {/*  <div className="lang-car-dropdown">*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <button value="en" onClick={e => changeLanguageTrigger(e)}>*/}
      {/*          English*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <button value="fn" onClick={e => changeLanguageTrigger(e)}>*/}
      {/*          French*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <button value="de" onClick={e => changeLanguageTrigger(e)}>*/}
      {/*          Germany*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="same-language-currency use-style">*/}
      {/*  <span>*/}
      {/*    {currency.currencyName} <i className="fa fa-angle-down" />*/}
      {/*  </span>*/}
      {/*  <div className="lang-car-dropdown">*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <button value="USD" onClick={e => setCurrencyTrigger(e)}>*/}
      {/*          USD*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <button value="EUR" onClick={e => setCurrencyTrigger(e)}>*/}
      {/*          EUR*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <button value="GBP" onClick={e => setCurrencyTrigger(e)}>*/}
      {/*          GBP*/}
      {/*        </button>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="same-language-currency">
        <span>Связаться с нами: <a href="tel:+74991300275">+7 (499) 1300 275</a> | <a href="tel:+79295073560">+7 (929) 507 35 60</a> | <a href="https://tap.link/@nordic_way"><img
          src={wa} alt="whatsapp" className='messenger-icon'/>nordic_way</a> | <a href="https://t.me/nordicway_kombezy"><img src={tg} alt="telegram" className='messenger-icon'/>nordicway_kombezy</a></span>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;

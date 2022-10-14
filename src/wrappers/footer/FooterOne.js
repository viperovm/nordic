import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logo.png"
              spaceBottomClass="mb-30"
            />
          </div>
          {/*<div*/}
          {/*  className={`${*/}
          {/*    sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  <div className="footer-widget mb-30 ml-30">*/}
          {/*    <div className="footer-title">*/}
          {/*      <h3>ABOUT US</h3>*/}
          {/*    </div>*/}
          {/*    <div className="footer-list">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "/about"}>About us</Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>*/}
          {/*            Store location*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "/contact"}>*/}
          {/*            Contact*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>*/}
          {/*            Orders tracking*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className={`${*/}
          {/*    sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  <div*/}
          {/*    className={`${*/}
          {/*      sideMenu*/}
          {/*        ? "footer-widget mb-30 ml-95"*/}
          {/*        : "footer-widget mb-30 ml-50"*/}
          {/*    }`}*/}
          {/*  >*/}
          {/*    <div className="footer-title">*/}
          {/*      <h3>USEFUL LINKS</h3>*/}
          {/*    </div>*/}
          {/*    <div className="footer-list">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>Returns</Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>*/}
          {/*            Support Policy*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>Size guide</Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link to={process.env.PUBLIC_URL + "/temp" + "#/"}>FAQs</Link>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className={`${*/}
          {/*    sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  /!* footer newsletter *!/*/}
          {/*  <FooterNewsletter*/}
          {/*    spaceBottomClass="mb-30"*/}
          {/*    spaceLeftClass="ml-70"*/}
          {/*    sideMenu={sideMenu}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;

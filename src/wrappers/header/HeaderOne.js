import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import Banner from "../../components/header/Banner";
import {connect} from "react-redux";
import {getBanner} from "../../redux/actions/goodsActions";

const HeaderOne = ({
                     layout,
                     top,
                     borderStyle,
                     headerPaddingClass,
                     headerPositionClass,
                     headerBgClass,
                     getBanner,
                     banner,
                   }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    getBanner()
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const [active, setActive] = useState(true)

  const handleCloseAction = () => {
    setActive(false)
  }

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >

      {banner?.is_active && <div
        className={`d-${active ? 'block' : 'none'} header-top-banner ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      >
        <Banner borderStyle={borderStyle} action={handleCloseAction} text_1={banner?.text_1} text_2={banner?.text_2}/>
      </div>}


      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"
        } header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          <HeaderTop borderStyle={borderStyle}/>
        </div>
      </div>

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo
                // imageUrl="/assets/img/logo/logo.png"
                logoClass="logo"
                logoText="NordicWay."
              />
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu/>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup/>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu/>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  banner: state.goods.banner,
})

const mapDispatchToProps = {
  getBanner,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderOne)

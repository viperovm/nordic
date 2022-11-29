import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getCommercial} from "../../redux/actions/goodsActions";
import "react-image-gallery/styles/scss/image-gallery.scss";

const CommercialBanner = ({ getCommercial, commercial }) => {

  useEffect(() => {
    getCommercial()
  }, [])

  const [scroll, setScroll] = useState(0);
  const [bannerTop, setBannerTop] = useState(0);
  const [bannerLeft, setBannerLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(null);
  const [index, setIndex] = useState(0);
  const [bannerStatus, setBannerStatus] = useState('in');

  const handleIndex = () => {
    setBannerStatus('in')
    let last = commercial.length - 1
    if(index === last) {
      setIndex(0)
    } else {
      setIndex(i => i+1)
    }
  }

  useEffect(() => {
    let timer
    if(commercial.length === 1) {
      setActiveSlide(commercial[0])
    } else if(commercial.length > 1) {
      setActiveSlide(commercial[index])
      timer = setTimeout(() => setBannerStatus('out'), 14000)
    }
    return () => clearTimeout(timer)
  }, [commercial, index])

  useEffect(() => {
    let timer
    if(bannerStatus === 'out') {
      timer = setTimeout(() => handleIndex(), 1000)
    }
    return () => clearTimeout(timer)
  }, [bannerStatus])

  useEffect(() => {
    const banner = document.querySelector(".sidebar-widget-banner").getBoundingClientRect();
    setBannerTop(banner.top - 160);
    setBannerLeft(banner.left);
    // console.log(banner.offsetLeft);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      {commercial?.length > 0 && <div
        className={`sidebar-widget-banner ${
          scroll > bannerTop ? "fixed" : ""
        }`}
        style={{left: bannerLeft}}
      >
        {
          <div className={`banner-animation-${bannerStatus}`}>
            <a href={activeSlide?.url}>
              <div className="sidebar-widget-banner-image" style={{backgroundImage: `url(${activeSlide?.image})`}}/>
            </a>
            <a href={activeSlide?.url}>
              <h3 className="sidebar-widget-banner-title">{activeSlide?.title}</h3>
            </a>
            <a href={activeSlide?.url}>
              <h4 className="sidebar-widget-banner-subtitle">{activeSlide?.subtitle}</h4>
            </a>
            <a href={activeSlide?.url}>
              <div className="sidebar-widget-banner-text">{activeSlide?.text}</div>
            </a>
          </div>
        }
      </div>}
    </>
  );
};

const mapStateToProps = state => ({
  commercial: state.goods.commercial,
})
const mapDispatchToProps = {
  getCommercial,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommercialBanner)
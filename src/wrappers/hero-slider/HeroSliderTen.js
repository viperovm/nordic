import React, {useEffect} from "react";
import Swiper from "react-id-swiper";
// import sliderData from "../../data/hero-sliders/hero-slider-ten.json";
import HeroSliderTenSingle from "../../components/hero-slider/HeroSliderTenSingle.js";
import men from "../../assets/img/slider/men.jpg"
import women from "../../assets/img/slider/women.jpg"
import children from "../../assets/img/slider/children.jpg"
import {connect} from "react-redux";
import {getSlides} from "../../redux/actions/goodsActions";

const HeroSliderTen = ({
                         getSlides,
                         slides,
                       }) => {

  useEffect(() => {
    getSlides()
  }, [])

  const sliderData = [
    {
      id: 1,
      title: "Это круто!",
      subtitle: "Мужские комбезы",
      text: "Лучшее к зиме!",
      image: men,
      url: "/shop?category=1"
    },
    {
      id: 2,
      title: "Это круто!",
      subtitle: "Женские комбезы",
      text: "Лучшее к зиме!",
      image: women,
      url: "/shop?category=2"
    },
    {
      id: 3,
      title: "Это круто!",
      subtitle: "Детские комбезы",
      text: "Лучшее к зиме!",
      image: children,
      url: "/shop?category=3"
    }
  ]

  const params = {
    effect: "fade",
    loop: slides?.length > 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      slides?.length > 1 ? <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button> : ''
    ),
    renderNextButton: () => (
      slides?.length > 1 ? <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button> : ''
    )
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {slides &&
            slides.map((single, key) => {
              return (
                <HeroSliderTenSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  slides: state.goods.slides,
})
const mapDispatchToProps = {
  getSlides,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeroSliderTen)

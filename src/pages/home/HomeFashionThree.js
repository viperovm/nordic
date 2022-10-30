import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import NewProductGrid from "../../wrappers/product/NewProductGrid";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import ProductGridTwo from "../../wrappers/product/ProductGridTwo";
import {Link} from "react-router-dom";

const HomeFashionThree = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Nordic Way | Главная</title>
        <meta
          name="description"
          content="Комбинезоны Nordic Way"
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* feature icon */}
        {/*<FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />*/}
        {/* product grid */}

        <div className={`product-area pb-60 pt-60`}>
          <div className="container">
            <SectionTitleTwo
              titleText="Магазин комбинезонов Nordic Way"
              subTitleText="Вся линейка лучших комбинезонов"
              positionClass="text-center"
              spaceClass="mb-60"
            />

            <div className='text-center'>
              <h4>Доставим завтра (Если вы в Москве)!</h4>
              <p>
                Компания Nordic Way производит для вас удобные и стильные комбинезоны, которые признаны уже огромным количеством
                поклонников этой марки по всему миру.<br/>
                Марка Nordic Way- знак качества и особого отношения к жизни!<br/>
                Интернет-магазин предлагает купить вам модели комбинезонов по каталогу компании.
              </p>
              <h4>
                Наслаждайся жизнью вместе с нами!
              </h4>
              <div className="slider-btn btn-hover mt-40">
                <Link
                  className="animated btn-home"
                  to={process.env.PUBLIC_URL + "/shop"}
                >
                  В МАГАЗИН
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/*<NewProductGrid category="accessories" limit={10} spaceTopClass="pt-60" />*/}
        {/* blog featured */}
        {/*<BlogFeatured spaceBottomClass="pb-55" />*/}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionThree;

import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Contact</title>
        <meta
          name="description"
          content="Contact of NordicWay."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Контакты
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100 pl-10 pr-10 pl-lg-100 pr-lg-100">
          <div className="container">
            <div>
              <div className="contact-info-wrap">
                <div className="row">
                  <div className="col-lg-8 col-md-0 d-none d-lg-flex align-items-center justify-content-center nordic-text">
                    NordicWay.
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="single-contact-info mb-40">
                      <div className="contact-icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="contact-info-dec">
                        <p>
                          <a href="tel:+74991300275">+7 (499) 1300 275</a>
                        </p>
                        <p>
                          <a href="tel:+79295073560">+7 (929) 507 35 60</a>
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info mb-40">
                      <div className="contact-icon">
                        <i className="fa fa-globe" />
                      </div>
                      <div className="contact-info-dec">
                        <p>
                          <a href="https://tap.link/nordic_way">nordic_way</a>
                        </p>
                        <p>
                          <a href="mailto:sales@nordicway.ru">sales@nordicway.ru</a>
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker" />
                      </div>
                      <div className="contact-info-dec">
                        <p>г. Москва, Скотопрогонная, 35 </p>
                        <p><a href="http://nordicway.ru">www.nordicway.ru</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;

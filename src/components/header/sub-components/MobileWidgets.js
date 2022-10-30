import React from "react";
import wa from '../../../assets/img/wa.svg'
import tg from '../../../assets/img/tg.svg'

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel:+74991300275">+7 (499) 1300 275</a>
            </li>
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel:+79295073560">+7 (929) 507 35 60</a>
            </li>
            <li>
              <img
                src={wa} alt="whatsapp" className='messenger-icon'/>{" "}
              <a href="https://tap.link/@nordic_way">nordic_way</a>
            </li>
            <li>
              <img src={tg} alt="telegram" className='messenger-icon'/>{" "}
              <a href="https://t.me/nordicway_kombezy">nordicway_kombezy</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MobileWidgets;

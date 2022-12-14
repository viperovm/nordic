import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>Главная</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop"}>
            Магазин
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                Мужские
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop/2"}>
                Женские
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop/3"}>
                Детские
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/size"}>
            Таблица размеров
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/faq"}>
            Частые вопросы
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            Контакты
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

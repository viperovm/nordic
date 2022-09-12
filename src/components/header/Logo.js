import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoText, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + "/temp" + "/"}>
        {imageUrl
          ?
          <img alt="" src={process.env.PUBLIC_URL + imageUrl} />
          :
          <div className="logo_text">{logoText}</div>
        }
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;

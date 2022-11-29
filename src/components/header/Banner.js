import React from "react";

const Banner = ({
                  action,
                  text_1,
                  text_2,
                }) => {


  return (

    <>
      <div className={"header-top-banner-container"}>
        {/* header top */}
        <div className="banner-text">
          <div>{text_1}</div>
          {' '}
          <div>{text_2}</div>
        </div>
        <i className="pe-7s-close-circle banner-close" onClick={action}/>
      </div>
    </>

  );
};

export default Banner

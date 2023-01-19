import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import { setActiveSort } from "../../helpers/product";

const ShopSize = ({
                    sizes,
                    action,
                    params,
}) => {

  const [active, setActive] = useState('')

  useEffect(() => {
    setActive(
      params?.filter(
        param => param?.name === 'size'
      )[0].value
    )
  }, [params])

  const getProperSizeName = (size) => {
    if (size === '2' || size === '4') {
      return `${size} года`
    } else if (size === '6' || size === '8' || size === '10') {
      return `${size} лет`
    } else {
      return size
    }
  }

  return (
    <div className="sidebar-widget mt-40">
      <h4 className="pro-sidebar-title">Размеры </h4>
      <div className="sidebar-widget-list mt-20">
        {sizes ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  className={active === '' ? 'active' : ''}
                  onClick={e => {
                    action(`size`, '')
                    // getSortParams("size", "");
                    // setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> Все размеры{" "}
                </button>
              </div>
            </li>
            {sizes?.map((size, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      className={active == size.id ? 'active text-uppercase' : 'text-uppercase'}
                      onClick={e => {
                        action('size', size.id)
                        // getSortParams("size", size);
                        // setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" />
                      {getProperSizeName(size.size)}
                     {" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "Нет размеров"
        )}
      </div>
    </div>
  );
};

export default ShopSize;

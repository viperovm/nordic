import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const ShopCategories = ({
                          categories,
                          action,
                          params,
                        }) => {

  const [active, setActive] = useState('')

  useEffect(() => {
    setActive(
      params?.filter(
        param => param?.name === 'category'
      )[0].value
    )
  }, [params])

  console.log(active)

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Категории </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  className={!active ? 'active' : ''}
                  onClick={e => {
                    action(`category`, '')
                    // history.push(`/shop`)
                    // getSortParams("category", "");
                    // setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> Все категории
                </button>
              </div>
            </li>
            {categories?.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left active">
                    <button
                      className={category.id == active ? 'active' : ''}
                      onClick={e => {
                        action(`category`, category.id)
                        // history.push(`/shop?category=${category.id}`)
                        // history.push(`/shop/${category.id}`)
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category.name}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "Категорий не найдено"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;

import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import { setActiveSort } from "../../helpers/product";

const ShopTag = ({
                   // tags,
                   getSortParams,
                   action,
                   params,
}) => {

  const [active, setActive] = useState('')

  useEffect(() => {
    setActive(
      params?.filter(
        param => param?.name === 'tag'
      )[0].value
    )
  }, [params])


  const tags = [
    'Распродажа',
    'Новинка'
  ]

  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Тэги </h4>
      <div className="sidebar-widget-tag mt-25">
        {tags ? (
          <ul>
            <li>
              <button
                className={active === '' ? 'active' : ''}
                onClick={e => action('tag', '')}
                // onClick={e => {
                //   getSortParams("tag", 'Все');
                //   setActiveSort(e);
                // }}
              >
                Все
              </button>
            </li>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <button
                    className={active === tag ? 'active' : ''}
                    onClick={e => {
                      action('tag', tag)
                      // history.push(`/shop?tag=${tag}`)
                      // history.push(`/shop/${category.id}`)
                    }}
                    // onClick={e => {
                    //   getSortParams("tag", tag);
                    //   setActiveSort(e);
                    // }}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "Нет тэгов"
        )}
      </div>
    </div>
  );
};

ShopTag.propTypes = {
  getSortParams: PropTypes.func,
  tags: PropTypes.array
};

export default ShopTag;

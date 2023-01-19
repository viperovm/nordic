import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';
import { getSortedProducts } from '../../helpers/product';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import {getAllGoods, getAllCategories, getCommercial} from "../../redux/actions/goodsActions";
import qs from "qs";
import {useHistory} from "react-router-dom";

const ShopGridStandard = ({match, location, products, all_goods,
                              one_goods, getAllGoods, all_categories, getCommercial, commercial, getAllCategories}) => {
    const [layout, setLayout] = useState('grid three-column');
    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterSortType, setFilterSortType] = useState('');
    const [filterSortValue, setFilterSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [size, setSize] = useState('');
    const [params, setParams] = useState([
        {name: 'category', value: ''},
        {name: 'size', value: ''},
        {name: 'tag', value: ''},
        {name: 'sort', value: 'default'},
    ]);
    const [filteredGoods, setFilteredGoods] = useState([])
    const [sortedGoods, setSortedGoods] = useState([])
    const history = useHistory()

    useEffect(() => {
        getCommercial()
    })

    useEffect(() => {

        let size = params.filter(param => param.name === 'size')[0].value

        let goods = all_goods.filter(item => (
            (((params.filter(param => param.name === 'category')[0].value) == item.category.id)
              ||
              (!(params.filter(param => param.name === 'category')[0].value)))
            &&
            (
              (item.size.some(single => single?.id == size))
              ||
              (!(params.filter(param => param.name === 'size')[0].value))
            )
            &&
            (
              ((params.filter(param => param.name === 'tag')[0].value === 'Распродажа') && item.discount > 0)
              ||
              ((params.filter(param => param.name === 'tag')[0].value === 'Новинка') && item.new)
              ||
              (!(params.filter(param => param.name === 'tag')[0].value))
            )
          )
        )

        if(params.filter(param => param.name === 'sort')[0].value === 'default') {
            setFilteredGoods(goods)
        } else if (params.filter(param => param.name === 'sort')[0].value === 'priceHighToLow') {
            setFilteredGoods(goods.sort((a, b) => {
                return b.price - a.price
            }))
        } else if (params.filter(param => param.name === 'sort')[0].value === 'priceLowToHigh') {
            setFilteredGoods(goods.sort((a, b) => {
                return a.price - b.price
            }))
        }
    }, [params])

    useEffect(() => {
        const list = [
            'category',
            'size',
            'tag'
        ]
        if(location.search) {
            list.map(item => {
                if(qs.parse(location.search, { ignoreQueryPrefix: true })[item]) {
                    setParams(params => params.map(param => {
                        if(param?.name === item) {
                            return {
                                name: item,
                                value: qs.parse(location.search, { ignoreQueryPrefix: true })[item]
                            }
                        } else {
                            return param
                        }
                    }))
                } else {
                    setParams(params => params.map(param => {
                        if(param?.name === item) {
                            return {
                                name: item,
                                value: ''
                            }
                        } else {
                            return param
                        }
                    }))
                }
            })
        } else {
            setCategory('')
            setTag('')
            setSize('')
            setSortType('')
            setSortValue('')
        }
    }, [location])

    useEffect(() => {
        getAllGoods()
    }, [])

    const handleParams = (key, val) => {
        const str = params.map(param => {
            if(param?.name === key) {
                if(param?.value === val) {
                    return `${key}=`
                } else {
                    return `${key}=${val}`
                }
            } else {
                return `${param?.name}=${param?.value}`
            }
        }).join('&')
        history.push(`/shop?${str}`)
    }

    // useEffect(() => {
    //     if(all_categories.length < 1) {
    //         getAllCategories()
    //     }
    // }, [all_categories])

    const pageLimit = 50;
    const {pathname} = location;

    const getLayout = (layout) => {
        setLayout(layout)
    }

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    }

    useEffect(() => {
        if(category) {
            setSortType('category')
            setSortValue(Number(category))
        } else if(size) {
            setSortType('size')
            setSortValue(Number(size))
        } else if(tag) {
            setSortType('tag')
            setSortValue(tag)
        } else {
            setSortType('')
            setSortValue('')
        }
    }, [category, size, tag])

    const getFilterSortParams = (sortType, sortValue) => {
        setParams(params => params.map(
          item => {
              if(item.name === 'sort') {
                  return {
                      name: 'sort',
                      value: sortValue
                  }
              } else {
                  return item
              }
          }
        ))
        //
        // setFilterSortType(sortType);
        // setFilterSortValue(sortValue);
    }

    useEffect(() => {
        let sortedProducts = getSortedProducts(all_goods, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, all_goods, sortType, sortValue, filterSortType, filterSortValue ]);

    return (
        <Fragment>
            <MetaTags>
                <title>NordicWay | Магазин</title>
                <meta name="description" content="Shop page of NordicWay." />
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Главная</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Магазин</BreadcrumbsItem>

            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div
                              className="col-lg-3"
                              // className="col-lg-3 order-2 order-lg-1"
                            >
                                {/* shop sidebar */}
                                <ShopSidebar
                                  products={all_goods}
                                  getSortParams={getSortParams}
                                  active={category}
                                  sideSpaceClass="mr-30"
                                  action={handleParams}
                                  params={params}
                                  commercial={commercial}
                                />
                            </div>

                            <div
                              className="col-lg-9"
                              // className="col-lg-9 order-1 order-lg-2"
                            >
                                {/* shop topbar default */}
                                <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={all_goods.length} sortedProductCount={currentData.length} />

                                {/* shop page content default */}
                                <ShopProducts
                                  commercial={commercial}
                                  layout={layout}
                                  products={filteredGoods}
                                  // products={currentData}
                                />

                                {/* shop product pagination */}
                                <div className="pro-pagination-style text-center mt-30">
                                    <Paginator
                                        totalRecords={sortedProducts.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}

ShopGridStandard.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array
}

const mapStateToProps = state => (
  {
      products: state.productData.products,
      all_goods: state.goods.all_goods,
      one_goods: state.goods.one_goods,
      commercial: state.goods.commercial,
  }
)

export default connect(mapStateToProps, {getAllGoods, getAllCategories, getCommercial,})(ShopGridStandard);
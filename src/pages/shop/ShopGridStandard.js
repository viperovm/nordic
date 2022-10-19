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
import {getAllGoods, getAllCategories} from "../../redux/actions/goodsActions";

const ShopGridStandard = ({match, location, products, all_goods,
                              one_goods, getAllGoods, all_categories, getAllCategories}) => {
    const [layout, setLayout] = useState('grid three-column');
    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterSortType, setFilterSortType] = useState('');
    const [filterSortValue, setFilterSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    const {search} = location
    const {category_id} = match?.params


    useEffect(() => {
        console.log(11)
        getAllGoods()
        getAllCategories()
    }, [])

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
        console.log('location changed')
        if(category_id) {
            setSortType('category')
            setSortValue(Number(category_id))
        } else {
            setSortType('')
            setSortValue('')
        }
    }, [category_id])

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
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
                <title>NordicWay | Shop Page</title>
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
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* shop sidebar */}
                                <ShopSidebar categories={all_categories} products={all_goods} getSortParams={getSortParams} active={category_id} sideSpaceClass="mr-30"/>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                {/* shop topbar default */}
                                <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={all_goods.length} sortedProductCount={currentData.length} />

                                {/* shop page content default */}
                                <ShopProducts layout={layout} products={currentData} />

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
      all_categories: state.goods.all_categories,
  }
)

export default connect(mapStateToProps, {getAllGoods, getAllCategories,})(ShopGridStandard);
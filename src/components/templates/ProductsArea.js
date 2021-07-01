import React from 'react'
import { Row , Col } from 'react-bootstrap'

import FilterBox from '../organisms/FilterBox'
import ProductList from '../organisms/ProductList'

function ProductsArea(props) {

    return (
        <Row className="myProductsAreaMargin">
            <Col className=" pl-0 pe-4" xs={12} lg={3}>
                <div className="myFilterBox px-3 pb-4">
                    <FilterBox 
                        fashion={props.fashion && props.fashion}
                        setSearchText={props.setSearchText}
                        setSearchCategory={props.setSearchCategory}
                        setTriggerSortLowestPrice={props.setTriggerSortLowestPrice}
                        setTriggerSortHighestPrice={props.setTriggerSortHighestPrice}
                        setTriggerSortProductName={props.setTriggerSortProductName}
                    />
                </div>
            </Col>
            <Col xs={12} lg={9}>
                <ProductList data={props.dataProduct}/>
            </Col>
        </Row>
    )
}

export default ProductsArea

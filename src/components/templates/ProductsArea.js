import {React , useState} from 'react'
import { Row , Col , Button } from 'react-bootstrap'

import imgNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg' 
import FilterBox from '../organisms/FilterBox'
import ProductList from '../organisms/ProductList'

function ProductsArea(props) {

    const [triggerFilter, setTriggerFilter] = useState(false)

    return (
        <Row className="myProductsAreaMargin"> 
            <Col className={triggerFilter ? "myFilterResponsiveOn" : "myFilterResponsive pl-0 pe-0 pe-lg-4"} xs={12} lg={3}>
                <div className="myFilterBox px-3 pb-4">
                    <FilterBox 
                        setTriggerFilter={setTriggerFilter}
                        triggerFilter={triggerFilter}
                        fashion={props.fashion && props.fashion}
                        setSearchText={props.setSearchText}
                        setSearchCategory={props.setSearchCategory}
                        setTriggerSortLowestPrice={props.setTriggerSortLowestPrice}
                        setTriggerSortHighestPrice={props.setTriggerSortHighestPrice}
                        setTriggerSortProductName={props.setTriggerSortProductName}
                    />
                </div>
            </Col>
            <Col className="myFilterButtonCol px-0 mb-4 text-end">
                <Button variant="secondary" onClick={()=>setTriggerFilter(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                    </svg>
                    <span>  Filter</span>
                </Button>
                <div className={triggerFilter ? "myOverlayOn" : "myOverlayOff"}></div>
            </Col>
            <Col xs={12} lg={9}>
                <ProductList fashion={props.fashion && props.fashion} data={props.dataProduct} imgNotFoundPotrait={imgNotFoundPotrait}/>
            </Col>
        </Row>
    )
}

export default ProductsArea

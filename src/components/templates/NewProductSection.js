import React from 'react'
import {Row,Col} from 'react-bootstrap'

import CenterTitle2 from '../atoms/CenterTitle2'
import HighlightNewProduct from '../molecules/HighlightNewProduct'

function NewProductSection(props) {
    return (
        <div className="mb-5">
            <CenterTitle2 text={"our new product"} text2={"new this week"}/>
            <Row className="d-flex justify-content-between">
                <Col className="d-flex justify-content-center mb-5" lg={6}>
                    <HighlightNewProduct 
                        cosmetic={true}
                        image={props.cosmetic.length>0 ? props.cosmetic[0].image : props.imageNotFound} 
                        id={props.cosmetic.length>0 && props.cosmetic[0].id}
                    />
                </Col>
                <Col className="d-flex justify-content-center mb-5" lg={6}>
                    <HighlightNewProduct 
                        fashion={true}
                        image={props.fashion.length>0 ? props.fashion[0].image : props.imageNotFound} 
                        id={props.fashion.length>0 && props.fashion[0].id}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default NewProductSection

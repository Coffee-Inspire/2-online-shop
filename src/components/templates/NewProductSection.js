import React from 'react'
import {Row,Col} from 'react-bootstrap'
import SkeletonNewProduct from '../../skeletons/SkeletonNewProduct'

import CenterTitle2 from '../atoms/CenterTitle2'
import HighlightNewProduct from '../molecules/HighlightNewProduct'

function NewProductSection(props) {

    return (
        <div className="mb-5">
            <CenterTitle2 text={"our new product"} text2={"new this week"}/>
            <Row className="d-flex justify-content-evenly">
                {(props.statusCosmetic === true || props.statusFashion === true) && <SkeletonNewProduct/>}
                {props.statusCosmetic === false && props.statusFashion === false && <>
                    {props.cosmetic.length>0 && 
                        <Col className="d-flex justify-content-center mb-5 px-0" lg={3}>
                        <HighlightNewProduct 
                                cosmetic={true}
                                image={props.cosmetic.length>0 ? props.cosmetic[props.cosmetic.length-1].image : props.imageNotFound} 
                                id={props.cosmetic.length>0 && props.cosmetic[props.cosmetic.length-1].id}
                            />
                        </Col>
                    }
                    {props.cosmetic.length>1 && 
                        <Col className="d-flex justify-content-center mb-5 px-0" lg={3}>
                        <HighlightNewProduct 
                                cosmetic={true}
                                image={props.cosmetic.length>0 ? props.cosmetic[props.cosmetic.length-2].image : props.imageNotFound} 
                                id={props.cosmetic.length>0 && props.cosmetic[props.cosmetic.length-2].id}
                            />
                        </Col>
                    }
                    {props.fashion.length>0 &&
                        <Col className="d-flex justify-content-center mb-5 px-0" lg={3}>
                            <HighlightNewProduct 
                                fashion={true}
                                image={props.fashion.length>0 ? props.fashion[props.fashion.length-1].image : props.imageNotFound} 
                                id={props.fashion.length>0 && props.fashion[props.fashion.length-1].id}
                            />
                        </Col>
                    }
                    {props.fashion.length>1 &&
                        <Col className="d-flex justify-content-center mb-5 px-0" lg={3}>
                            <HighlightNewProduct 
                                fashion={true}
                                image={props.fashion.length>0 ? props.fashion[props.fashion.length-2].image : props.imageNotFound} 
                                id={props.fashion.length>0 && props.fashion[props.fashion.length-2].id}
                            />
                        </Col>
                    }
                    </>
                }
            </Row>
        </div>
    )
}

export default NewProductSection

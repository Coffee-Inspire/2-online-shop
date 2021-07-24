import React from 'react'
import {Row , Col } from 'react-bootstrap'
import '../style/skeleton.css'
import '../style/oneStyle.css'

import SkeletonBase from './SkeletonBase';

function SkeletonCatalogPage() {
    return (
        <div className="myProductsAreaMargin">
            <Row className=" d-flex flex-row justify-content-center justify-content-lg-end">
                <Col xs={12} lg={9}>
                        <Row className="d-flex justify-content-center">
                            {[1,2,3].map((item,index)=>(
                                <Col key={index} className="skeleton-card py-0 py-lg-0 px-0 px-lg-4 mb-4" xs={12} lg={4}> 
                                    <div className="h-100 skeleton-card-bg">
                                        <div className="h-75">
                                            <SkeletonBase type="thumb"/>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center px-3 h-25">
                                            <div className="w-75">
                                                <SkeletonBase type="title" />
                                            </div>
                                            <div className="w-50">
                                                <SkeletonBase type="text" />
                                            </div>
                                        </div>                       
                                    </div>   
                                </Col>
                            ))}
                        </Row>
                </Col>
            </Row>
        </div>
    )
}

export default SkeletonCatalogPage

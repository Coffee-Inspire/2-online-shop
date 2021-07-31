import React from 'react'
import {Row , Col } from 'react-bootstrap'
import '../style/skeleton.css'
import '../style/oneStyle.css'

import SkeletonBase from './SkeletonBase';

function SkeletonDetailPage() {
    return (
        <Row>
            <Col className="d-flex flex-row justify-content-center justify-content-lg-end pe-lg-5" xs={12} lg={6}>
                <div className="myProductDetailFrame">
                    <SkeletonBase type={"thumb"} />
                </div>
            </Col>
            <Col className="pl-lg-5" xs={12} lg={6}>
                <Col className="d-flex flex-column mt-4 mt-lg-0 " xs={12} lg={10}>
                    <div className="text-capitalize mb-3 w-75 align-self-center align-self-lg-start"><SkeletonBase type={"title"}/></div>    
                    <div className="text-secondary mb-4 w-50 align-self-center align-self-lg-start"><SkeletonBase type={"text"}/></div>  
                    <div className="pl-3 pe-3 pl-lg-0 pe-lg-0 mb-4 mb-lg-5 "><SkeletonBase type={"text"} count={3}/></div>
                    <div className="w-50 align-self-center align-self-lg-start"><SkeletonBase type={"title"} /> </div>  
                </Col>
            </Col>
        </Row>
    )
}

export default SkeletonDetailPage

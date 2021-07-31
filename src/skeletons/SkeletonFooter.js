import React from 'react'
import {Row , Col } from 'react-bootstrap'
import '../style/skeleton.css'
import '../style/oneStyle.css'

import SkeletonBase from './SkeletonBase';

function SkeletonFooter() {
    return (
       <Row className="d-flex justify-content-center text-center myFooterRow">
           <Col className="d-flex justify-content-center my-4" xs={12} lg={12}>
                <div className="myFooterImageFrame skeleton-emblem ">
                    <SkeletonBase type={"thumb"}/>
                </div>
           </Col>
           <Col className="mb-3" xs={11} lg={6}>
                <SkeletonBase type={"text"} count={3}/>
            </Col>
            <Col className="d-flex flex-lg-row flex-wrap justify-content-center mb-5 ml-lg-5 pl-lg-5" xs={12} lg={9}>
                {[1,2,3,4].map((item,index)=>(
                    <Col key={index} className="my-4 mb-lg-0 d-flex flex-column" xs={11} lg={3}>
                            <Col className="pb-2" xs={12} lg={12}>
                                <SkeletonBase type={"text"} />
                            </Col>
                            <Col className="px-2">
                                <div className="ml-2">
                                    <SkeletonBase type={"text"}/>
                                </div>
                            </Col>
                    </Col>
                ))}
            </Col>
       </Row>
    )
}

export default SkeletonFooter

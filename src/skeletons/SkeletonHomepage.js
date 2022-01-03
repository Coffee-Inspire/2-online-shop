import React from 'react'
import {Row , Col } from 'react-bootstrap'
import '../style/skeleton.css'
import '../style/oneStyle.css'

import SkeletonBase from './SkeletonBase';

function SkeletonHomepage() {

    return (
        <div>
            <Row className="justify-content-center my-5">
                <Col xs={9} lg={3}>
                    <SkeletonBase type="title"/>
                </Col>
            </Row>
            <Row className="skeleton myImageBannerFrame">
                <Col className="p-0">
                    <SkeletonBase type="thumb"/>
                </Col>
            </Row>
        </div>
    )
}

export default SkeletonHomepage

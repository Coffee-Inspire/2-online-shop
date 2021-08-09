import React from 'react'
import { Col } from 'react-bootstrap'
import '../style/skeleton.css'
import '../style/oneStyle.css'

import SkeletonBase from './SkeletonBase';

function SkeletonNewProduct() {
    return (
        <Col className="px-0">
            <SkeletonBase type={"thumb"}/>
        </Col>
    )
}

export default SkeletonNewProduct

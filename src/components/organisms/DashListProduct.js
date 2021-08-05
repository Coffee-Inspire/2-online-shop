import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';

function DashListProduct() {
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);
    const fashionData = useSelector(state => state.productFashion);

    return (
        <Row className="m-0">
        <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product" />
            <Col xs={12} md={12} lg={11} className="position-lg-absolute top-0 w-100 pb-4 pb-lg-0 p-lg-4 text-lg-end">
                <Button className="btnBrown btnUploadListProduct px-5 py-2 ">
                    Upload Product
                </Button>
            </Col>
        </div>
        <Col xs={12} md={11} className="">
        <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
            <TitleBodyDashboard text="Cosmetic" />
            <hr className="myHr" />
        </div>
        <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
            <TitleBodyDashboard text="Fashion" />
            <hr className="myHr" />
        </div>
        </Col>
        </Row>
    )
}

export default DashListProduct
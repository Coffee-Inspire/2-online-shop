import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import ListProduct from '../molecules/ListProduct';

import { getProductCosmeticAction } from '../../redux/actions/productCosmetic.actions';
import { getProductFashionAction } from '../../redux/actions/productFashion.actions';

function DashListProduct() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);
    const fashionData = useSelector(state => state.productFashion);

    const [cosmeticForm, setCosmeticForm] = useState([]);
    const [fashionForm, setFashionForm] = useState([]);

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getProductCosmeticAction(setCosmeticForm));
        dispatch(getProductFashionAction(setFashionForm));
    }, [dispatch])

    return (
        <>
        <Row className="m-0">
        {/* <Modal size="lg" show={show} onHide={()=>setShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className="border-0 pb-0" closeButton>
            </Modal.Header>
            <Modal.Body className="pb-3 pt-0">
                <h4 className="text-center">Choose the type of product</h4>
            </Modal.Body>
            <Modal.Footer className="border-0 pb-4 d-flex justify-content-around">
            <Button className="btnBrown shadow-brown px-4" onClick={()=>history.push("./addcosmetic")}>
                Add Product Cosmetic
            </Button>
            <Button className="btnBrown shadow-brown px-4" onClick={()=>setShow(false)}>
                Add Product Fashion
            </Button>
            </Modal.Footer>
        </Modal> */}
        <div onClick={(e)=>setShow(false)} className={(show && "show showMe ")  + " fade modal bg-overlayOnly"}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
        <div onClick={e=>e.stopPropagation()} className="modal-content">
            <Modal.Header className="border-0 pb-0" >
            <button onClick={()=>setShow(false)} type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
            </Modal.Header>
            <Modal.Body className="pb-3 pt-0">
                <h4 className="text-center">Choose the type of product</h4>
            </Modal.Body>
            <Modal.Footer className="border-0 pb-4 mb-2 d-flex justify-content-around">
            <Button className="btnBrown shadow-brown px-4 btnTypeProduct" onClick={()=>history.push("./addcosmetic")}>
                Add Product Cosmetic
            </Button>
            <Button className="btnBrown shadow-brown px-4 btnTypeProduct" onClick={()=>history.push("./addfashion")}>
                Add Product Fashion
            </Button>
            </Modal.Footer>
        </div>
        </div>
        </div>
        
        <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product" />
            <Col xs={12} md={12} lg={11} className="position-lg-absolute top-0 w-100 pb-4 pb-lg-0 p-lg-4 text-lg-end">
                <Button onClick={()=>setShow(true)} className="btnBrown btnUploadListProduct px-5 py-2 shadow-brown">
                    Upload Product
                </Button>
            </Col>
        </div>
        <Col xs={12} md={11} className="">
            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Cosmetic" number={cosmeticForm.length} />
                <hr className="myHr" />
                {cosmeticForm.length === 0 ? 
                <h1 className="fw-light text-center my-5">Your List is Empty</h1>
                :
                cosmeticForm.map((item, index) => {

                })
                }
            </div>

            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Fashion" number={fashionForm.length} />
                <hr className="myHr" />
                {fashionForm.length === 0 ? 
                <h1 className="fw-light text-center my-5">Your List is Empty</h1>
                :
                <div>List product</div>
                }
            </div>
        </Col>
        </Row>
        </>
    )
}

export default DashListProduct
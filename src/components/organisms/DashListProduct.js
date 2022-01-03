import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Modal, Tabs, Tab, Spinner, Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import TitleDashboard from '../atoms/TitleDashboard';
// import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import ListProduct from '../molecules/ListProduct';

import DashAddCosmetic from './DashAddCosmetic';
import DashAddFashion from './DashAddFashion';

import { getProductCosmeticAction } from '../../redux/actions/productCosmetic.actions';
import { getProductFashionAction } from '../../redux/actions/productFashion.actions';

function DashListProduct() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);
    const fashionData = useSelector(state => state.productFashion);

    const [cosmeticForm, setCosmeticForm] = useState([]);
    const [fashionForm, setFashionForm] = useState([]);

    const [show, setShow] = useState(false);    //Modal
    const [key, setKey] = useState('cosmetic');     //Tabs
    const [showToast, setShowToast] = useState(false);  //Toast

    // 
    const [editStatus, setEditStatus] = useState({
        active : false,
        type : "",
        data : {},
    });

    useEffect(() => {
        dispatch(getProductCosmeticAction(setCosmeticForm));
        dispatch(getProductFashionAction(setFashionForm));
    }, [dispatch])

    return (
        <>
        <div className={(editStatus.active ? "" : "d-none ")}>
            {editStatus.type === "cosmetic" &&
                <DashAddCosmetic 
                    edit={true} 
                    data={editStatus.data}
                    setEditStatus={setEditStatus}
                    cosmeticForm={cosmeticForm}
                    setCosmeticForm={setCosmeticForm}
                    setShowToast={setShowToast}
                />
            }
            {editStatus.type === "fashion" &&
                <DashAddFashion 
                    edit={true} 
                    data={editStatus.data}
                    setEditStatus={setEditStatus}
                    fashionForm={fashionForm}
                    setFashionForm={setFashionForm}
                    setShowToast={setShowToast}
                />
            }
        </div>

        <Row className={(editStatus.active && "d-none ") + " m-0"}>
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
        <div onClick={(e)=>setShow(false)} className={(show && "show showMe ")  + " fade modal modalMe bg-overlayOnly"}>
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
        
        <Col xs={12} md={11} className="mb-3">
            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow tabCustom">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="cosmetic" 
                        title={
                            <div className="myColor">
                                Cosmetic
                                <span className="ml-3 circleNotification">{cosmeticForm.length}</span>
                            </div>
                        }>

                        <div className="d-flex justify-content-center justify-content-lg-start flex-wrap overflow-hidden listProduct">
                            {cosmeticData.isInitial ? 
                                <div className="w-100 text-center my-5">
                                    <Spinner animation="border" />
                                </div>
                            :
                                cosmeticForm.length === 0 ? 
                                <h1 className="fw-light w-100 text-center my-5">Your List is Empty</h1>
                                :
                                cosmeticForm.map((item, index) => {
                                    return <ListProduct key={index} item={item} setEditStatus={setEditStatus}
                                        editFunction={() => {
                                            setEditStatus({
                                                active : true,
                                                type : "cosmetic",
                                                data : {...item},
                                            });
                                            
                                        }}
                                    />
                                })
                            }
                        </div>
                    </Tab>

                    <Tab eventKey="fashion" 
                        title={
                            <div className="myColor">
                                Fashion
                                <span className="ml-3 circleNotification">{fashionForm.length}</span>
                            </div>
                        }>
                        
                        <div className="d-flex justify-content-center justify-content-lg-start flex-wrap overflow-hidden listProduct">
                            {fashionData.isInitial ? 
                                <div className="w-100 text-center my-5">
                                    <Spinner animation="border" />
                                </div>
                            :
                                fashionForm.length === 0 ? 
                                <h1 className="fw-light w-100 text-center my-5">Your List is Empty</h1>
                                :
                                fashionForm.map((item, index) => {
                                    return <ListProduct key={index} item={item} setEditStatus={setEditStatus}
                                    editFunction={() => {
                                        setEditStatus({
                                            active : true,
                                            type : "fashion",
                                            data : {...item},
                                        });
                                        
                                    }}
                                    />
                                })
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>

            {/* <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Cosmetic" number={cosmeticForm.length} />
                <hr className="myHr" />

                <div className="d-flex justify-content-center justify-content-lg-start flex-wrap overflow-hidden listProduct">
                    {cosmeticForm.length === 0 ? 
                    <h1 className="fw-light text-center my-5">Your List is Empty</h1>
                    :
                    cosmeticForm.map((item, index) => {
                        return <ListProduct key={index} item={item} />
                    })
                    }
                </div>

            </div>

            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Fashion" number={fashionForm.length} />
                <hr className="myHr" />

                
                    {fashionForm.length === 0 ? 
                    <h1 className="fw-light text-center my-5">Your List is Empty</h1>
                    :
                    fashionForm.map((item, index) => {
                        return <ListProduct key={index} item={item} />
                    })
                    }

            </div> */}
        </Col>
            <ToastContainer className="p-3 mt-3 z-index-4 position-fixed" position={"top-center"}>
                <Toast onClose={() => setShowToast(false)} show={showToast} 
                    delay={3000} autohide>
                    <Toast.Header className={
                        ((cosmeticData.deleteSuccess || fashionData.deleteSuccess)  && " bg-success ") +
                        ((cosmeticData.error || fashionData.error) && " bg-danger ")  +" text-white"} >
                    <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {(cosmeticData.deleteSuccess || fashionData.deleteSuccess) && "Delete Success!"}
                        {(cosmeticData.error || fashionData.error) && "Delete Failed!"}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Row>
        </>
    )
}

export default DashListProduct
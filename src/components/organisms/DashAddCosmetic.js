import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Form, Button, Image, Toast, Modal } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import imageNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';
import FormHorizontalCheckBox from '../molecules/FormHorizontalCheckbox';
import FormHorizontalImage from '../molecules/FormHorizontalImage';
import FormHorizontalSelect from '../molecules/FormHorizontalSelect';
import ExampleText from '../atoms/ExampleText';

import { postProductCosmeticAction, editProductCosmeticAction, deleteProductCosmeticAction } from '../../redux/actions/productCosmetic.actions';

function DashAddCosmetic(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);

    const imagePreviewTop = useRef(null);
    const imageInput = useRef(null);

    const [form, setForm] = useState(initialData());

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    const [editSuccess, setEditSuccess] = useState(false);

    const checkStockout = (e) => {
        if(e.target.checked){
            setForm({
                ...form,
                status : 1
            })
        }
        else {
            setForm({
                ...form,
                status : 0
            })
        }
    }

    const valueChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const [progressBar, setProgressBar] = useState(0);

    function initialData(){
        if(props.edit){
            return props.data;
        }else {
            return {
                name: "",
                image: "",
                priceInd: "",
                priceTwn: "",
                description: "",
                category: "",
                status: 0,
            };
        }
    }

    useEffect(() => {
        if(props.edit){
            // setForm(props.data);
            setImagePreview(props.data.image);
            imagePreviewTop.current.src = props.data.image;
        }

    }, [props]);

    return (
        <>
        
        <Row className="m-0">
        {props.edit &&
            <div onClick={(e)=>setShowModal(false)} className={(showModal && "show showMe ")  + " fade modal modalMe bg-overlayOnly"}>
            <div className="modal-dialog modal modal-dialog-centered">
            <div onClick={e=>e.stopPropagation()} className="modal-content">
                <Modal.Header className="border-0 pb-0" >
                <button onClick={()=>setShowModal(false)} type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                </Modal.Header>
                <Modal.Body className="pb-3 ">
                    <h4 className="text-center">Are you sure want to <span className="text-danger">DELETE</span> this product ?</h4>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-4 mb-2 d-flex justify-content-around">
                <Button variant="danger" className=" px-4 btnTypeProduct" onClick={()=>setShowModal(false)}>
                    Cancel
                </Button>
                <Button variant="primary" className=" px-4 btnTypeProduct" onClick={()=>dispatch(deleteProductCosmeticAction(form.id, props.cosmeticForm, props.setCosmeticForm, props.setEditStatus, setShow, props.setShowToast))}>
                    Yes
                </Button>
                </Modal.Footer>
            </div>
            </div>
            </div>    
        }
            
        {props.edit ? 
            <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product / Edit Cosmetic" />
            <Col xs={12} md={12} lg={11} className=" top-0 w-100 pb-3 pt-0 text-center">
                <Button onClick={() => setShowModal(true)} variant="danger btnUploadListProduct px-5 py-2 mt-0 my-2 mx-2 shadow" >
                    Delete This Product
                </Button>
                <Button onClick={()=>props.setEditStatus({
                    active : false,
                    type : "",
                    data : {},
                })} className="btnBrown btnUploadListProduct px-5 py-2 mt-0 my-2 mx-2 shadow-brown">
                    Back to List Product
                </Button>
            </Col>
        </div>
        :
        <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product / Upload Cosmetic" />
            <Col xs={12} md={12} lg={11} className="position-lg-absolute top-0 w-100 pb-4 pb-lg-0 p-lg-4 text-lg-end">
                <Button onClick={()=>history.push('./listproduct')} className="btnBrown btnUploadListProduct px-5 py-2 shadow-brown">
                    Back to List Product
                </Button>
            </Col>
        </div>
        }
        <Form className="" 
            onSubmit={(e)=>{
                e.preventDefault();
                
                if(props.edit){
                    // EDIT
                    dispatch(editProductCosmeticAction(form, e.target.image.files[0], setProgressBar, props.cosmeticForm, props.setCosmeticForm, setEditSuccess, setShow));
                }
                else{
                    // POST
                    dispatch(postProductCosmeticAction(form, e.target.image.files[0], setProgressBar, setForm, setImagePreview, imagePreviewTop, e.target.image, setShow));
                }
            }}
        >

        <Col xs={12} md={11} className="mb-3">
            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Upload Photo Product" />
                <hr className="myHr" />
                <FormHorizontalImage 
                    label="Promo Image"
                    progressBar={progressBar}
                    setProgressBar={setProgressBar}
                    value={form.image}
                    noTextEnd={true}
                    style2={true}
                    setImagePreview={setImagePreview}
                    reff={imagePreviewTop}
                    reff2={imageInput}
                />

            </div>
        </Col>

        <Col xs={12} md={11} className="mb-3">
            <div className="p-md-5 p-4 p-2 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <Row className=" justify-content-around">
                <Col xs={12} lg={4} className="d-none d-lg-block">
                    <div className="imageFormFrame ">
                    <Image className="imageForm" src={imagePreview} onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFoundPotrait}} fluid />
                    </div>
                </Col>
                <Col xs={12} lg={7} xl={8} className="col-xxl-7">

                    {props.edit && 
                    <>
                    <FormHorizontalCheckBox 
                        label="Status"
                        name="status"
                        value={form.status}
                        onChange={checkStockout}
                        options={["Out of Stock ?"]}
                        noTextEnd={true}
                        stockOut={true}
                    />
                    <ExampleText text={"Note: Check if out of stock"}/>
                    </>
                    }
                    <FormHorizontal 
                        label="Product Name" 
                        type="text" 
                        placeholder="Input Text" 
                        name="name"
                        value={form.name}
                        onChange={valueChange} 
                        noTextEnd={true}

                    />
                    <FormHorizontalSelect
                        label="Category"
                        name="category"
                        value={form.category}
                        onChange={valueChange}
                        options={["Face", "Body", "Package"]}
                        noTextEnd={true}
                    />
                    <FormHorizontal 
                        label="Price Indonesia" 
                        type="number" 
                        placeholder="Input Price" 
                        name="priceInd" 
                        value={form.priceInd} 
                        onChange={valueChange} 
                        numberOnly={true}
                        noTextEnd={true}
                    />
                    <ExampleText text={"Example: 10000"}/>

                    <FormHorizontal 
                        label="Price Taiwan" 
                        type="number" 
                        placeholder="Input Price" 
                        name="priceTwn"
                        value={form.priceTwn}
                        onChange={valueChange} 
                        numberOnly={true}
                        noTextEnd={true}

                    />
                    <ExampleText text={"Example: 10000"}/>
                    
                    <FormHorizontalArea 
                        label="Description" 
                        type="text" 
                        placeholder="Input Text" 
                        name="description"
                        value={form.description}
                        onChange={valueChange} 
                        noTextEnd={true}

                    />

                    <div className="d-flex justify-content-end">
                        {props.edit && 
                            <Button variant="danger" onClick={()=>props.setEditStatus({
                                active : false,
                                type : "",
                                data : {},
                            })} className="me-3" disabled={(cosmeticData.isLoading)} >
                                Cancel
                            </Button> 
                        }
                        <Button type="submit" className="ms-3" disabled={(cosmeticData.isLoading)}>
                            {(cosmeticData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                    </div>
                    {/* {cosmeticData.postSuccess &&
                        <div className="mt-3 text-success text-end">
                            Post Success !
                        </div>
                    }
                    {(cosmeticData.saveSuccess && editSuccess) &&
                        <div className="mt-3 text-success text-end">
                            Edit Success !
                        </div>
                    }
                    {cosmeticData.error && 
                        <div className="mt-3 text-danger text-end">
                            Post / Save Failed !
                        </div>
                    } */}
                </Col>
                </Row>
            </div>
        </Col>

        </Form>
            <ToastContainer className="p-3 mt-3 z-index-4 position-fixed" position={"top-center"}>
                <Toast onClose={() => setShow(false)} show={show} 
                    delay={3000} autohide>
                    <Toast.Header className={
                        (cosmeticData.postSuccess && " bg-success ") +
                        (cosmeticData.saveSuccess && editSuccess && " bg-success ") +
                        (cosmeticData.error && " bg-danger ")  +" text-white"} >
                    <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {cosmeticData.postSuccess && "Post Success!"}
                        {(cosmeticData.saveSuccess && editSuccess) && "Edit Success!"}
                        {cosmeticData.error && "Post / Save Failed!"}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Row>
        </>
    )
}

export default DashAddCosmetic

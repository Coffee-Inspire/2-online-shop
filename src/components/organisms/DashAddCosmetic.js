import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Form, Button, Image, Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import imageNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';
import FormHorizontalImage from '../molecules/FormHorizontalImage';
import FormHorizontalSelect from '../molecules/FormHorizontalSelect';
import ExampleText from '../atoms/ExampleText';

import { postProductCosmeticAction, editProductCosmeticAction } from '../../redux/actions/productCosmetic.actions';

function DashAddCosmetic(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);

    const imagePreviewTop = useRef(null);
    const imageInput = useRef(null);

    const [form, setForm] = useState(initialData());

    const [imagePreview, setImagePreview] = useState("");
    const [editSuccess, setEditSuccess] = useState(false);

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
        <Row className="m-0">
        {props.edit ? 
            <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product / Edit Cosmetic" />
            <Col xs={12} md={12} lg={11} className="position-lg-absolute top-0 w-100 pb-4 pb-lg-0 p-lg-4 text-lg-end">
                <Button onClick={()=>props.setEditStatus({
                    active : false,
                    type : "",
                    data : {},
                })} className="btnBrown btnUploadListProduct px-5 py-2 shadow-brown">
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
                    dispatch(editProductCosmeticAction(form, e.target.image.files[0], setProgressBar, props.cosmeticForm, props.setCosmeticForm, setEditSuccess));
                }
                else{
                    // POST
                    dispatch(postProductCosmeticAction(form, e.target.image.files[0], setProgressBar, setForm, setImagePreview, imagePreviewTop, e.target.image));
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

                    <div className="d-flex flex-md-row flex-column justify-content-md-end">
                        {props.edit && 
                            <Button variant="danger" onClick={()=>props.setEditStatus({
                                active : false,
                                type : "",
                                data : {},
                            })} className="me-md-3 mb-3 mb-md-0" disabled={(cosmeticData.isLoading)} >
                                Cancel
                            </Button> 
                        }
                        <Button type="submit" className="ms-md-3" disabled={(cosmeticData.isLoading)}>
                            {(cosmeticData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                    </div>
                    {cosmeticData.postSuccess &&
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
                    }
                    <ToastContainer position="top-end" className="p-3">
                        <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                        </Toast>
                        <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
                </Row>
            </div>
        </Col>

        </Form>
        </Row>
    )
}

export default DashAddCosmetic

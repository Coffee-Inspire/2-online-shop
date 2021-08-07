import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
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

function DashAddCosmetic() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cosmeticData = useSelector(state => state.productCosmetic);

    const [form, setForm] = useState({
        name: "",
        image: "",
        priceInd: "",
        priceTwn: "",
        description: "",
        cateogry: "",
    });

    const valueChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const [progressBar, setProgressBar] = useState(0);

    console.log(form);

    return (
        <Row className="m-0">
        <div className="ps-3 shadow z-index-2 bg-white position-relative">
            <TitleDashboard text="Product / List Product / Upload Cosmetic" />
            <Col xs={12} md={12} lg={11} className="position-lg-absolute top-0 w-100 pb-4 pb-lg-0 p-lg-4 text-lg-end">
                <Button onClick={()=>history.push('./listproduct')} className="btnBrown btnUploadListProduct px-5 py-2 shadow-brown">
                    Back to List Product
                </Button>
            </Col>
        </div>
        <Col xs={12} md={11} className="">
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
                />

            </div>
        </Col>

        <Col xs={12} md={11} className="">
            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <Row className="p-lg-4 justify-content-around">
                <Col xs={12} lg={4} className="d-none d-lg-block">
                    <div className="imageFormFrame ">
                    <Image className="imageForm" src={""} onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFoundPotrait}} fluid />
                    </div>
                </Col>
                <Col xs={12} lg={6} className="">
                <Form className="ml-3" 
                    onSubmit={(e)=>{
                        e.preventDefault();
                    }}
                >
                    <FormHorizontal 
                        label="Product Name" 
                        type="text" 
                        placeholder="Input Text" 
                        name="name"
                        value={form.name}
                        onChange={valueChange} 
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
                        type="text" 
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

                    <FormHorizontalSelect
                        label="Category"
                        name="category"
                        value={form.category}
                        onChange={valueChange}
                        options={["Face", "Body", "Package"]}
                        noTextEnd={true}
                    />

                    <div className="d-flex flex-md-row flex-column justify-content-md-end">
                        {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" disabled={(cosmeticData.isLoading)} >
                            Cancel
                        </Button> */}
                        <Button type="submit" className="ms-md-3" disabled={(cosmeticData.isLoading)}>
                            {(cosmeticData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </Form>
                </Col>
                </Row>
            </div>
        </Col>
        </Row>
    )
}

export default DashAddCosmetic

import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalImage from '../molecules/FormHorizontalImage';
import ExampleText from '../atoms/ExampleText';

function DashHome() {

    const dispatch = useDispatch();
    const homeData = useSelector(state => state.auth);

    return (
        <Row className="m-0">
        <div className="ps-3 shadow z-index-2 bg-white">
        <TitleDashboard text="Settings / Homepage" />
        </div>
        <Col xs={12} md={7} className="">
            <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                <TitleBodyDashboard text="Homepage" />
                <hr className="myHr" />
                <Form className="ml-3" 
                    onSubmit={(e)=>{
                        e.preventDefault(); 
                        console.log(e.target);
                        console.log(e.target.image.files.length);
                        console.log(e.target.image.files[0]);
                    }}
                >
                    <FormHorizontal 
                        label="Promo Title" 
                        type="text" 
                        placeholder="Input Text" 
                        name="title" 

                    />
                    <FormHorizontalImage 
                        label="Promo Image"
                        progressBar={""}
                        setProgressBar={""}

                    />
                     <FormHorizontal 
                        label="URL" 
                        type="text" 
                        placeholder="Input Text" 
                        name="title" 

                    />
                    <ExampleText text={"Example : https//product.com/"}/>
                    
                    <div className="d-flex flex-md-row flex-column justify-content-md-end">
                        {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button> */}
                        <Button type="submit" className="ms-md-3" disabled={(homeData.isLoading)}>
                            {(homeData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                    </div>
                    {homeData.editSuccess &&
                        <div className="mt-3 text-success">
                            Edit Success !
                        </div>
                    }
                    {homeData.error && 
                        <div className="mt-3 text-danger">
                            Error Edit Failed !
                        </div>
                    }
                </Form>
            </div>
        </Col>
    </Row>
    )
}

export default DashHome

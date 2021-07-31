import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';

import ExampleText from '../atoms/ExampleText';
import TitleDashboard from '../atoms/TitleDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';

function DashProfile() {

    const dispatch = useDispatch();
    const profileData = useSelector(state => state.auth);

    return (
        <Row className="m-0">
            <div className="ps-3 shadow z-index-2 bg-white">
                <TitleDashboard text="Settings / Profile" />
            </div>
            <Col xs={12} md={7} className="">
                <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                    <TitleBodyDashboard text="Profile" />
                    <hr className="myHr" />
                    <Form className="ml-3" 
                        onSubmit={(e)=>{
                            e.preventDefault(); 
                            
                        }}
                    >
                        <FormHorizontalArea
                            label="Footer Short Description" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <FormHorizontal 
                            label="WhatsApp number (IND)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <ExampleText text={"Example: Always start with +62"}/>
                        <FormHorizontalArea
                            label="Template Message (IND)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <ExampleText text={"Example: Hi! I'm interested with your product !"}/>
                        <FormHorizontal 
                            label="WhatsApp number (TW)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <ExampleText text={"Example: Always start with +886"}/>
                        <FormHorizontalArea
                            label="Template Message (TW)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <ExampleText text={"Example: Hi! I'm interested with your product !"}/>
                        <FormHorizontal 
                            label="Instagram Username" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <FormHorizontal 
                            label="Instagram URL" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <ExampleText text={"Example: instagram.com/username"}/>
                        <FormHorizontal 
                            label="Email Address" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                        />
                        <div className="d-flex flex-md-row flex-column justify-content-md-end">
                            {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button> */}
                            <Button type="submit" className="ms-md-3" disabled={(profileData.isLoading)}>
                                {(profileData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default DashProfile

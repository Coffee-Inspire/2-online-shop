import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';
import FormHorizontalImage from '../molecules/FormHorizontalImage';

function DashAbout() {
    const dispatch = useDispatch();
    const aboutData = useSelector(state => state.auth);

    const [form, setForm] = useState({
    });

    const valueChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    return (
        <Row className="m-0">
            <div className="ps-3 shadow z-index-2 bg-white">
            <TitleDashboard text="Settings / About Us" />
            </div>
            <Col xs={12} md={7} className="">
                <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                    <TitleBodyDashboard text="About Us" />
                    <hr className="myHr" />
                    <Form className="ml-3" onSubmit={(e)=>{}}>
                        <FormHorizontal 
                            label="Title" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title" 
                            value={form.title}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormHorizontalArea 
                            label="Short Paragraph" 
                            type="text" 
                            placeholder="Input text" 
                            name="description"
                            value={form.description}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormHorizontalImage 
                            label="Cover Image"
                            status=""
                            image=""
                            hash={Date.now()}
                        />
                        
                        <div className="d-flex flex-md-row flex-column justify-content-md-end">
                            {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button> */}
                            <Button type="submit" className="ms-md-3" disabled={(aboutData.isLoading)}>
                                {(aboutData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                        </div>
                        {aboutData.editSuccess &&
                            <div className="mt-3 text-success">
                                Edit Success !
                            </div>
                        }
                        {aboutData.error && 
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

export default DashAbout

import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import ExampleText from '../atoms/ExampleText';
import TitleDashboard from '../atoms/TitleDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';

import { getProfileAction, postProfileAction, editProfileAction } from '../../redux/actions/profile.actions';

function DashProfile() {
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile);

    const [form, setForm] = useState({
        description : "",
        waInd : "",
        templateMsgInd : "",
        waTwn : "",
        templateMsgTwn : "",
        instagram : "",
        instagramUrl : "",
        email : ""
    });

    const valueChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    useEffect(() => {
        dispatch(getProfileAction(setForm));
    }, [dispatch])

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
                            if(Object.keys(profileData.data).length !== 0){
                                // Edit
                                dispatch(editProfileAction(form))
                            }else{
                                // Post
                                dispatch(postProfileAction(form, setForm));
                            }
                        }}
                    >
                        <FormHorizontalArea
                            label="Footer Short Description" 
                            type="text" 
                            placeholder="Input Text" 
                            name="description" 
                            value={form.description}
                            onChange={valueChange} 
                        />
                        <FormHorizontal 
                            label="WhatsApp number (IND)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="waInd" 
                            value={form.waInd}
                            onChange={valueChange} 
                        />
                        <ExampleText text={"Example: Always start with +62"}/>

                        <FormHorizontalArea
                            label="Template Message (IND)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="templateMsgInd" 
                            value={form.templateMsgInd}
                            onChange={valueChange} 
                        />
                        <ExampleText text={"Example: Hi! I'm interested with your product !"}/>

                        <FormHorizontal 
                            label="WhatsApp number (TW)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="waTwn" 
                            value={form.waTwn}
                            onChange={valueChange} 
                        />
                        <ExampleText text={"Example: Always start with +886"}/>

                        <FormHorizontalArea
                            label="Template Message (TW)" 
                            type="text" 
                            placeholder="Input Text" 
                            name="templateMsgTwn" 
                            value={form.templateMsgTwn}
                            onChange={valueChange} 
                        />
                        <ExampleText text={"Example: Hi! I'm interested with your product !"}/>

                        <FormHorizontal 
                            label="Instagram Username" 
                            type="text" 
                            placeholder="Input Text" 
                            name="instagram" 
                            value={form.instagram}
                            onChange={valueChange} 
                        />
                        <FormHorizontal 
                            label="Instagram URL" 
                            type="text" 
                            placeholder="Input Text" 
                            name="instagramUrl" 
                            value={form.instagramUrl}
                            onChange={valueChange} 
                        />
                        <ExampleText text={"Example: instagram.com/username"}/>

                        <FormHorizontal 
                            label="Email Address" 
                            type="text" 
                            placeholder="Input Text" 
                            name="email" 
                            value={form.email}
                            onChange={valueChange} 
                        />
                        <div className="d-flex flex-md-row flex-column justify-content-md-end">
                            {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button> */}
                            <Button type="submit" className="ms-md-3" disabled={(profileData.isLoading)}>
                                {(profileData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                        </div>
                        {profileData.saveSuccess &&
                            <div className="mt-3 text-success text-end">
                                Save Success !
                            </div>
                        }
                        {profileData.error && 
                            <div className="mt-3 text-danger text-end">
                                Save Failed !
                            </div>
                        }
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default DashProfile

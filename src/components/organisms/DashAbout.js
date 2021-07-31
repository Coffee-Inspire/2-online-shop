import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';
import FormHorizontalImage from '../molecules/FormHorizontalImage';

import { getAboutAction, postAboutAction } from '../../redux/actions/about.actions';

function DashAbout() {
    const dispatch = useDispatch();
    const aboutData = useSelector(state => state.about);

    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    const valueChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const [progressBar, setProgressBar] = useState(0);

    useEffect(() => {
        dispatch(getAboutAction(setForm));
    }, [dispatch])

    // console.log(form);
    console.log(aboutData);

    return (
        <Row className="m-0">
            <div className="ps-3 shadow z-index-2 bg-white">
            <TitleDashboard text="Settings / About Us" />
            </div>
            <Col xs={12} md={7} className="">
                <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                    <TitleBodyDashboard text="About Us" />
                    <hr className="myHr" />
                    <Form className="ml-3" 
                        onSubmit={(e)=>{
                            e.preventDefault();
                            // console.log(Date.now() + e.target.image.files[0].name);
                            if(aboutData.data.length !== 0){
                                // edit
                            }else{
                                console.log("post time");
                                dispatch(postAboutAction(form, e.target.image.files[0], setProgressBar));

                            }
                            // console.log(e.target);
                            // console.log(e.target.image.files.length);
                            // console.log(e.target.image.files[0]);
                        }}
                    >
                        <FormHorizontal 
                            label="Title" 
                            type="text" 
                            placeholder="Input Text" 
                            name="title"
                            value={form.title}
                            onChange={valueChange}

                        />
                        <FormHorizontalArea 
                            label="Short Paragraph" 
                            type="text" 
                            placeholder="Input text" 
                            name="description"
                            value={form.description}
                            onChange={valueChange}

                        />
                        <FormHorizontalImage 
                            label="Cover Image"
                            progressBar={""}
                            setProgressBar={""}

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

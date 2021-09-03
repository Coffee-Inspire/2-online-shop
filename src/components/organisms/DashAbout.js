import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalArea from '../molecules/FormHorizontalArea';
import FormHorizontalImage from '../molecules/FormHorizontalImage';

import { getAboutAction, postAboutAction, editAboutAction } from '../../redux/actions/about.actions';

function DashAbout() {
    const dispatch = useDispatch();
    const aboutData = useSelector(state => state.about);

    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
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

    // console.log("form ", form);
    // console.log("about data ", aboutData);
    
    return (
        <Row className="m-0">
            <div className="ps-3 shadow z-index-2 bg-white">
            <TitleDashboard text="Settings / About Us" />
            </div>
            {aboutData.isInitial ?
            <div></div>
            :
            <Col xs={12} md={7} lg={10} xl={8} className="mb-3">
                <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                    <TitleBodyDashboard text="About Us" />
                    <hr className="myHr" />
                    <Form className="ml-3" 
                        onSubmit={(e)=>{
                            e.preventDefault();
                            if(Object.keys(aboutData.data).length !== 0){
                                // Edit
                                dispatch(editAboutAction(form, e.target.image.files[0], setProgressBar))
                            }else{
                                // Post
                                dispatch(postAboutAction(form, e.target.image.files[0], setProgressBar, setForm));
                            }
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
                            progressBar={progressBar}
                            setProgressBar={setProgressBar}
                            value={form.image}
                        />
                        
                        <div className="d-flex flex-md-row flex-column justify-content-md-end">
                            {/* <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button> */}
                            <Button type="submit" className="ms-md-3" disabled={(aboutData.isLoading)}>
                                {(aboutData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                        </div>
                        {aboutData.saveSuccess &&
                            <div className="mt-3 text-success text-end">
                                Save Success !
                            </div>
                        }
                        {aboutData.error && 
                            <div className="mt-3 text-danger text-end">
                                Save Failed !
                            </div>
                        }
                    </Form>
                </div>
            </Col>
            }
        </Row>
    )
}

export default DashAbout

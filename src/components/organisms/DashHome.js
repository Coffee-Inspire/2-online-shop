import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';
import FormHorizontalImage from '../molecules/FormHorizontalImage';
import ExampleText from '../atoms/ExampleText';

import { getHomeAction, postHomeAction, editHomeAction } from '../../redux/actions/home.actions';

function DashHome() {
    const dispatch = useDispatch();
    const homeData = useSelector(state => state.home);

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
        dispatch(getHomeAction(setForm));
    }, [dispatch])

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
                        if(Object.keys(homeData.data).length !== 0){
                            // Edit
                            dispatch(editHomeAction(form, e.target.image.files[0], setProgressBar))
                        }else{
                            // Post
                            dispatch(postHomeAction(form, e.target.image.files[0], setProgressBar, setForm));
                        }
                    }}
                >
                    <FormHorizontal 
                        label="Promo Title" 
                        type="text" 
                        placeholder="Input Text" 
                        name="promoTitle" 

                    />
                    <FormHorizontalImage 
                        label="Promo Image"
                        progressBar={progressBar}
                        setProgressBar={setProgressBar}
                        name="promoImage"
                        value={form.image}

                    />
                     <FormHorizontal 
                        label="URL" 
                        type="text" 
                        placeholder="Input Text" 
                        name="promoUrl" 

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

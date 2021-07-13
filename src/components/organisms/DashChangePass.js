import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';

import { editAdminAction } from '../../redux/actions/auth.actions';

function DashChangePass() {
    const dispatch = useDispatch();

    // let currentUsername = JSON.parse(localStorage[process.env.REACT_APP_PAYLOAD]).username;
    let currentUsername = "";
    if(localStorage[process.env.REACT_APP_PAYLOAD]){
        try {
            currentUsername = JSON.parse(localStorage[process.env.REACT_APP_PAYLOAD]).username;
        } catch(e) {
            window.location = '/admin';
        }
        
    }else{
        window.location = '/admin';
    };

    const [formEdit, setFormEdit] = useState({
        username_old : currentUsername,
        username : currentUsername,
        password_old : "",
        password : "",
        password_confirmation : "",
    });

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    };

    return (
        <Row className="m-0">
            <div className="ps-3 shadow z-index-2 bg-white">
            <TitleDashboard text="Administrator / Change Password" />
            </div>
            <Col xs={12} md={7} className="">
                <div className="p-md-5 p-4 mt-md-5 ms-md-5 mt-3 bg-white rounded shadow">
                    <TitleBodyDashboard text="Change Password" />
                    <hr className="myHr" />
                    <Form className="pb-4" onSubmit={(e)=>{dispatch(editAdminAction(e, currentUsername, formEdit, setFormEdit))}}>
                        <FormHorizontal label="Username" type="text" placeholder="Input Text" name="username" />
                        <FormHorizontal label="Old Password" type="password" placeholder="Input Password" name="password_old" />
                        <FormHorizontal label="New Password" type="password" placeholder="Input Password" name="password" />
                        <FormHorizontal label="Repeat Password" type="password" placeholder="Input Password" name="password_confirmation" />
                        <div className="float-md-end d-flex flex-md-row flex-column">
                            <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button>
                            <Button type="submit" className="ms-md-3" >Save</Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default DashChangePass

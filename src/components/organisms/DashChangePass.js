import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

import TitleDashboard from '../atoms/TitleDashboard';
import TitleBodyDashboard from '../atoms/TitleBodyDashboard';
import FormHorizontal from '../molecules/FormHorizontal';

function DashChangePass() {
    return (
        <Row className="m-0">
            <div className="ps-3 shadow">
            <TitleDashboard text="Adminstrator / Change Password" />
            </div>
            <Col xs={12} md={7} className="ps-md-4 pt-3 mt-5 ms-md-5">
                <TitleBodyDashboard text="Change Password" />
                <hr className="myHr" />
                <Form onSubmit={()=>{console.log("asdadasd")}}>
                    <FormHorizontal label="Username" type="text" placeholder="Input Text" name="username" />
                    <FormHorizontal label="Old Password" type="password" placeholder="Input Password" name="old_password" />
                    <FormHorizontal label="New Password" type="password" placeholder="Input Password" name="new_password" />
                    <FormHorizontal label="Repeat Password" type="password" placeholder="Input Password" name="confirmation_password" />
                    <div className="float-md-end d-flex flex-md-row flex-column">
                        <Button variant="danger" type="submit" className="me-md-3 mb-3 mb-md-0" >Cancel</Button>
                        <Button type="submit" className="ms-md-3" >Save</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default DashChangePass

import React from 'react'
import { Button, Form } from 'react-bootstrap';

//
import FormGroup from '../molecules/FormGroup';

function FormLogin(props) {
    return (
        <Form onSubmit={(e) => {props.setStatus({...props.status, error : false}); props.handleLogin(e)}}>
            <FormGroup 
                id={"formBasicUsername"}
                label={"Username"}
                type={"text"}
                placeholder={"Enter Username"}
                name={"username"}
                
            />
            <FormGroup 
                id={"formBasicPassword"}
                label={"Password"}
                type={"password"}
                placeholder={"Enter Password"}
                name={"password"}
                validator={props.status}
            />
            <Button className="btnBrown shadow-brown" type="submit" disabled={props.isLoading}>
                {props.isLoading ? "Login..." : "Login"}
            </Button>
        </Form>
    )
}

export default FormLogin

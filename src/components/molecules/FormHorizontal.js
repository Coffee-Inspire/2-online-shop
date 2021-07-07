import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function FormHorizontal(props) {
    return (
        <Row className="mb-3">
            <Form.Label column lg={2}>{props.label} </Form.Label>
            <Col>
                <Form.Control 
                    required
                    type={props.type} 
                    placeholder={props.placeholder}
                    name={props.name}
                    autoComplete={props.autocomplete && props.autocomplete}
                    value={props.value && props.value}
                    onChange={props.onChange && props.onChange}
                    disabled={props.disabled}
                />
            </Col>
        </Row>
    )
}

export default FormHorizontal

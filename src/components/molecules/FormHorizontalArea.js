import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function FormHorizontalArea(props) {
    return (
        <Row className="mb-3">
            <Form.Label className="text-md-end text-nowrap" column lg={3}>{props.label} </Form.Label>
            <Col>
                <Form.Control 
                    as="textarea"
                    style={{ height: '110px' }}
                    required
                    type={props.type} 
                    placeholder={props.placeholder}
                    name={props.name}
                    autoComplete={props.autocomplete && props.autocomplete}
                    value={props.value && props.value}
                    onChange={props.onChange && props.onChange}
                    disabled={props.disabled}
                />
                {props.validator && 
                    props.validator.error &&
                        <Form.Text id="text-muted" muted>
                            <span className="text-danger">
                                {props.validator.text}
                            </span>
                        </Form.Text>
                }
            </Col>
        </Row>
    )
}

export default FormHorizontalArea

import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
// import FormSelect from 'react-bootstrap/Form'

function FormHorizontalSelect(props) {

    return (
        <Row className="mb-3">
            <Form.Label className={(!props.noTextEnd && "text-md-end " ) + " text-nowrap"} column lg={3}>{props.label} </Form.Label>
            <Col>
                <Form.Control 
                    required
                    as="select"
                    type="select"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    className="form-select"
                >
                    <option value="">Select Category</option>
                    {props.options.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
    
                </Form.Control>
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

export default FormHorizontalSelect

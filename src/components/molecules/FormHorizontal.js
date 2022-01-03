import React from 'react'
import { Row, Col, Form, InputGroup } from 'react-bootstrap';

function FormHorizontal(props) {

    const keyboard = [
        190,
        69,
    ]

    return (
        <Row className="mb-3 justify-content-between">
            <Form.Label className={(!props.noTextEnd && "text-lg-end " ) + " text-nowrap"} column lg={3}>{props.label} </Form.Label>
            <Col lg={8}>
            <InputGroup className="">
            {props.phone &&
                <InputGroup.Text>+</InputGroup.Text>
            }
                <Form.Control 
                    required
                    type={props.type} 
                    placeholder={props.placeholder}
                    name={props.name}
                    autoComplete={props.autocomplete && props.autocomplete}
                    value={props.value && props.value}
                    onChange={props.onChange && props.onChange}
                    disabled={props.disabled}
                    onKeyDown={(e)=>{
                        if(props.numberOnly){
                            // if(!(e.keyCode >= 37 && e.keyCode <= 40) && 
                            // e.keyCode !== 9 && e.keyCode !== 8 && 
                            // !(e.keyCode >= 48 && e.keyCode <= 57)){
                            //     e.preventDefault();
                            // }
                            if(keyboard.includes(e.keyCode)){
                                e.preventDefault();
                            }
                        }
                    }}
                />
            </InputGroup>
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

export default FormHorizontal

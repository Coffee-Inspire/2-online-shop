import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function FormHorizontal(props) {
    const keyboard = [
        69,         //e
        38,         //arrow up
        40,         //arrow down
        189,        //-
        190,        //.
    ];

    return (
        <Row className="mb-3">
            <Form.Label className={(!props.noTextEnd && "text-md-end " ) + " text-nowrap"} column lg={3}>{props.label} </Form.Label>
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
                    onKeyDown={(e)=>{
                        if(props.numberOnly){
                            if(keyboard.includes(e.keyCode)){
                                e.preventDefault();
                            }
                        }
                    }}
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

export default FormHorizontal

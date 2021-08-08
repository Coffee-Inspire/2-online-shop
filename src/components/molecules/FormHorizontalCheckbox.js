import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function FormHorizontalCheckBox(props) {

    // console.log(props);
    let value = "";
    if(props.value){
        value = JSON.parse(props.value);
    }

    return (
        <Row className="mb-3">
            <Form.Label className={(!props.noTextEnd && "text-md-end " ) + " text-nowrap"} column lg={3}>{props.label} </Form.Label>
            <Col className="pt-2">

                {props.options.map((item, index) => {
                    return <Form.Check
                            
                            inline
                            label={item}
                            name={item}
                            type="checkbox"
                            id={`inline-${index}-1`}
                            checked={value.includes(item)}
                            onChange={props.onChange}
                            key={index}
                        />
                })}
                {/* <Form.Control 
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
                            if(e.keyCode !== 9 && e.keyCode !== 8 && e.keyCode < 48 && e.keyCode > 57){
                                e.preventDefault();
                            }
                        }
                    }}
                /> */}

            </Col>
        </Row>
    )
}

export default FormHorizontalCheckBox

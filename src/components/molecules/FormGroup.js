import React from 'react'
import { Form } from 'react-bootstrap';

function FormGroup(props) {
    return (
        <Form.Group controlId={props.id} className="mb-3">
            <Form.Label className="fw-bold capitalize">{props.label}</Form.Label>
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
            {props.validator && 
                props.validator.error &&
                    <Form.Text id="text-muted" muted>
                        <span className="text-danger">
                            {props.validator.text}
                        </span>
                    </Form.Text>
            }
        </Form.Group>
    )
}

export default FormGroup

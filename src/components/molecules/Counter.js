import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

function Counter(props) {

    function increase(){
        props.setQuantity(props.quantity + 1)
    }

    function decrease(){
        if(props.quantity > 1) props.setQuantity(props.quantity - 1)
    }

    return (
        <Row className="d-flex flex-row justify-content-center justify-content-lg-start">
            <Col xs={10} lg={5}>
                <Form className="d-flex flex-row border border-secondary rounded-3">
                    <div className="text-center d-flex px-3 border-right border-secondary"><span className="fw-bold align-self-center">Quantity</span></div>
                    <Button variant="none" className="rounded-0 fw-bold" onClick={decrease}>-</Button>
                    <Form.Control className="bg-white border-0 rounded-0 p-4 text-center fw-bold" placeholder="1" value={props.quantity} type="number" disabled/>
                    <Button variant="none" className="rounded-0 fw-bold" onClick={increase}>+</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Counter

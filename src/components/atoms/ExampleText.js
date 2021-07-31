import React from 'react'
import { Row, Col } from 'react-bootstrap';

function ExampleText({text}) {
    return (
        <Row className="d-flex justify-content-center justify-content-lg-end mx-lg-0 px-lg-3">
            <Col xs={10} lg={9} className="p-0">
                <p className="fw-light text-primary">
                    {text}
                </p>
            </Col>
        </Row>
    )
}

export default ExampleText

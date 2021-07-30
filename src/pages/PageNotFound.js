import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

function PageNotFound() {
    return (
        <Container className=" text-center my-2 py-5">
            <Row className="d-flex justify-content-center">
                <Col xs={12} lg={12}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-file-earmark-break-fill" viewBox="0 0 16 16">
                        <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
                    </svg>
                    <h1 className="fw-bold display-1 mt-3">404</h1>
                    <h2 className="fw-bold">Page Not Found</h2>
                </Col>
                <Col className="mt-3" xs={10} lg={5}>
                    <p className="fw-light">The page you are looking for might have been removed, had it's name changed, or is temporary unavailable</p>
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound

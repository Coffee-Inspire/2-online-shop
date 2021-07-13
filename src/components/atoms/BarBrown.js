import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

function BarBrown(props) {
    return (
        <div className="p-0">
            <Navbar variant="dark" className="barBrown" expand="lg">
            <Container>
                <Navbar.Toggle onClick={() => {
                    props.reff.current.click();
                    props.setStatus(!props.status);
                    }} aria-controls="basic-navbar-nav" />
            </Container>
            </Navbar>
        </div>
    )
}

export default BarBrown

// importing react-bootstrap tags
import { Navbar, Nav, Col } from 'react-bootstrap';

// importing library from react router dom
import { Link } from "react-router-dom";

// importing image for emblem
import emblem from '../../assets/logos/phanen-shop-emblem.png'

function Navigation() {
    return (

        <Navbar expand="lg" className="myNavbar pt-4 pb-3">
            <Col lg={3} className="text-center">
                <Link to="/" className="myNavbarEmblemFrame ml-lg-5 mb-4 mb-lg-0">
                    <img alt="" src={emblem} className="myNavbarEmblem" />
                </Link>
            </Col>
            <Col lg={6}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3 mb-3 mb-lg-0 mt-4" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-center fw-bold">
                        <Nav className="myNavbarItems">
                            <Link to="/cosmetic" className="nav-link me-5">COSMETIC</Link>
                            <Link to="/fashion" className="nav-link me-5">FASHION</Link>
                            <Link to="/about" className="nav-link me-5">ABOUT</Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col lg={3}>
                <div className="text-lg-center mt-3 mt-lg-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                    </svg>
                </div>
            </Col>
        </Navbar>

    )
}

export default Navigation

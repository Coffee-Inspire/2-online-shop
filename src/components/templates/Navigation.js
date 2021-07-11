import {React, useState , useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Navbar, Nav, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {getCounterAction} from '../../redux/actions/cart.actions';

import emblem from '../../assets/logos/phanen-shop-emblem.png'
import CartModal from '../organisms/CartModal';

function Navigation(props) {

    const dispatch = useDispatch()
    const number = useSelector(state => state.cart)
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        dispatch(getCounterAction())
    }, [dispatch])


    return (
        <>
            <Navbar expand="lg" className="myNavbar pt-4 pb-3">
                <Col  lg={3} className="text-center">
                    <Link to="/" className="myNavbarEmblemFrame ml-lg-5 mb-4 mb-lg-0">
                        <img alt="" src={emblem} className="myNavbarEmblem" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-5 me-3 mb-3 mb-lg-0 mt-4" />
                </Col>
                <Col  lg={6}>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 justify-content-center fw-bold mt-3 ml-3 ml-lg-0 mt-lg-0">
                            <Nav className="myNavbarItems">
                                <Col className="p-0 d-lg-flex "> 
                                    <Link to="/cosmetic" className="nav-link me-5">COSMETIC</Link>
                                    <Link to="/fashion" className="nav-link me-5">FASHION</Link>
                                    <Link to="/about" className="nav-link me-5">ABOUT</Link>
                                </Col>
                                <Col className="p-0 d-flex flex-col justify-content-lg-center" lg={12}>
                                    <Button variant="none" className="text-lg-center mt-3 mt-lg-0" onClick={() => setModalShow(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket3-fill" viewBox="0 0 16 16">
                                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                                        </svg>
                                        <span>{number.data}</span>
                                    </Button>
                                </Col>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
            <CartModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Navigation

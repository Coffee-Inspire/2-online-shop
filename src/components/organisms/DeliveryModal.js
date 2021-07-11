import {React , useState , useEffect } from 'react'
import {Modal, Form, Button, Row, Col, Dropdown } from 'react-bootstrap';

import axios from 'axios'

function DeliveryModal(props) {

    const [orderIndonesia, setOrderIndonesia] = useState(true)
    const [selectCountry, setSelectCountry] = useState("")
    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then((result)=>setCountry(result.data))
    })

    return (
        <Modal
            {...props}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <span className="ml-3">My Cart</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Form>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Receipt Full Name</Form.Label>
                            <Form.Control/>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Receipt Phone Number</Form.Label>
                            <Form.Control/>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Country</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="myClickStyleNone border border-2 d-flex flex-row align-items-center  w-100 " id="dropdown-basic">
                                    <Form.Control className="myClickStyleNone m-0 border-0"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu  scrollable={true} wrap  className="myClickStyleNone myCountrySelectionForm">
                                    {country.map((item,index)=>(
                                        <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Receipt Address Details</Form.Label>
                            <Form.Control as="textarea"/>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <fieldset>
                                <Form.Label className="fst-italic">Choose Your Order</Form.Label>
                                <Form.Check
                                    className="fst-italic"
                                    type="radio"
                                    label="Order for Indonesia"
                                    name="order"
                                    id="formHorizontalRadios1"
                                    onClick={()=>setOrderIndonesia(true)}
                                    defaultChecked 
                                />
                                <Form.Check
                                    className="fst-italic"
                                    type="radio"
                                    label="Order for Taiwan"
                                    name="order"
                                    id="formHorizontalRadios2"
                                    onClick={()=>setOrderIndonesia(false)}
                                />
                            </fieldset>
                        </Col>
                    </Form>

                </Row>
            </Modal.Body>
            <Modal.Footer className="border-0 d-flex flex-column">
                <Row className="w-100">
                    <Col> 
                        <Button variant="secondary" className="w-100" onClick={props.onHide}>Back</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" className="w-100" onClick={()=>{}}>Next</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default DeliveryModal

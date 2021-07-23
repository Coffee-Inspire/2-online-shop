import {React , useState , useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Modal, Form, Button, Row, Col, Dropdown, FormGroup } from 'react-bootstrap';

import {getProfileAction , getCountryListAction} from '../../redux/actions/profile.actions';
import {clearCartAction} from '../../redux/actions/cart.actions';

function DeliveryModal(props) {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false);
    const [profile, setProfile] = useState({})
    const [country, setCountry] = useState([])
    const [countryInput, setCountryInput] = useState("")
    const [deliveryForm, setDeliveryForm] = useState({
        name : "",
        number : "",
        country : "",
        address : ""
    })
    const [orderStatus, setOrderStatus] = useState("Indonesia")

    function switchToCart(){
        props.triggercartmodal()
        props.onHide()
    }


    function capitalize(str){
        let arr = str.split(" ")
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        let capitalized = arr.join(" ")
        return capitalized
    }

    function sendWA(e){

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault()
            let customerData =  `%0aName : ${capitalize(deliveryForm.name)}
            %0aPhone Number : ${deliveryForm.number}
            %0aCountry : ${deliveryForm.country}
            %0aAddress : ${deliveryForm.address}`

            let orderList = props.orderdata.map((item,index)=> item.itemSize 
                ?
                    `
                    %0aITEM ${index+1}
                    %0aItem Name : ${item.itemName}
                    %0aSize : ${item.itemSize.toUpperCase()}
                    %0aQuantity : ${item.itemQuantity}
                    %0aPrice(pcs) : Rp ${item.itemPrice}%0a
                    `
                :

                    `
                    %0aITEM ${index+1}
                    %0aItem Name : ${item.itemName}
                    %0aQuantity : ${item.itemQuantity}
                    %0aPrice(pcs) : Rp ${item.itemPrice}%0a
                    `
                    )
                    
            let template = ""
            let message = `
                %0a%0a*Customer Data (Order for ${orderStatus})*
                ${customerData}
                %0a%0a*Order List*
                %0a${orderList.join("")}
                %0a*Total Price : Rp ${props.totalprice}*%0a
                `

            if (orderStatus === "Indonesia"){
                template = `${profile.templateMsgInd}${message}`             
            } else if (orderStatus === "Taiwan"){
                template = `${profile.templateMsgTwn}${message}`  
            }

            // if (orderStatus === "Indonesia"){
            //     window.open('https://api.whatsapp.com/send?phone=+' + profile.waInd +'&text=' +template )
            // } else if (orderStatus === "Taiwan"){
            //     window.open('https://api.whatsapp.com/send?phone=+' + profile.waTwn +'&text=' +template )
            // }

            window.open(`https://api.whatsapp.com/send?phone=6282283569169&text=${template}` )
            dispatch(clearCartAction())
        }
    }
 
    let countryFiltered = country.filter((item) => item.name.toUpperCase().includes(countryInput.toUpperCase()))

    useEffect(() => {
        dispatch(getCountryListAction(setCountry))
        dispatch(getProfileAction(setProfile))
    },[dispatch])

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
                    <Form noValidate validated={validated} onSubmit={(e)=>sendWA(e)}>
                        <Col className="mt-2" xs={12} lg={8}>
                        <FormGroup controlId="validationCustomUsername">
                            <Form.Label className="fst-italic">Receipt Full Name</Form.Label>
                            <Form.Control 
                                required 
                                type="text" 
                                value={deliveryForm.name} 
                                onChange={(e)=>{setDeliveryForm({...deliveryForm , name : e.target.value})}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please insert your name.
                            </Form.Control.Feedback>
                        </FormGroup>

                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Receipt Phone Number</Form.Label>
                            <Form.Control 
                                required 
                                type="text"
                                value={deliveryForm.number} 
                                onChange={(e)=>{setDeliveryForm({...deliveryForm , number : e.target.value})}}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill your valid phone number.
                            </Form.Control.Feedback>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Country</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="myClickStyleNone border border-2 d-flex flex-row align-items-center  w-100 " id="dropdown-basic">
                                    <Form.Control 
                                        required 
                                        type="text"
                                        className="myClickStyleNone m-0 border-0" 
                                        value={countryInput} 
                                        onChange={(e)=>{
                                            setDeliveryForm({...deliveryForm , country : e.target.value});
                                            setCountryInput(e.target.value)
                                        }} 
                                    />
                                   
                                </Dropdown.Toggle>
                                <Dropdown.Menu  scrollable="true" className="myClickStyleNone myCountrySelectionForm">
                                    {countryFiltered.map((item,index)=>(
                                        <Dropdown.Item 
                                            key={index} 
                                            onClick={(e)=>{
                                                setDeliveryForm({...deliveryForm , country : item.name});
                                                setCountryInput(item.name)
                                            }}
                                        >
                                            {item.name}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <Form.Label className="fst-italic">Receipt Address Details</Form.Label>
                            <Form.Control 
                                required
                                as="textarea" 
                                value={deliveryForm.address} 
                                onChange={(e)=>{setDeliveryForm({...deliveryForm , address : e.target.value})}}
                            />
                            <Form.Control.Feedback type="invalid">
                               Please fill your complete address.
                            </Form.Control.Feedback>
                        </Col>
                        <Col className="mt-2" xs={12} lg={8}>
                            <fieldset>
                                <Form.Label className="fst-italic">Choose Your Order</Form.Label>
                                <Form.Check
                                    className="fst-italic"
                                    type="radio"
                                    label="Order for Indonesia"
                                    value="indonesia"
                                    name="order"
                                    id="formHorizontalRadios1"
                                    onClick={(e)=>{setOrderStatus("Indonesia")}}
                                    defaultChecked 
                                />
                                <Form.Check
                                    className="fst-italic"
                                    type="radio"
                                    label="Order for Taiwan"
                                    value="taiwan"
                                    name="order"
                                    id="formHorizontalRadios2"
                                    onClick={(e)=>{setOrderStatus("Taiwan")}}
                                />
                            </fieldset>
                        </Col>
                        <Col className="p-0 d-flex flex-row justify-content-center mt-4">
                            <Col> 
                                <Button variant="secondary" className="w-100" onClick={switchToCart}>Back</Button>
                            </Col>
                            <Col>
                                <Button type="submit" variant="dark" className="w-100">Next</Button>
                            </Col>
                        </Col>
                    </Form>

                </Row>
            </Modal.Body>

        </Modal>
    )
}

export default DeliveryModal

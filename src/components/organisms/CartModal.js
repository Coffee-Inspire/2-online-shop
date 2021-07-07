import {React , useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap';

import CartItemList from '../molecules/CartItemList';

function CartModal(props) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("items")))
    let initialTotalPrice = 0
    if (data) initialTotalPrice = data.reduce(function(a,b){return a + b.price},0 )
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice)

    function editQuantity (id , newQuantity){
        let indexTarget = data.findIndex((item)=>item.itemID === id)
        data[indexTarget].itemQuantity = newQuantity
        data[indexTarget].price = data[indexTarget].itemPrice * newQuantity
        localStorage.setItem("items" , JSON.stringify(data))
        setTotalPrice(data.reduce( function (a,b) { return a + b.price },0 ))         
    }

    function deleteItem (id){
        let dataTemp = data.filter((item)=> item.itemID !== id)
        localStorage.setItem("items" , JSON.stringify(dataTemp))
        setTotalPrice(dataTemp.reduce( function (a,b) { return a + b.price },0 )) 
        setData(dataTemp)
        props.setNumber(props.number-1)

    }

    return (
        <Modal
            {...props}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable={true}
            centered
            >
            <Modal.Header closeButton className="border-0">
                <Modal.Title id="contained-modal-title-vcenter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <span className="ml-3">My Cart</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* {data.length>0 ? data.map((item,index)=>(
                        <CartItemList 
                            key={index}
                            id={item.itemID}
                            image={item.itemImage}
                            name={item.itemName}
                            itemPrice={item.itemPrice}
                            quantity={item.itemQuantity}
                            price={item.price}
                            editQuantity={editQuantity}
                            deleteItem={deleteItem}
                        />
                    
                ))
                    : <h1 className="fw-light">No Item</h1>
                } */}
            </Modal.Body>
            <Modal.Footer className="border-0 d-flex flex-column">
                {/* {data.length>0 && 
                    <Row className="w-100">
                        <Col>
                            <h5 className="fw-bold">Total Price</h5>
                        </Col>
                        <Col className="text-end">
                            <h5 className="text-secondary">Rp. {totalPrice}</h5>
                        </Col>
                    </Row>
                } */}
                <Row className="w-100">
                    <Col> 
                        <Button variant="danger" className="w-100" onClick={props.onHide}>Close</Button>
                    </Col>
                    {/* {data.length>0 && 
                        <Col>
                            <Button variant="dark" className="w-100" onClick={props.onHide}>Next</Button>
                        </Col>
                    } */}
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal

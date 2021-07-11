import {React , useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import {getCartAction} from '../../redux/actions/cart.actions';

import CartItemList from '../molecules/CartItemList';
import DeliveryModal from './DeliveryModal';

function CartModal(props) {

    const dispatch = useDispatch()
    const data = useSelector(state => state.cart)
    const [deliveryModalShow, setDeliveryModalShow] = useState(false)

    useEffect(() => {
        dispatch(getCartAction())
    }, [dispatch])

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
                {data.dataLocal.length>0 ? data.dataLocal.map((item,index)=>(
                        <CartItemList 
                            key={index}
                            itemIndex={index}
                            id={item.itemID}
                            image={item.itemImage}
                            name={item.itemName}
                            size={item.itemSize}
                            itemPrice={item.itemPrice}
                            quantity={item.itemQuantity}
                            price={item.price}
                        />
                    
                ))
                    : <h1 className="fw-light my-5 text-center">Your Cart is Empty</h1>
                }
            </Modal.Body>
            <Modal.Footer className="border-0 d-flex flex-column">
                {data.dataLocal.length>0 && 
                    <Row className="w-100">
                        <Col>
                            <h5 className="fw-bold">Total Price</h5>
                        </Col>
                        <Col className="text-end">
                            <h5 className="text-secondary">Rp. {data.totalPrice}</h5>
                        </Col>
                    </Row>
                }
                <Row className="w-100">
                    <Col> 
                        <Button variant="danger" className="w-100" onClick={props.onHide}>Close</Button>
                    </Col>
                    {data.dataLocal.length>0 && 
                        <Col>
                            <Button variant="dark" className="w-100" onClick={()=>setDeliveryModalShow(true)}>Next</Button>
                        </Col>
                    }
                </Row>
            </Modal.Footer>
            <DeliveryModal
                show={deliveryModalShow}
                onHide={() => setDeliveryModalShow(false)}
            />
        </Modal>
    )
}

export default CartModal

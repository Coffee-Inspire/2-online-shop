import React from 'react'
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';

import {deleteItemAction} from '../../redux/actions/cart.actions';

function CartItemList(props) {
    const dispatch = useDispatch()
    
    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join('.').split('').reverse().join('');
        return converted
    }

    return (
        <Row className="border-bottom border-secondary py-3 mx-1 mx-lg-3">
            <Col className="p-0" xs={6} lg={2}>
                <div className="myCartItemImageFrame">
                    <img
                        alt="item"
                        src={props.image ? props.image : props.imgNotFoundPotrait}
                        className="myCartItemImage"
                    />
                </div>
            </Col>
            <Col className="" xs={6} lg={6}>
                <h3 className="text-capitalize fw-bold">{props.name}</h3>
                {props.size && <p>Size : <span className="text-uppercase fw-bold">{props.size}</span></p>}  
                <p className="text-secondary">Rp. {convertIDR(props.itemPrice)}</p>
            </Col>
            <Col className="p-0" xs={12} lg={4}>
                <Col className="text-end" xs={12} lg={12}>
                    <Button 
                        variant="none" 
                        className="myClickStyleNone" 
                        onClick={()=>{
                            dispatch(deleteItemAction(props.itemIndex))
                        }}
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>  
                    </Button>
                </Col>
                <Col className="p-0" xs={12} lg={12}>
                    <Form className="d-flex flex-row border border-secondary rounded-3">
                        <div className="text-center d-flex px-4 px-lg-2 border-right border-secondary"><span className="fw-bold align-self-center">Quantity</span></div>
                        <Button variant="none" className="rounded-0 fw-bold myClickStyleNone px-3 px-lg-2" onClick={()=>props.operation("-" , props.quantity , props.itemIndex)}>-</Button>
                        <Form.Control className="bg-white border-0 rounded-0 p-4 text-center fw-bold" placeholder="1" value={props.quantity} type="number" disabled/>
                        <Button variant="none" className="rounded-0 fw-bold myClickStyleNone px-3 px-lg-2" onClick={()=>props.operation("+" , props.quantity , props.itemIndex) }>+</Button>
                    </Form>
                </Col>
            </Col>
            
        </Row>
    )
}

export default CartItemList

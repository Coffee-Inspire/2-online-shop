import React from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import imageNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

function ListProduct(props) {

    console.log(props);

    return (
        <div className="listProductFrame mx-2 cursorPointer">
            <Image 
                className="listProductImage img-fluid" 
                src={""} 
                onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFoundPotrait}} 
                fluid 
            />
        </div>
    )
}

export default ListProduct

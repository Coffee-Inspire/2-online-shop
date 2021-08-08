import React from 'react'
import { Image } from 'react-bootstrap';
import imageNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

function ListProduct(props) {

    // console.log(props);

    return (
        <div
            onClick={props.editFunction} 
            className="listProductFrame mr-3 mb-3 cursorPointer">
            <Image 
                className="listProductImage img-fluid" 
                src={props.item.image} 
                onError={(e)=>{e.target.onerror = null; e.target.src=imageNotFoundPotrait}} 
                fluid 
            />
        </div>
    )
}

export default ListProduct

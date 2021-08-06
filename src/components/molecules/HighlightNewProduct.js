import React from 'react'

import imageNotFound from '../../assets/images/imgNotFound.jpg'

function HighlightNewProduct(props) {
    return (
        <div className="myHighlightProductFrame">
            <img
                alt="New_Product"
                src={props.image}
                className="myHighlightProductImage"
                onClick={()=>{
                    if(props.cosmetic){
                        window.location=`/cosmetic/${props.id}`
                    } else if (props.fashion){
                        window.location=`/fashion/${props.id}`
                    }
                }}
                onError={(e)=>{e.target.src=imageNotFound}}
            />
        </div>
    )
}

export default HighlightNewProduct

import React from 'react'

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
            />
        </div>
    )
}

export default HighlightNewProduct

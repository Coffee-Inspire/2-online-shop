import React from 'react'

function HighlightNewProduct(props) {
    return (
        <div className="myHighlightProductFrame">
            <img
                alt="New_Product"
                src={props.image}
                className="myHighlightProductImage"
            />
        </div>
    )
}

export default HighlightNewProduct

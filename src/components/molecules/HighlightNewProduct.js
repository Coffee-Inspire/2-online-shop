import {React , useRef} from 'react'

import imageNotFound from '../../assets/images/imgNotFound.jpg'

function HighlightNewProduct(props) {

    const myref = useRef(null)

    return (
        <div className="myHighlightProductFrame">
            <img
                ref={myref}
                alt="New_Product"
                src={props.image}
                className={props.id ? "myHighlightProductImage" : "myHighlightProductImageNoData"}
                id="myDIV"
                onClick={props.id ? (()=>{
                    if(props.cosmetic){
                    window.location=`/cosmetic/${props.id}`
                    } else if (props.fashion){
                    window.location=`/fashion/${props.id}`
                    }}) 
                    : null
                }
                onError={(e)=>{e.target.src=imageNotFound}}
            />
        </div>
    )
}

export default HighlightNewProduct

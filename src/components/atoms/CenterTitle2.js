import React from 'react'

function CenterTitle2(props) {
    return (
        <div className="text-center my-5">
            <h1 className="text-uppercase fw-bold myCenterTitle2">{props.text}</h1>
            <h2 className="text-uppercase">{props.text2}</h2>
        </div>
    )
}

export default CenterTitle2

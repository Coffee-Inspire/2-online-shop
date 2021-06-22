import React from 'react'

function CenterTitle(props) {
    return (
        <div className="text-center my-3">
            <h1 className="text-uppercase font-weight-bold">{props.text}</h1>
        </div>
    )
}

export default CenterTitle

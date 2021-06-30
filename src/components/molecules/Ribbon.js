import React from 'react'
import {Row} from 'react-bootstrap'

function Ribbon(props) {
    return (
        <Row className="myRibbonMargin bg-dark text-center py-5">
            <h1 className="text-white text-uppercase">{props.text}</h1>
        </Row>
    )
}

export default Ribbon

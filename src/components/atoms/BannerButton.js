import React from 'react'
import {Button} from 'react-bootstrap'

function BannerButton(props) {
    return (
        <Button variant="dark" className="position-absolute start-50 myBannerButton">
            <h3 className="text-uppercase font-weight-bold">{props.text}</h3>
        </Button>
    )
}

export default BannerButton

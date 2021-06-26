import React from 'react'
import {Row} from 'react-bootstrap'

import BannerButton from '../atoms/BannerButton'

function Banner(props) {
    return (
        <Row className={props.plain ? "myBannerMargin myImageBannerFrame" : "position-relative myImageBannerFrame"}>
            <img 
                alt=""
                src={props.image}
                className="p-0 myImageBanner"
            />
            {!props.plain && <BannerButton text={"shop now"}/>}
        </Row>
    )
}

export default Banner

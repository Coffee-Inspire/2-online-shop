import React from 'react'
import {Row} from 'react-bootstrap'

import BannerButton from '../atoms/BannerButton'

function Banner(props) {
    return (
        <Row className={props.plain ? "myBannerMargin myImageBannerFrame" : "position-relative myImageBannerFrame"}>
            <img 
                alt=""
                src={props.image ? props.image : props.imageNotFound}
                className={props.plain ? "p-0 myImageBannerPlain" : "p-0 myImageBanner" }
                onClick={props.plain ? null : (()=>window.location=`${props.url}`)}
                onError={(e)=>{e.target.src=props.imageNotFound}}
            />
            {!props.plain && <BannerButton text={"shop now"} url={props.url}/>}
        </Row>
    )
}

export default Banner

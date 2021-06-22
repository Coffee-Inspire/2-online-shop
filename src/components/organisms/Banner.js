import React from 'react'
import {Row} from 'react-bootstrap'

import imageBanner from '../../assets/images/image-example-1.jpg'
import BannerButton from '../atoms/BannerButton'



function Banner() {
    return (
        <Row className="position-relative myImageBannerFrame">
            <img 
                alt=""
                src={imageBanner}
                className="p-0 myImageBanner"
            />
            <BannerButton text={"shop now"}/>
        </Row>
    )
}

export default Banner

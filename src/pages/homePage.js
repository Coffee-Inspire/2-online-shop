import React from 'react'
import {Container} from 'react-bootstrap'

import imageBanner from '../assets/images/image-example-1.jpg'

import Banner from '../components/organisms/Banner'
import CenterTitle from '../components/atoms/CenterTitle'
import CenterTitle2 from '../components/atoms/CenterTitle2'
import NewProductSection from '../components/templates/NewProductSection'

function homePage() {

    let DUMMMY_HOMEPAGE = [
        {

        }
    ]

    return (
        <Container fluid>
            <CenterTitle text={"promo this week"} />
            <Banner image={imageBanner}/>
            <NewProductSection image={imageBanner}/>
        </Container>
    )
}

export default homePage

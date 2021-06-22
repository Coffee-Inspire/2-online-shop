import React from 'react'

import Banner from '../components/organisms/Banner'

import {Container} from 'react-bootstrap'
import CenterTitle from '../components/atoms/CenterTitle'
import CenterTitle2 from '../components/atoms/CenterTitle2'

function homePage() {
    return (
        <Container fluid>
            <CenterTitle text={"promo this week"} />
            <Banner/>
            <CenterTitle2 text={"our new product"} text2={"new this week"}/>
        </Container>
    )
}

export default homePage

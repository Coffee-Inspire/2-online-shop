import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap'
import imageBanner from '../assets/images/image-example-1.jpg'

import {getHomeAction} from '../redux/actions/home.actions';

import Banner from '../components/organisms/Banner'
import CenterTitle from '../components/atoms/CenterTitle'
import NewProductSection from '../components/templates/NewProductSection'

function HomePage() {

    const dispatch = useDispatch()
    // Storing Promotion Data
    const [dataPromotion, setDataPromotion] = useState({});

    useEffect(() => {
        dispatch(getHomeAction(setDataPromotion))
    }, [dispatch])

    return (
        <Container fluid>
            <CenterTitle text={dataPromotion.promoTitle} />
            <Banner image={dataPromotion.promoImage} url={dataPromotion.promoUrl} />
            <NewProductSection image={imageBanner} />
        </Container>
    )
}

export default HomePage

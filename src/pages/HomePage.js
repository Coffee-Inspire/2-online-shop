import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap'
import imageNotFound from '../assets/images/imgNotFound.jpg'

import {getHomeAction} from '../redux/actions/home.actions';
import {getProductCosmeticAction} from '../redux/actions/productCosmetic.actions';
import {getProductFashionAction} from '../redux/actions/productFashion.actions';

import Banner from '../components/organisms/Banner'
import CenterTitle from '../components/atoms/CenterTitle'
import NewProductSection from '../components/templates/NewProductSection'

function HomePage() {

    const dispatch = useDispatch()
    // Storing Promotion Data
    const [dataPromotion, setDataPromotion] = useState({});
    // Storing Product Data
    const [dataCosmetic, setDataCosmetic] = useState([]);
    const [dataFashion, setDataFashion] = useState([]);

    useEffect(() => {
        dispatch(getHomeAction(setDataPromotion))
        dispatch(getProductCosmeticAction(setDataCosmetic))
        dispatch(getProductFashionAction(setDataFashion))
    }, [dispatch])

    return (
        <Container fluid>
            <CenterTitle text={dataPromotion.promoTitle} />
            <Banner image={dataPromotion.promoImage} url={dataPromotion.promoUrl} />
            <NewProductSection
                imageNotFound={imageNotFound} 
                cosmetic={dataCosmetic ? dataCosmetic : <h1>SKELETON</h1>}
                fashion={dataFashion ? dataFashion : <h1>SKELETON</h1>}
            />
        </Container>
    )
}

export default HomePage

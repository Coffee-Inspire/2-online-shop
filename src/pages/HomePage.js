import {React, useEffect, useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Container } from 'react-bootstrap'
import imageNotFound from '../assets/images/imgNotFound.jpg'

import {getHomeAction} from '../redux/actions/home.actions';
import {getProductCosmeticAction} from '../redux/actions/productCosmetic.actions';
import {getProductFashionAction} from '../redux/actions/productFashion.actions';

import Banner from '../components/organisms/Banner'
import CenterTitle from '../components/atoms/CenterTitle'
import NewProductSection from '../components/templates/NewProductSection'
import SkeletonHomepage from '../skeletons/SkeletonHomepage';

function HomePage() {

    const dispatch = useDispatch()
    const status = useSelector(state => state.home)
    // Storing Promotion Data
    const [dataPromotion, setDataPromotion] = useState(null);
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
            {status.isInitial && <SkeletonHomepage/>}
            {!status.isInitial &&  <>
                    <CenterTitle text={dataPromotion && dataPromotion.promoTitle} />
                    <Banner
                        imageNotFound={imageNotFound} 
                        image={dataPromotion && dataPromotion.promoImage} 
                        url={dataPromotion && dataPromotion.promoUrl} 
                    />
                    <NewProductSection
                        imageNotFound={imageNotFound} 
                        cosmetic={dataCosmetic && dataCosmetic}
                        fashion={dataFashion && dataFashion}
                    />
                </>
            }
        </Container>
    )
}

export default HomePage

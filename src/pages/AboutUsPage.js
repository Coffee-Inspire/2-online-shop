import {React, useEffect, useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux';
import {getAboutAction} from '../redux/actions/about.actions';
import imageNotFound from '../assets/images/imgNotFound.jpg'

import CenterTitle from '../components/atoms/CenterTitle'
import Banner from '../components/organisms/Banner'
import SkeletonAboutPage from '../skeletons/SkeletonAboutPage';

function AboutUsPage() {

    const dispatch = useDispatch()
    const status = useSelector(state => state.about)
    const [data, setData] = useState(null);

    useEffect(() => {
        dispatch(getAboutAction(setData))
    }, [dispatch])

    return (
        <Container fluid>
            {data ? <>
                <Banner imageNotFound={imageNotFound} image={data.image} plain={true}/>
                <CenterTitle text={data.title}/>
                <Row className="myAboutUsRowMargin text-center d-flex justify-content-center">
                    <Col xs={11} lg={10} >
                        <p>{data.description}</p>
                    </Col>
                </Row>
                </>
                : <SkeletonAboutPage/>
            }
        </Container>
        
    )
}

export default AboutUsPage

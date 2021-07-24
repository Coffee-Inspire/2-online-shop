import {React, useEffect, useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {getAboutAction} from '../redux/actions/about.actions';

import CenterTitle from '../components/atoms/CenterTitle'
import Banner from '../components/organisms/Banner'
import SkeletonAboutPage from '../skeletons/SkeletonAboutPage';

function AboutUsPage() {

    const dispatch = useDispatch()
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAboutAction(setData))
        }, 3000);
    }, [dispatch])

    return (
        <Container fluid>
            {data ? <>
                <Banner image={data.image} plain={true}/>
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

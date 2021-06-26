import {React, useEffect, useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {getAboutAction} from '../redux/actions/about.actions';

import CenterTitle from '../components/atoms/CenterTitle'
import Banner from '../components/organisms/Banner'

function AboutUsPage() {

    const dispatch = useDispatch()
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(getAboutAction(setData))
    }, [dispatch])

    return (
        <Container fluid>
            <Banner image={data.image} plain={true}/>
            <CenterTitle text={data.title}/>
            <Row className="myAboutUsRowMargin text-center d-flex justify-content-center">
                <Col xs={11} lg={10} >
                    <p>{data.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsPage

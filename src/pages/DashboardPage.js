import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown'

function DashboardPage() {
    return (
        <Container fluid>
            <Row>

            </Row>
            <Row>
                <BarBrown />
                <Switch>

                </Switch>
            </Row>
        </Container>
    )
}

export default DashboardPage

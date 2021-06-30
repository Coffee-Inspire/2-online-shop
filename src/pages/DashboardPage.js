import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown'

function DashboardPage() {
    return (
        <Container fluid className="d-flex flex-row ">
            <Row className="w-25">
                ini nav
            </Row>
            
            <div className="w-100">
                <BarBrown />
                <Switch>

                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage

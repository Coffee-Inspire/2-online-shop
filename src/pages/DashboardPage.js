import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown';
import NavDashboard from '../components/templates/NavDashboard';

function DashboardPage() {
    return (
        <Container fluid className="p-0 d-flex flex-row">
            <div className="navbarDashboard">
                <NavDashboard />
            </div>
            <div className="w-100 bodyDashboard">
                <BarBrown />
                <Row className="m-0 p-3">
                    asdads
                </Row>
                <Switch>

                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage

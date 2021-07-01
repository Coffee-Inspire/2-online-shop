import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown';
import NavDashboard from '../components/templates/NavDashboard';

function DashboardPage() {
    return (
        <Container fluid className="p-0 d-flex flex-row">
            <NavDashboard />
            <div className="w-100">
                <BarBrown />
                asdasd
                <Switch>

                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage

import React from 'react'
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown';
import NavDashboard from '../components/templates/NavDashboard';

import DashChangePass from '../components/organisms/DashChangePass';

function DashboardPage() {
    return (
        <Container fluid className="p-0 d-flex flex-row">
            <div className="navbarDashboard navbarDashboardShadow">
                <NavDashboard />
            </div>
            <div className="w-100 bodyDashboard">
                <BarBrown />
                <Switch>
                    <Route path="/dashboard/changepass/">
                        <DashChangePass />
                    </Route>
                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage

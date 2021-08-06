import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown';
import NavDashboard from '../components/templates/NavDashboard';

import DashListProduct from '../components/organisms/DashListProduct';
import DashHome from '../components/organisms/DashHome';
import DashAbout from '../components/organisms/DashAbout';
import DashChangePass from '../components/organisms/DashChangePass';
import DashProfile from '../components/organisms/DashProfile';
import PageNotFound from './PageNotFound';

function DashboardPage() {
    const navBtn = useRef(null);
    const [navDash, setNavDash] = useState(false);

    return (
        <Container fluid className="p-0 m-0 d-flex flex-row">
            <div className={navDash ? "navbarDashboard show" : "navbarDashboard"}>
                <NavDashboard reff={navBtn} status={navDash} setStatus={setNavDash}/>
            </div>

            <div 
                onClick={()=> {
                    navBtn.current.click();
                    setNavDash(!navDash);
                }} 
                className={(navDash && "show") + " position-absolute top-0 bg-overlay vh-100 z-index-4"}>
            </div>

            <div className="w-100 bodyDashboard">
                <BarBrown reff={navBtn} status={navDash} setStatus={setNavDash}/>
                <Switch>
                    <Route path="/dashboard/listproduct/">
                        <DashListProduct />
                    </Route>
                    <Route path="/dashboard/profile/">
                        <DashProfile />
                    </Route>
                    <Route path="/dashboard/home/">
                        <DashHome />
                    </Route>
                    <Route path="/dashboard/about/">
                        <DashAbout />
                    </Route>
                    <Route path="/dashboard/changepass/">
                        <DashChangePass />
                    </Route>
                    <Route>
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage

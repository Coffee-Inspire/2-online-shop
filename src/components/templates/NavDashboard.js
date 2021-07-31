import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../../redux/actions/auth.actions';

import emblem from '../../assets/logos/phanen-shop-emblem.png'

function NavDashboard(props) {
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutAction());
    }

    return (
        <Navbar sticky="top" bg="light" variant="light" expand="lg" className="px-3 px-lg-4 vh-100 align-items-end d-flex flex-column flex-nowrap">
        <div onClick={()=> {
            props.reff.current.click();
            props.setStatus(!props.status);
            }} className="closebtn">&times;</div>
        <Navbar.Toggle ref={props.reff} aria-controls="any" className="mt-3 d-none"/>
        <Navbar.Collapse id="" className="flex-column mt-3 navbar-animation">
            <Navbar.Brand href="" className="cursorDefault"><img alt="" src={emblem} className="dashNavEmblem"></img></Navbar.Brand>
            <hr className="text-white w-100"></hr>
            <Nav className="mt-3 flex-column w-100">
            <Nav.Link disabled className="navDashLinkTitle">PRODUCT</Nav.Link>
            <Nav.Link className="navDashLink d-flex align-items-center" href="/dashboard/DashAbout">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-card-list mr-2" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg> List Product
            </Nav.Link>
            <Nav.Link disabled className="navDashLinkTitle">SETTINGS</Nav.Link>
            <Nav.Link className="navDashLink d-flex align-items-center" href="/dashboard/DashProfile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle mr-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg> Profile
            </Nav.Link>
            <Nav.Link className="navDashLink d-flex align-items-center" href="/dashboard/DashAbout">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill mr-2" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg> Homepage
            </Nav.Link>
            <Nav.Link className="navDashLink d-flex align-items-center" href="/dashboard/dashabout">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle-fill mr-2" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg> About
            </Nav.Link>
            <Nav.Link disabled className="navDashLinkTitle">ADMINIStRATOR</Nav.Link>
            <Nav.Link className="navDashLink d-flex align-items-center" href="/dashboard/changepass">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-unlock-fill mr-2" viewBox="0 0 16 16">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
                </svg> Change Password
            </Nav.Link>
            <Nav.Link onClick={() => logoutHandle()} className="navDashLink d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg> Logout
            </Nav.Link>
            {/* <Nav.Link href="/dashboard/DashAbout">About Us Post</Nav.Link>
            <Nav.Link href="/dashboard/DashProfile">Profile Web</Nav.Link>
            <Nav.Link href="/dashboard/DashFooter">Footer Details</Nav.Link>
            <Nav.Link href="/dashboard/DashAdmin">Change Password Admin</Nav.Link> */}
            {/* <Nav.Link onClick={() => logoutHandle()}>Logout</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavDashboard

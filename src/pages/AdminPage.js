import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import BarBrown from '../components/atoms/BarBrown'
import TitleDasboard from '../components/atoms/TitleDashboard'
import FormLogin from '../components/organisms/FormLogin'

import { loginAction } from '../redux/actions/auth.actions';

function AdminPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    const [status, setStatus] = useState({
        error : false,
        text : "",
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username : e.target.username.value,
            password : e.target.password.value
        };
        
        dispatch(loginAction(data, history, setStatus))
    }

    return (
        <Container fluid>
            <Row>
                <BarBrown />
            </Row>
            <Row className="w-100 justify-content-center">
                <TitleDasboard text="Login Outfit Daily Iein" center={true}/>
                <Col xs={11} md={3}>
                    <FormLogin 
                        status={status} 
                        setStatus={setStatus}
                        handleLogin={handleLogin}
                        isLoading={auth.isLoading}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPage

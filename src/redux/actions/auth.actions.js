import axios from 'axios';

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_FAILED = "AUTH_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const LOGOUT = "LOGOUT";

export const authRequest = () => {
    return {
        type: AUTH_REQUEST,
    };
};

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};

export const editSuccess = (data) => {
    return {
        type: EDIT_SUCCESS,
        payload: data
    };
};

export const authFailed = (err) => {
    return {
        type: AUTH_FAILED,
        err,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
}

export const loginAction = (data, history, setStatus) => (dispatch) => {
    dispatch(authRequest());
    return axios
        .post(process.env.REACT_APP_URL_AUTH+"/login", data)
        .then(result => {
            if(result.data.token !== undefined) {
                localStorage[process.env.REACT_APP_TOKEN] = result.data.token
                localStorage[process.env.REACT_APP_PAYLOAD] = JSON.stringify(result.data.user);
                dispatch(loginSuccess(result.data.token))
                
                history.push('/dashboard');
            } else{
                setStatus({
                    error : true,
                    text : "Username dan atau password anda salah !",
                })
                dispatch(authFailed("invalid"));
            }
        })
        .catch(err => {
            setStatus({
                error : true,
                text : "Login failed, no connection or server error !",
            })
            dispatch(authFailed(err))
        })
};

export const logoutAction = () => (dispatch) => {
    dispatch(authRequest());

    return axios.get(process.env.REACT_APP_URL_AUTH+"/logout",{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                localStorage.clear();
                // console.log(result);
                // window.location = ('/admin');
                dispatch(logout());
            })
            .catch(e => {
                dispatch(authFailed(e))
            })
}

export const editAdminAction = (e, currentUsername, formEdit, setFormEdit) => (dispatch) => {
    e.preventDefault();
    dispatch(authRequest());

    let data = {...formEdit};

    // if(formEdit.password === ""){
    //     data = {
    //         email : formEdit.email,
    //         email_old : currentUsername,
    //         password_old : formEdit.password_old
    //     }
    // } else{
    //     data = {
    //         ...formEdit,
    //         username_old : currentUsername
    //     }
    // }

    if(data.username === currentUsername){
        delete data.username;
    }

    return axios
            .put(process.env.REACT_APP_URL_AUTH, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                // console.log(result);
                if(result.data.error){
                    dispatch(authFailed());
                } else{
                    localStorage[process.env.REACT_APP_PAYLOAD] = JSON.stringify(result.data);
                    setFormEdit({
                        ...formEdit,
                        password_old : "",
                        password : "",
                        password_confirmation : "",
                    })
                    dispatch(editSuccess());
                }
            })
            .catch(e => {
                dispatch(authFailed(e))
            })

}
import { AUTH_REQUEST, AUTH_FAILED, LOGIN_SUCCESS, EDIT_SUCCESS, LOGOUT } from '../actions/auth.actions'

const token = localStorage.ifgfToken;

const initialState = (token !== undefined && token !== null) ? {
    isLogged: true,
    isLoading : false,
    editSuccess : false,
    error: false,
} : {
    isLogged: false,
    isLoading : false,
    editSucess : false,
    error: false,
}

const auth = (state = initialState, action) => {
    switch (action.type){
        case AUTH_REQUEST: 
            return {
                ...state,
                isLoading: true,
                editSuccess : false,
            };

        case AUTH_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
                editSuccess : false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                error: false,
            }

        case EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                editSuccess : true,
                error: false,
            }

        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                editSuccess : false,
                error: false,
            }

        default:
            return  state;
    }
}

export default auth;
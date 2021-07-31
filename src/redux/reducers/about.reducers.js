import { INITIAL, REQUEST, FAILED, GET_SUCCESS, EDIT_SUCCESS } from '../actions/about.actions'

const initialState = {
    data : [],
    isInitial : false,
    isLoading : false,
    editSuccess : false,
    error: false,
};

const about = (state = initialState, action) => {
    switch (action.type){

        case INITIAL: 
            return {
                ...state,
                isInitial: true,
            };

        case REQUEST: 
            return {
                ...state,
                isLoading: true,
            };

        case FAILED:
            return {
                ...state,
                isInitial : false,
                isLoading : false,
                editSuccess : false,
                error: true,
            };

        case GET_SUCCESS:
            return {
                ...state,
                data: action.data,
                isInitial : false,
                isLoading : false,
                editSuccess : false,
                error: false,
            }

        case EDIT_SUCCESS:
            return {
                ...state,
                data: action.data,
                isInitial : false,
                isLoading : false,
                editSuccess : true,
                error: false,
            }

        default:
            return  state;
    }
}

export default about;
import { REQUEST, FAILED, SUCCESS } from '../actions/home.actions'

const initialState = {
    data : [],
    isLoading : false,
    error: false,
};

const home = (state = initialState, action) => {
    switch (action.type){

        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                editSuccess : false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };

        case SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            }

        default:
            return state;
    }
}

export default home;
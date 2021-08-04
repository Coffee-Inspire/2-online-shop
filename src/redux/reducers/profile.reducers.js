import { INITIAL, REQUEST, FAILED, GET_SUCCESS, SAVE_SUCCESS } from '../actions/profile.actions'

const initialState = {
    data : {},
    isInitial : false,
    isLoading : false,
    saveSuccess : false,
    error: false,
};

const about = (state = initialState, action) => {
    switch (action.type){

        case INITIAL: 
            return {
                ...state,
                isInitial: true,
                isLoading: false,
                saveSuccess : false,
                error: false,
            };

        case REQUEST: 
            return {
                ...state,
                isInitial : false,
                isLoading: true,
                saveSuccess : false,
                error: false,
            };

        case FAILED:
            return {
                ...state,
                isInitial : false,
                isLoading : false,
                saveSuccess : false,
                error: true,
            };

        case GET_SUCCESS:
            return {
                ...state,
                data: {...action.data},
                isInitial : false,
                isLoading : false,
                saveSuccess : false,
                error: false,
            }

        case SAVE_SUCCESS:
            return {
                ...state,
                data: {...action.data},
                isInitial : false,
                isLoading : false,
                saveSuccess : true,
                error: false,
            }

        default:
            return  state;
    }
}

export default about;
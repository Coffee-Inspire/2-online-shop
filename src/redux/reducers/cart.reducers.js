import { REQUEST, FAILED, SUCCESS, FINISH } from '../actions/cart.actions'

const initialState = {
    data : [],
    dataLocal : [],
    totalPrice : 0,
    isLoading : false,
    error: false
};

const cart = (state = initialState, action) => {
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
            };
            
        case FINISH:
            return {
                ...state,
                dataLocal: action.data,
                totalPrice : action.totalPrice,
                isLoading: false,
            }

        default:
            return state;
    }
}

export default cart;
import { INITIAL, REQUEST, FAILED, GET_SUCCESS, POST_SUCCESS, SAVE_SUCCESS, DELETE_SUCCESS } from '../actions/productFashion.actions'

const initialState = {
    data : [],
    isInitial : false,
    isLoading : false,
    postSuccess : false,
    saveSuccess : false,
    deleteSuccess : false,
    error: false,
};

const productFashion = (state = initialState, action) => {
    switch (action.type){

        case INITIAL: 
            return {
                ...state,
                isInitial: true,
                isLoading: false,
                postSuccess : false,
                saveSuccess : false,
                deleteSuccess : false,
                error: false,
            };

        case REQUEST: 
            return {
                ...state,
                isInitial : false,
                isLoading: true,
                postSuccess : false,
                saveSuccess : false,
                deleteSuccess : false,
                error: false,
            };

        case FAILED:
            return {
                ...state,
                isInitial : false,
                isLoading : false,
                postSuccess : false,
                saveSuccess : false,
                deleteSuccess : false,
                error: true,
            };

        case GET_SUCCESS:
            return {
                ...state,
                data: action.data,
                isInitial : false,
                isLoading : false,
                postSuccess : false,
                saveSuccess : false,
                deleteSuccess : false,
                error: false,
            }

        case POST_SUCCESS:
            return {
                ...state,
                data: [...state.data , action.data],
                isInitial : false,
                isLoading : false,
                postSuccess : true,
                saveSuccess : false,
                deleteSuccess : false,
                error: false,
            }

        case SAVE_SUCCESS:

        let newData = state.data.map((item) => {
            if(item.id === action.data.id){
                return action.data;
            }
            else{
                return item;
            }
        })

            return {
                ...state,
                data: [...newData],
                isInitial : false,
                isLoading : false,
                postSuccess : false,
                saveSuccess : true,
                deleteSuccess : false,
                error: false,
            }
        
        case DELETE_SUCCESS:
        
        let newDeleteData = state.data;
        newDeleteData.forEach((item, index) => {
            if(item.id === action.id){
                newDeleteData.splice(index, 1)
            }
        })
        
            return {
                ...state,
                data: [...newDeleteData],
                isInitial : false,
                isLoading : false,
                postSuccess : false,
                saveSuccess : false,
                deleteSuccess : true,
                error: false,
            }

        default:
            return state;
    }
}

export default productFashion;
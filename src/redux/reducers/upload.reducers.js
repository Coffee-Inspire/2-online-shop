import { UPLOAD_REQUEST, UPLOAD_FAILED, UPLOAD_SUCCESS } from '../actions/upload.actions';

const initialState = {
    isLoading : false,
    uploadSuccess : false,
    error: false,
};

const upload = (state = initialState, action) => {
    switch (action.type){

        case UPLOAD_REQUEST: 
            return {
                ...state,
                isLoading: true,
                uploadSuccess : false,
            };

        case UPLOAD_FAILED:
            return {
                ...state,
                isLoading: false,
                uploadSuccess : false,
                error: true,
            };

        case UPLOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                uploadSuccess: true,
                error: false,
            }

        default:
            return  state;
    }
}

export default upload;
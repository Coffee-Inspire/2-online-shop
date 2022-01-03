import axios from 'axios';

export const UPLOAD_REQUEST = "UPLOAD_REQUEST";
export const UPLOAD_FAILED = "UPLOAD_FAILED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";

export const upload_request = () => {
    return {
        type: UPLOAD_REQUEST,
    };
};

export const upload_failed = (err) => {
    return {
        type: UPLOAD_FAILED,
        err,
    };
};

export const upload_success = (data) => {
    return {
        type: UPLOAD_SUCCESS,
        data: data
    };
};

export const uploadImageAction = (image, setProgressBar) => (dispatch) => {
    dispatch(upload_request());
    
    let fd = new FormData();
    fd.append('image', image, Date.now()+ image.name);
    
    return axios
        .post(process.env.REACT_APP_URL_IMAGE, fd, {
        // .post('http://localhost:3333', fd, {
            headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          }, 
            onUploadProgress: ProgressEvent => {
                setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
            }
        })
        .then(result => {
            dispatch(upload_success());
            setProgressBar(0);
            return result.data.url;
        })
        .catch(err => {
            console.log("err image upload ",err);
            dispatch(upload_failed());
            return err;
        })
};
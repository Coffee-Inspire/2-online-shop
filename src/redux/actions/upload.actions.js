import axios from 'axios';

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
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

    let fd = new FormData();
    fd.append('image', image, Date.now()+ image.name);

    return axios
        // .post(process.env.REACT_APP_URL_IMAGE, fd, {
        .post('http://localhost:3333', fd, {
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
            return result.data.url;
        })
        .catch(err => {
            dispatch(failed());
            return err;
        })
};
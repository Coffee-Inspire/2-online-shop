import axios from 'axios';
// import imageBanner from '../../assets/images/image-example-2.jpg'
import { uploadImageAction } from '../actions/upload.actions';

export const INITIAL = "INITIAL";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const GET_SUCCESS = "GET_SUCCESS";
export const SAVE_SUCCESS = "SAVE_SUCCESS";

// let DUMMY_HOMEPAGE_PROMOTION = {
//     promoTitle : `promo this week`,
//     promoImage : imageBanner,
//     promoUrl : `cosmetic/14`,
// };

export const initial = () => {
    return {
        type: INITIAL,
    };
};

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

export const get_success = (data) => {
    return {
        type: GET_SUCCESS,
        data: data
    };
};

export const save_success = (data) => {
    return {
        type: SAVE_SUCCESS,
        data: data
    };
};

export const getHomeAction = (setData) => (dispatch) => {
    // setFormEdit(DUMMY_HOMEPAGE_PROMOTION)
    dispatch(initial());
    
    return axios
        .get(process.env.REACT_APP_URL_HOMEPAGE)
        .then(result => {
            if(result.data.length !== 0){
                setData(...result.data);
            }
            dispatch(get_success(result.data));
        })
        .catch(err => {
            // console.log(err);
            dispatch(failed(err));
        });
};

export const postHomeAction = (form, image, setProgressBar, setForm) => (dispatch) => {
    dispatch(request());

    let uploadImage = dispatch(uploadImageAction(image, setProgressBar));
    uploadImage.then(result => {
        
        let data = {
            ...form,
            [result !== "" && "promoImage"] : result,
        }

        return axios
            .post(process.env.REACT_APP_URL_HOMEPAGE, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                setForm(result.data);
                dispatch(save_success(result.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(failed(err));
            })

    })
    .catch(err => dispatch(failed(err)))
}

export const editHomeAction = (form, image, setProgressBar) => (dispatch) => {
    dispatch(request());

    let edit = (form, imagePath) => {
        let data = {
            ...form,
            [imagePath !== "" && "image"] : imagePath,
        }

        return axios
            .put(process.env.REACT_APP_URL_HOMEPAGE +'/'+ form.id, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                dispatch(save_success(result.data));
            })
            .catch(err => dispatch(failed(err)))
    }

    if(image){
        let uploadImage = dispatch(uploadImageAction(image, setProgressBar));
        uploadImage.then(result => {
            edit(form, result);
        })
    } else{
        edit(form, "");
    }
}
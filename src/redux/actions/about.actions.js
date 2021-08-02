import axios from 'axios';
import imageBanner from '../../assets/images/image-example-3.png'
import { uploadImageAction } from '../actions/upload.actions';

export const INITIAL = "INITIAL";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const GET_SUCCESS = "GET_SUCCESS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";

// let DUMMY_ABOUTUS = {
//     title : `About Us` ,
//     description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
//                     type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
//                     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
//                     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` ,
//     image : imageBanner 
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

export const edit_success = (data) => {
    return {
        type: EDIT_SUCCESS,
        data: data
    };
};

export const getAboutAction = (setData) => (dispatch) => {
    // setData(DUMMY_ABOUTUS);

    dispatch(initial());
    
    return axios
        .get(process.env.REACT_APP_URL_ABOUTUS)
        .then(result => {
            if(result.data.length !== 0){
                setData(result.data);
            }
            dispatch(get_success(result.data));
        })
        .catch(err => {
            // console.log(err);
            dispatch(failed(err));
        });
};

export const postAboutAction = (form, image, setProgressBar) => (dispatch) => {
    dispatch(request());

    // console.log("ini title ", title);
    // console.log("ini desc ", description);
    // console.log("ini image ", image);

    let post = (form, imagePath) => {
        let data = {
            ...form,
            [imagePath !== "" && "image"] : imagePath,
        }
        // console.log(data);

        return axios
            .post(process.env.REACT_APP_URL_ABOUTUS, data,{
                headers: {
                    Authorization: localStorage[process.env.REACT_APP_TOKEN]
                }
            })
            .then(result => {
                console.log("berhasil ", result.data)
            })
            .catch(err => dispatch(failed(err)))

    }

    if(image){
        let uploadImage = dispatch(uploadImageAction(image, setProgressBar));
        uploadImage.then(result => {
            // console.log(result);
            post(form, result).then(result => {
                console.log("yasudah")
            })
            .catch(err => dispatch(failed(err)))
        })
    } else{
        post(form, "")
    }

    // return axios
    //     .post(process.env.REACT_APP_URL_ABOUTUS)
}
import axios from 'axios';

export const INITIAL = "INITIAL";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const GET_SUCCESS = "GET_SUCCESS";
export const SAVE_SUCCESS = "SAVE_SUCCESS";

// let DUMMY_PROFILE = {
//     description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     waInd : `+62 813 2702 29505`,
//     templateMsgInd : 'Hello, i would like to order this item',
//     waTwn : `+886 976 256 013`,
//     templateMsgTwn : '你好，我想订购这个商品',
//     instagram : `@phanenshopgram`,
//     instagramUrl : `@phanenshopgram`,
//     email : `phanen_shop@yahoo.mail.com`
// }

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

export const getCountryListAction = (setCountry) => (dispatch) => {
    axios.get(`https://restcountries.com/v2/all`)
    .then((result)=>setCountry(result.data))
};

export const getProfileAction = (setData) => (dispatch) => {
    // setFormEdit(DUMMY_PROFILE)
    dispatch(initial());
    
    return axios
        .get(process.env.REACT_APP_URL_PROFILE)
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

export const postProfileAction = (form, setForm) => (dispatch) => {
    dispatch(request());

    return axios
        .post(process.env.REACT_APP_URL_PROFILE, form,{
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
};

export const editProfileAction = (form) => (dispatch) => {
    dispatch(request());

    return axios
        .put(process.env.REACT_APP_URL_PROFILE +'/'+ form.id, form,{
            headers: {
                Authorization: localStorage[process.env.REACT_APP_TOKEN]
            }
        })
        .then(result => {
            dispatch(save_success(result.data));
        })
        .catch(err => dispatch(failed(err)))
};
import axios from 'axios';

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

let DUMMY_PROFILE = {
    description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    waInd : `+62 813-2702-29505`,
    templateMsgInd : 'Hello, i would like to order this item',
    waTwn : `+886 976 256 013`,
    templateMsgTwn : '你好，我想订购这个商品',
    instagram : `@phanenshopgram`,
    instagramUrl : `@phanenshopgram`,
    email : `phanen_shop@yahoo.mail.com`
}

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data) => {
    return {
        type: SUCCESS,
        data: data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getProfileAction = (setFormEdit) => (dispatch) => {
    setFormEdit(DUMMY_PROFILE)
};

export const getCountryListAction = (setCountry) => (dispatch) => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then((result)=>setCountry(result.data))
};
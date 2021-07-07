// import axios from 'axios';
import imageBanner from '../../assets/images/image-example-2.jpg'

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

let DUMMY_HOMEPAGE_PROMOTION = {
    promoTitle : `promo this week`,
    promoImage : imageBanner,
    promoUrl : `cosmetic/14`,
};

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

export const getHomeAction = (setFormEdit) => (dispatch) => {
    setFormEdit(DUMMY_HOMEPAGE_PROMOTION)
};
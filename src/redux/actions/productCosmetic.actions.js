import axios from 'axios';
import productImage from '../../assets/images/image-example-2.jpg'
import { uploadImageAction } from '../actions/upload.actions';

export const INITIAL = "INITIAL";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const GET_SUCCESS = "GET_SUCCESS";
export const SAVE_SUCCESS = "SAVE_SUCCESS";

let DUMMY_PRODUCT_COSMETIC = [
    {
        id : "11",
        name : `signature pink parfume`,
        image : productImage,
        price : 200000,
        quantity : 100,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `body`
    },
    {
        id : "12",
        name : `peach lipstick`,
        image : productImage,
        price : 100000,
        quantity : 50,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `face`
    },
    {
        id : "13",
        name : `eye scrub`,
        image : productImage,
        price : 300000,
        quantity : 30,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `face`
    },
    {
        id : "14",
        name : `special peach cosmetic set`,
        image : productImage,
        price : 700000,
        quantity : 10,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `package`
    },
    {
        id : "15",
        name : `apple powder`,
        image : productImage,
        price : 500000,
        quantity : 50,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `body`
    },
    {
        id : "16",
        name : `face mask`,
        image : productImage,
        price : 400000,
        quantity : 60,
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `face`
    }
];

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

export const getProductCosmeticAction = (setData) => (dispatch) => {
    setData(DUMMY_PRODUCT_COSMETIC)
    // dispatch(initial());
    
    // return axios
    //     .get(process.env.REACT_APP_URL_PCOSMETIC)
    //     .then(result => {
    //         if(result.data.length !== 0){
    //             setData(...result.data);
    //         }
    //         dispatch(get_success(result.data));
    //     })
    //     .catch(err => {
    //         // console.log(err);
    //         dispatch(failed(err));
    //     });
};
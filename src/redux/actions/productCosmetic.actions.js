// import axios from 'axios';
import productImage from '../../assets/images/image-example-2.jpg'

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

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

export const getProductCosmeticAction = (setFormEdit) => (dispatch) => {
    setFormEdit(DUMMY_PRODUCT_COSMETIC)
};
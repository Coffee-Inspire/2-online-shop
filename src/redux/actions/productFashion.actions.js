// import axios from 'axios';
import productImage from '../../assets/images/image-example-3.jpg'

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

let DUMMY_PRODUCT_FASHION = [
    {
        id : "21",
        name : `hblack tees`,
        image : productImage,
        price : 200000,
        quantity : 100,
        size : ["s","m"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `top`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
    },
    {
        id : "22",
        name : `luxury bag`,
        image : productImage,
        price : 100000,
        quantity : 50,
        size : ["s","m","l"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `merchandise`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
    },
    {
        id : "23",
        name : `summer one piece set`,
        image : productImage,
        price : 300000,
        quantity : 30,
        size : ["s","m","l","xl"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `package`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
    },
    {
        id : "24",
        name : `lethal jacket`,
        image : productImage,
        price : 700000,
        quantity : 10,
        size : ["s","m","l","xl","xxl"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `top`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
    },
    {
        id : "25",
        name : `ebony vintage jeans`,
        image : productImage,
        price : 500000,
        quantity : 50,
        size : ["s","m","l","xl"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `bottom`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
    },
    {
        id : "26",
        name : `cute sunglasses`,
        image : productImage,
        price : 400000,
        quantity : 60,
        size : ["m"],
        description : `Signature Pink Parfume merupakan salah satu produk wewangian atau parfum yang diluncukan oleh Maison Francis Kurkdjian (MFK). Nama Maison Francis Kurkdjian mulai terkenal di industri wewangian sejak tahun 2009.`,
        category : `headwear`,
        info : `1. Harap ukur sesuai detail size yang sudah diberikan
                2. Tinggi badan model: 172 cm
                3. On model menggunakan size L`
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

export const getProductFashionAction = (setFormEdit) => (dispatch) => {
    setFormEdit(DUMMY_PRODUCT_FASHION)
    // return axios(process.env.REACT_APP_URL_PFASHION)
    // .then((res)=>setFormEdit(res))
};
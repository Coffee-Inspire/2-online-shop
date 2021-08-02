import {combineReducers} from 'redux';

import auth from './auth.reducers';
import home from './home.reducers';
import about from './about.reducers';
import profile from './profile.reducers';
import productCosmetic from './productCosmetic.reducers';
import productFashion from './productFashion.reducers';
import cart from './cart.reducers';

import upload from './upload.reducers';

const rootReducer = combineReducers({
    auth, 
    home,
    about,
    productCosmetic,
    productFashion,
    cart,
    profile,
    upload
})

export default rootReducer
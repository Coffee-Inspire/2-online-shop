import {combineReducers} from 'redux';

import auth from './auth.reducers';
import home from './home.reducers';
import about from './about.reducers';
import profile from './profile.reducers';
import productCosmetic from './productCosmetic.reducers';


const rootReducer = combineReducers({
    auth, 
    home,
    about,
    productCosmetic,
    profile
})

export default rootReducer
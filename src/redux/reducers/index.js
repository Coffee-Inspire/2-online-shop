import {combineReducers} from 'redux';

import home from './home.reducers';
import about from './about.reducers';
import profile from './profile.reducers';
import productCosmetic from './productCosmetic.reducers';


const rootReducer = combineReducers({
    home,
    about,
    productCosmetic,
    profile
})

export default rootReducer
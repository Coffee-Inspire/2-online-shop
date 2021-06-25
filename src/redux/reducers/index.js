import {combineReducers} from 'redux';

import home from './home.reducers';
import about from './about.reducers';
import profile from './profile.reducers';

const rootReducer = combineReducers({
    home,
    about,
    profile
})

export default rootReducer
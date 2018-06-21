/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import { combineReducers } from 'redux';
import HeaderReducer from '../header/headerReducer';

const rootReducer = combineReducers({
  header: HeaderReducer,
});

export default rootReducer;

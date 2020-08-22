import { combineReducers } from 'redux';
import postReducers from './postReducer';
import usersReducers from './usersReducer';

export default combineReducers({ posts: postReducers, users: usersReducers })
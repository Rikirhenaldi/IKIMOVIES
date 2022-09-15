import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';
import auth from "./auth"
import movie from './movie';


const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};


const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  global,
  movie
});

export default reducer;

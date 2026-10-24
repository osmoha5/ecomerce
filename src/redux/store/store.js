import { configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/es/storage";
import cartSlice from '../reduce/Cart'

const configPersist = {
    'key': 'root',
    storage
}
const reducer = combineReducers({
 cart:cartSlice
})
const persistReducers = persistReducer(configPersist, reducer)
const store = configureStore({
    reducer:persistReducers
       
    
})

export default store
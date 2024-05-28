import { configureStore } from "@reduxjs/toolkit";
import MedicineReducer from './redux/MedicineConfigSlice'
export const store = configureStore({
    reducer:{
        Medicine: MedicineReducer
    }
})
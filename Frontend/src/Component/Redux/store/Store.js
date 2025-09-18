
import LoaderReducer from "../reducers/LoaderReducer";
import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalRaducer";


export const store=configureStore({
    reducer:{
        loader:LoaderReducer,
        modal :ModalReducer
        
    }
})
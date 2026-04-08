import { configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlicer"
const store = configureStore({
    reducer:{
        products:productReducer,
    }

})
export default store;
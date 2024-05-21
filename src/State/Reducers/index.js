import { combineReducers } from "redux";
import { product_reducers } from "./Product_Reducer";
import { admin_reducers } from "./Admin_Reducer";

export const All_Reducers = combineReducers({
    product: product_reducers,
    admin: admin_reducers,
});

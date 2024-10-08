import { combineReducers } from "redux";
import crudReducer from "./CrudeReducer";


const rootReducer = combineReducers({
    crud: crudReducer
})

export default rootReducer;
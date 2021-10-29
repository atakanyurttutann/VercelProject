import {  combineReducers } from "redux";
import { formDataReducer } from "./formDataReducer";
import { imageUrlReducer } from "./imageUrlReducer";
import {imageUrlDataReducer} from './galleryDataReducer'
const combinedReducer  = combineReducers({
imageUrl:imageUrlReducer,
formData:formDataReducer,
imageUrlData:imageUrlDataReducer
});
export default combinedReducer
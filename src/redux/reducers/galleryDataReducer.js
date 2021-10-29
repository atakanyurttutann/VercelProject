import * as types from "../types";
let initialState = { 
    imageUrlData:[]
  };
export const imageUrlDataReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.IMAGE_URL_DATA:
              state.imageUrlData=action.imageUrlData;
               return {
                 ...state
               }
            default:
                return state
        }
    }
    export default imageUrlDataReducer;


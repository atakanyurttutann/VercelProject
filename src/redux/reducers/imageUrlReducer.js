import * as types from "../types";
const initialState = { 
    imageUrl:""
  };
export const imageUrlReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.IMAGE_URL_CHANGE:
                return  {
                    ...state,
                    imageUrl:action.imageUrl
                }
            default:
                return state
        }
    }
    export default imageUrlReducer;


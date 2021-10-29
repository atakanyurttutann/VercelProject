import * as types from "../types";
const initalProps = {
formData:{
}
}
export const formDataReducer = (state = initalProps, action) => {
        switch (action.type) {
            case  types.FORM_DATA_ADD:
                console.log(action.formData)
                const data =  Object.keys(action.formData)
                data.map((e)=>{
                    state.formData[e]=action.formData[e]
                })
                return {
                    ...state
                }
                 
            default:
                return state
        }
    }
    export default formDataReducer;


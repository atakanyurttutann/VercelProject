import { IMAGE_URL_CHANGE, FORM_DATA_ADD , IMAGE_URL_DATA} from "../types";
export const imageChange = (payload) => {
  return {
    type: IMAGE_URL_CHANGE,
    imageUrl:payload
  };
};
export const formDataAdd = (payload) => {
  return {
    type: FORM_DATA_ADD,
    formData:payload
  };
};
export const galleryImageDataAdd = (payload) => {
  
  return {
    type: IMAGE_URL_DATA,
    imageUrlData:payload
  };
};
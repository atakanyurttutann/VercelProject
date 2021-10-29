import axios from 'axios';
import {GET_GALLERY_IMAGE} from './galleryImageAPI';
import {galleryImageDataAdd} from '@/redux/actions/index'
export const getGalleryImage = (page) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios({
          method: 'GET',
          url: GET_GALLERY_IMAGE+`?_limit=12&_page=${page}`,
        });
        const responseData = response.data;
       dispatch(galleryImageDataAdd(responseData))
        return responseData;
      } catch (error) {
     
        throw error.response.data;
      }
    }
};
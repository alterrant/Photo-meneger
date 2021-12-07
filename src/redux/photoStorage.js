/*import {useFirestore} from "../hooks/useFirestore";*/
import {addUserPhoto, deleteUserPhoto, unsubscribe} from "../firebase/firestore";

const GET_USER_PHOTOS = "GET_USER_PHOTOS";
const GET_COMMON_PHOTOS = "GET_COMMON_PHOTOS";
const LOADING_PHOTO_TOGGLE = "LOADING_PHOTO_TOGGLE";
const DELETING_PHOTO_TOGGLE = "DELETING_PHOTO_TOGGLE";

const initialPhotoState = {
  isLoadingPhoto: false,
  isDeletingPhoto: false,
  authUserPhotos: null,
  commonPhotos: null
};

export const photoStorage = (state = initialPhotoState, action) => {
  switch (action.type) {
    case GET_USER_PHOTOS:
      return {...state, authUserPhotos: action.photos}
    case GET_COMMON_PHOTOS:
      return {...state, commonPhotos: action.commonPhotos}
    case LOADING_PHOTO_TOGGLE:
      debugger
      return {...state, isLoadingPhoto: action.isLoadingPhoto}
    case DELETING_PHOTO_TOGGLE:
      return {...state, isDeletingPhoto: action.isDeletingPhoto}
    default:
      return state;
  }
}

export const getUserPhotos = (photos) => ({type: GET_USER_PHOTOS, photos});
export const getCommonPhotos = (photos) => ({type: GET_COMMON_PHOTOS, photos});
export const setStatusLoadingPhoto = (isLoadingPhoto) => ({type: LOADING_PHOTO_TOGGLE, isLoadingPhoto});
export const setStatusDeletingPhoto = (isDeleting) => ({type: DELETING_PHOTO_TOGGLE, isDeleting});

export const addNewPhoto = (props) => (dispatch) => {
  dispatch(setStatusLoadingPhoto(true));

  addUserPhoto(props);

  dispatch(setStatusLoadingPhoto(false));
}

export const deletePhoto = (props) => (dispatch) => {
  dispatch(setStatusDeletingPhoto(true));

  deleteUserPhoto(props);

  dispatch(setStatusDeletingPhoto(false));
}

import {addUserPhoto, deletePhotos, snapshotCommonPhotos, snapshotUserPhotos} from "../firebase/firestore";

const GET_USER_PHOTOS = "GET_USER_PHOTOS";
const GET_COMMON_PHOTOS = "GET_COMMON_PHOTOS";
const LOADING_PHOTO_TOGGLE = "LOADING_PHOTO_TOGGLE";
const LOADING_USER_PHOTO_TOGGLE = "LOADING_USER_PHOTO_TOGGLE";
const LOADING_COMMON_PHOTO_TOGGLE = "LOADING_COMMON_PHOTO_TOGGLE";
const DELETING_PHOTO_TOGGLE = "DELETING_PHOTO_TOGGLE";
const LOOKING_MY_PHOTO_TOGGLE = "LOOKING_MY_PHOTO_TOGGLE";

const initialPhotoState = {
  isLookingMyPhotos : true,
  isLoadingPhoto: false,
  isLoadingUserPhotos: false,
  isLoadingCommonPhotos: false,
  isDeletingPhoto: false,
  authUserPhotos: null,
  userPhotos: [],
  commonPhotos: []
};

export const photoStorage = (state = initialPhotoState, action) => {
  switch (action.type) {
    case LOOKING_MY_PHOTO_TOGGLE:
      return {...state, isLookingMyPhotos: !state.isLookingMyPhotos}
    case GET_USER_PHOTOS:
      return {...state, userPhotos: action.userPhotos}
    case GET_COMMON_PHOTOS:
      return {...state, commonPhotos: action.commonPhotos}
    case LOADING_PHOTO_TOGGLE:
      return {...state, isLoadingPhoto: action.isLoadingPhoto}
    case LOADING_USER_PHOTO_TOGGLE:
      return {...state, isLoadingUserPhotos: action.isLoadingUserPhotos}
    case LOADING_COMMON_PHOTO_TOGGLE:
      return {...state, isLoadingCommonPhotos: action.isLoadingCommonPhotos}
    case DELETING_PHOTO_TOGGLE:
      return {...state, isDeletingPhoto: action.isDeletingPhoto}
    default:
      return state;
  }
}

export const getUserPhotos = (userPhotos) => ({type: GET_USER_PHOTOS, userPhotos});
export const getCommonPhotos = (commonPhotos) => ({type: GET_COMMON_PHOTOS, commonPhotos});
export const setStatusLookingPhotos = () => ({type: LOOKING_MY_PHOTO_TOGGLE})
export const setStatusLoadingPhoto = (isLoadingPhoto) => ({type: LOADING_PHOTO_TOGGLE, isLoadingPhoto});
export const setStatusLoadingUserPhotos = (isLoadingUserPhotos) => ({type: LOADING_USER_PHOTO_TOGGLE, isLoadingUserPhotos});
export const setStatusLoadingCommonPhotos = (isLoadingCommonPhotos) => ({type: LOADING_COMMON_PHOTO_TOGGLE, isLoadingCommonPhotos});
export const setStatusDeletingPhoto = (isDeleting) => ({type: DELETING_PHOTO_TOGGLE, isDeleting});

export const addNewPhoto = (props) => (dispatch) => {
  dispatch(setStatusLoadingPhoto(true));

  addUserPhoto(props);

  dispatch(setStatusLoadingPhoto(false));
}

export const deletePhoto = (props) => (dispatch) => {
  dispatch(setStatusDeletingPhoto(true));

  deletePhotos(props);

  dispatch(setStatusDeletingPhoto(false));
}

export const subscribeCommonPhotos = (setUrlImages, urlImages) => (dispatch) => {
  dispatch(setStatusLoadingCommonPhotos(true));

  snapshotCommonPhotos(setUrlImages);

  dispatch(getCommonPhotos(urlImages));

  dispatch(setStatusLoadingCommonPhotos(false));
}

export const unsubscribeCommonPhotos = () => (dispatch) => {
  snapshotCommonPhotos();
}

export const subscribeUserPhotos = (setUrlImages, urlImages, user) => (dispatch)   => {
  dispatch(setStatusLoadingCommonPhotos(true));

  snapshotUserPhotos(setUrlImages, user);

  dispatch(getUserPhotos(urlImages));

  dispatch(setStatusLoadingCommonPhotos(false));
}

export const unsubscribeUserPhotos = (user) => (dispatch) => {
  snapshotUserPhotos(null, user);
}
import {
  addUserPhoto,
  deletePhotos,
  snapshotCommonPhotos,
  snapshotUserPhotos,
  sortAndSerializePhotos
} from "../firebase/firestore";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  isLookingMyPhotos: true,
  isLoadingNewPhoto: false,
  isLoadingUserPhotos: false,
  isLoadingCommonPhotos: false,
  isDeletingPhoto: false,
  userPhotos: [],
  commonPhotos: []
};

const photoStorageSlice = createSlice({
  name: 'photoStorage',
  initialState,
  reducers: {
    setStatusLookingPhotos(state, action) {
      state.isLookingMyPhotos = !state.isLookingMyPhotos;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(addNewPhoto.pending, (state, action) => {
          state.isLoadingNewPhoto = true;
        })
        .addCase(addNewPhoto.fulfilled, (state, action) => {
          state.isLoadingNewPhoto = false;
        })
        .addCase(deletePhoto.pending, (state, action) => {
          state.isDeletingPhoto = true;
        })
        .addCase(deletePhoto.fulfilled, (state, action) => {
          state.isDeletingPhoto = false;
        })
        .addCase(subscribeCommonPhotos.pending, (state, action) => {
          state.isLoadingCommonPhotos = true;
        })
        .addCase(subscribeCommonPhotos.fulfilled, (state, action) => {
          state.isLoadingCommonPhotos = false;
          state.commonPhotos = sortAndSerializePhotos(action.payload);
        })
        .addCase(subscribeUserPhotos.pending, (state, action) => {
          state.isLoadingUserPhotos = true;
        })
        .addCase(subscribeUserPhotos.fulfilled, (state, action) => {
          state.isLoadingUserPhotos = false;
          state.userPhotos = sortAndSerializePhotos(action.payload);
        })
  }
})

export const addNewPhoto = createAsyncThunk(
    'photoStorage/addNewPhoto',

    async (props) => {
      return await addUserPhoto(props);
    }
)
export const deletePhoto = createAsyncThunk(
    'photoStorage/deletePhoto',

    async (props) => {
      return await deletePhotos(props);
    }
)
export const subscribeCommonPhotos = createAsyncThunk(
    'photoStorage/subscribeCommonPhotos',

    async ({setUrlImages, urlImages}, dispatch) => {
      await snapshotCommonPhotos('subscribe', setUrlImages, urlImages);
      return urlImages;
    }
)
export const subscribeUserPhotos = createAsyncThunk(
    'photoStorage/subscribeUserPhotos',

    async ({user, setUrlImages, urlImages}, dispatch) => {
      await snapshotUserPhotos('subscribe', user, setUrlImages, urlImages);
      return urlImages;
    }
)
export const unsubscribeUserPhotos = (user) => (dispatch) => {
  snapshotUserPhotos('unSubscribe', user);
}
export const unsubscribeCommonPhotos = () => (dispatch) => {
  snapshotCommonPhotos('unSubscribe');
}

export const {setStatusLookingPhotos} = photoStorageSlice.actions;

export default photoStorageSlice.reducer;
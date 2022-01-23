import {logOutRequest, signIn, signUpRequest} from "../firebase/auth";
import {stopSubmit, SubmissionError} from "redux-form";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
  isAuth: false,
  isFetchingLogIn: false,
  isFetchingLogOut: false,

  authUserProfile: {
    displayName: null,
    email: null,
    photoURL: null,
    emailVerified: null,
    uid: null
  }
}

export const logIn = createAsyncThunk(
    'auth/logIn',

    async ({email, password}, dispatch) => {
      const result = await signIn({email, password});

      if (result.reject) dispatch(stopSubmit("signInForm", {
        _error: "Invalid email or password",
        email: " ",
        password: " "
      }));

      return result;
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',

    async ({email, password}) => {
      const signedUp = await signUpRequest({email, password});

      if (signedUp.error) {
        if (signedUp.error.errorCode === "auth/email-already-in-use") throw new SubmissionError({
          _error: "email already exist",
          email: " ",
          password: " "
        });

        if (signedUp.error.errorCode === "auth/invalid-email") throw new SubmissionError({
          _error: "invalid email",
          email: " ",
          password: " "
        });

        throw new SubmissionError({_error: signedUp.error.errorCode, email: " ", password: " "});
      }

      return signedUp;
    }
)

export const loggingOut = () => (dispatch) => {
  logOutRequest();

  dispatch(logOut());
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthProfile(state, action) {
      if (action.payload) {
        state.isAuth = true;

        state.authUserProfile = action.payload;
      }
    },
    logOut(state, action) {
      state.isFetchingLogOut = false;
      state.isAuth = false;

      state.authUserProfile = {
        displayName: null,
        email: null,
        photoURL: null,
        emailVerified: null
      }
    },
    extraReducers: builder => {
      builder
          .addCase(logIn.pending, (state, action) => {
            console.log('sadfkjashdfhasd')
            state.isFetchingLogIn = true;
          })
          .addCase(logIn.fulfilled, (state, action) => {
            state.isFetchingLogIn = false;
            state.isAuth = true;

            state.authUserProfile = action.payload;
          })
    }
  }
})


export const {setAuthProfile, logOut} = authSlice.actions;

export default authSlice.reducer;
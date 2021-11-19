import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {setAuth} from "../redux/authReducer";

/*import firebase from 'firebase';
import firebaseui from 'firebaseui';

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});*/
/*
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};*/

//ui.start('#firebaseui-auth-container', uiConfig);


export const signIn = async ({email, password}) => {
  try {
    const auth = getAuth();

    const signInUser = await signInWithEmailAndPassword(auth, email, password);
    const signedInUser = signInUser.user;

    return signedInUser;

  } catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}


export const signUp = async ({email, password}) => {
  try {
    const auth = getAuth();

    const signUpUser = await createUserWithEmailAndPassword(auth, email, password);
    const signedUpUser = signUpUser.user;

  } catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}

export const logOut = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);

  } catch(error) {
    console.log(error)
  }
}

//Getting profile info
export const authUserProfile = (auth) => {

  const user = auth.currentUser;

  if (user !== null) {
    return {
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid
    }
  }
}
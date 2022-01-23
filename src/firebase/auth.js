import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {GithubAuthProvider} from "firebase/auth";

export const logInGitHub = async () => {
  const providerGitHub = new GithubAuthProvider();
  const auth = getAuth();

  await signInWithRedirect(auth, providerGitHub);
}

export const logInGoogle = async () => {
  const providerGoogle = new GoogleAuthProvider();
  const auth = getAuth();

  await signInWithRedirect(auth, providerGoogle);
};

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

export const signUpRequest = async ({email, password}) => {
  const signedUpInfo = {};
  try {
    const auth = getAuth();

    const signUpUser = await createUserWithEmailAndPassword(auth, email, password);
    signedUpInfo.signedUpUser = signUpUser.user;
  } catch (error) {
    signedUpInfo.error = {};
    signedUpInfo.error.errorCode = error.code;
    signedUpInfo.error.errorMessage = error.message;
  }
  return signedUpInfo;
}

export const logOutRequest = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);

  } catch (error) {
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

export const createUserProfile = (user) => {
  const userProfile = {};

  const {
    uid,
    email,
    emailVerified,
    displayName,
    isAnonymous,
    photoURL,
    phoneNumber,
    metadata: {
      creationTime,
      lastSignInTime
    }
  } = user;

  uid && (userProfile.uid = uid);
  email && (userProfile.email = email);
  emailVerified && (userProfile.emailVerified = emailVerified);
  displayName && (userProfile.displayName = displayName);
  isAnonymous && (userProfile.isAnonymous = isAnonymous);
  photoURL && (userProfile.photoURL = photoURL);
  phoneNumber && (userProfile.phoneNumber = phoneNumber);
  creationTime && (userProfile.creationTime = creationTime);
  lastSignInTime && (userProfile.lastSignInTime = lastSignInTime);

  return userProfile;
}
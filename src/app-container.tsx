import {useEffect} from "react";
import Auth from "./components/auth/auth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {initialize} from "./store/initialise-app"
import Preloader from "./components/common/preloader/preloader";
import App from "./app";
import './app.css';
import {useAppDispatch, useAppSelector} from "./hooks";

export const AppContainer = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const isInit = useAppSelector(state => state.initialiseApp.isInitialized);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(initialize(currentUser));
      } else {
        dispatch(initialize());
      }
    })
  }, [])

  if (!isInit) return <Preloader/>

  return (
      <>
        {isAuth ?
            <App/>
            :
            <Auth/>}
      </>
  );
};

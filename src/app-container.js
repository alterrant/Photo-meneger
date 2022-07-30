import './app.css';
import {useEffect} from "react";
import Auth from "./components/auth/auth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {initialize} from "./redux/initialise-app"
import Preloader from "./components/common/preloader/preloader";
import App from "./app";

function AppContainer () {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const isInit = useSelector(state => state.initialiseApp.isInitialized);

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
}

export default AppContainer;

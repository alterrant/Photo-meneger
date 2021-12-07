import './App.css';
import {Profiler, useEffect, useState} from "react";
import Auth from "./Components/Auth/Auth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {connect} from "react-redux";
import {initialize} from "./redux/initialiseApp"
import Preloader from "./Components/common/Preloader/Preloader";
import UserProfile from "./Components/UserProfile/UserProfile";

function App({isAuth, isInit, initialize}) {

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        initialize(user);
      } else {
        initialize();
      }
    })
  }, [])

  if (!isInit) return <Preloader/>

  return (
      <>
        {isAuth ?
            <UserProfile/>
            :
            <Auth/>}
      </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInit: state.initialiseApp.isInitialized
  }
}

export default connect(mapStateToProps, {initialize})(App);

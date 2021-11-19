import './App.css';
import UserTitile from "./Components/UserTitile/UserTitile";
import {PhotoLoader} from "./Components/PhotoLoader/PhotoLoader";
import {Photos} from "./Components/Photos/Photos";
import {SelectedPhoto} from "./Components/SelectedPhoto/SelectedPhoto";
import {useEffect, useState} from "react";
import Auth from "./Components/Auth/Auth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import LogOut from "./Components/Auth/Sign out/SignOut";
import {connect} from "react-redux";
import {initialize} from "./redux/initialiseApp"
import Preloader from "./Components/common/Preloader/Preloader";

function App({isAuth, isInit, initialize}) {

  let [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        initialize(user);
      } else {
        initialize(user);
      }
    })
  }, [])

  if (!isInit) return <Preloader/>
  else return (
      <>
        {
          isAuth ?
              <div className='main-wrapper'>
                <LogOut/>
                <UserTitile/>
                <PhotoLoader fill={"#8A2BE2"} stroke={"#8A2BE2"}/>
                <Photos setSelectedPhoto={setSelectedPhoto}/>
                {selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
              </div>
              :
              <Auth/>
        }
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

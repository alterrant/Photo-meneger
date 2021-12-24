import './App.css';
import {connect} from "react-redux";
import {initialize} from "./redux/initialiseApp"
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import React from "react";

function App() {

  return (
      <div className='main-wrapper'>
        <Header/>
        <Main/>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInit: state.initialiseApp.isInitialized
  }
}

export default connect(mapStateToProps, {initialize})(App);

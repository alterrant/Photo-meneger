import './app.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import React from "react";

function App() {

  return (
      <div className='main-wrapper'>
        <Header/>
        <Main/>
      </div>
  );
}

export default App;
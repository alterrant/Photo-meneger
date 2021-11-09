import './App.css';
import UserTitile from "./Components/UserTitile/UserTitile";
import {PhotoLoader} from "./Components/PhotoLoader/PhotoLoader";
import {Photos} from "./Components/Photos/Photos";
import {SelectedPhoto} from "./Components/SelectedPhoto/SelectedPhoto";
import {useState} from "react";

// TODO make personalise pictures and h1 description

function App() {

  let [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
      <div className='main-wrapper'>
        <UserTitile />
        <PhotoLoader fill={"#8A2BE2"} stroke={"#8A2BE2"}/>
        <Photos setSelectedPhoto={setSelectedPhoto}/>
        {selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
      </div>
  );
}

export default App;

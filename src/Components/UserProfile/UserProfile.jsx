import UserTitile from "../Main/UserTitile/UserTitile";
import {PhotoLoader} from "../PhotoLoader/PhotoLoader";
import Photos from "../Photos/Photos";
import {SelectedPhoto} from "../SelectedPhoto/SelectedPhoto";
import {useState} from "react";

const UserPhotos = () => {

  let [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
      <>
          <UserTitile/>
          <PhotoLoader fill={"#8A2BE2"} stroke={"#8A2BE2"}/>
          <Photos setSelectedPhoto={setSelectedPhoto}/>
          {selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}

      </>
  )
}

export default UserPhotos;
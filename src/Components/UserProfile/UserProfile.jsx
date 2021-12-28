import UserTitile from "../Main/UserTitile/UserTitile";
import {PhotoLoader} from "../PhotoLoader/PhotoLoader";
import Photos from "../Photos/Photos";
import {SelectedPhoto} from "../SelectedPhoto/SelectedPhoto";
import {useState} from "react";

const UserPhotos = ({selectedPhoto}) => {

  return (
      <>
          <UserTitile/>
          <PhotoLoader fill={"#8A2BE2"} stroke={"#8A2BE2"}/>
          <Photos setSelectedPhoto={selectedPhoto.setSelectedPhoto}/>
          {selectedPhoto.selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto.selectedPhoto} setSelectedPhoto={selectedPhoto.setSelectedPhoto}/>}

      </>
  )
}

export default UserPhotos;
import {useFirestoreGetAllImages} from "../../hooks/useFirestore";
import {Photo} from "../photos/photo/photo";
import React from "react";
import UserTitile from "../main/user-titile/user-titile";
import {SelectedPhoto} from "../selected-photo/selected-photo";

const CommonPhotos = ({selectedPhoto}: any) => {
  const isOnePhoto = 'one-photo-grid';
  const isTwoPhoto = 'two-photo-grid';
  let styleWrapperPhotos;

  const [commonPhotos] = useFirestoreGetAllImages();

  switch (commonPhotos && commonPhotos.length) {

    case 1:
      styleWrapperPhotos = isOnePhoto;
      break

    case 2:
      styleWrapperPhotos = isTwoPhoto;
      break

    default:
      styleWrapperPhotos = 'photos-wrapper';
      break
  }

  return (
      <>
        <UserTitile user={"Common"}/>
        <div className="common-photo-wrapper">
          <ul className={styleWrapperPhotos}>
            <Photo setSelectedPhoto={selectedPhoto.setSelectedPhoto} photos={commonPhotos}/>
          </ul>
        </div>
        {selectedPhoto.selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto.selectedPhoto} setSelectedPhoto={selectedPhoto.setSelectedPhoto}/>}
      </>
  )
}

export default CommonPhotos;
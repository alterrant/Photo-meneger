import React from "react";
import {Photo} from "./photo/photo";
import {useFirestoreGetUserImages} from "../../hooks/useFirestore";


const Photos = (props) => {
  const isOnePhoto = 'one-photo-grid';
  const isTwoPhoto = 'two-photo-grid';
  let styleWrapperPhotos;

  const [userPhotos] = useFirestoreGetUserImages();

    switch (userPhotos && userPhotos.length) {

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
      <div>
        <ul className={styleWrapperPhotos}>
          <Photo {...props} photos={userPhotos}/>
        </ul>
      </div>
  )
}

export default Photos;
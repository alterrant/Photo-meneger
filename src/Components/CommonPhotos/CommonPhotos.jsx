import {useFirestoreGetAllImages} from "../../hooks/useFirestore";
import {Photo} from "../Photos/Photo/Photo";
import React from "react";
import UserTitile from "../Main/UserTitile/UserTitile";

const CommonPhotos = () => {
  const isOnePhoto = 'one-photo-grid';
  const isTwoPhoto = 'two-photo-grid';
  let styleWrapperPhotos = '';

  const [userPhotos] = useFirestoreGetAllImages();

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
      <>
        <UserTitile user={"Common"}/>
        <div className="ololo">
          <ul className={styleWrapperPhotos}>
            <Photo doc={userPhotos}/>
          </ul>
        </div>
      </>
  )
}

export default CommonPhotos;
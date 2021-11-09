import photosStyles from './Photos.module.css'
import React from "react";
import {Photo} from "./Photo/Photo";
import {useFirestore} from "../../hooks/useFirestore";


export const Photos = (props) => {
  const isOnePhoto = 'one-photo-grid';
  const isTwoPhoto = 'two-photo-grid';
  let styleWrapperPhotos = '';

  const [doc] = useFirestore('user1');

    switch (doc && doc.length) {

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
          <Photo {...props} doc={doc}/>
        </ul>
      </div>
  )
}
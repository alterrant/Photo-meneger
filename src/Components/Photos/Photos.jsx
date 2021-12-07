import React from "react";
import {Photo} from "./Photo/Photo";
import {connect} from "react-redux";
import {useFirestoreUserImages} from "../../hooks/useFirestore";


const Photos = (props) => {
  const isOnePhoto = 'one-photo-grid';
  const isTwoPhoto = 'two-photo-grid';
  let styleWrapperPhotos = '';

  const [userPhotos] = useFirestoreUserImages(props.authUserId)

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
          <Photo {...props} doc={userPhotos}/>
        </ul>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authUserId: state.auth.authUserProfile.uid,
    userPhotos: state.photoStorage.authUserPhotos,
    commonPhotos: state.photoStorage.commonPhotos
  }
}

export default connect(mapStateToProps)(Photos);
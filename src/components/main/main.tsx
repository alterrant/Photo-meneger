import UserPhotos from "../user-profile/user-profile";
import CommonPhotos from "../common-photos/common-photos";
import SwitchPhotos from "../header/switch-photos";
import {useState} from "react";
import {useAppSelector} from "../../hooks";

const Main = () => {

  const isLookingMyPhotos = useAppSelector(state => state.photoStorage.isLookingMyPhotos)
  let [selectedPhoto, setSelectedPhoto] = useState(null);
  const selectPhoto = {selectedPhoto, setSelectedPhoto};

  return (
      <>
        <SwitchPhotos/>
        {isLookingMyPhotos ?
            <UserPhotos selectedPhoto={selectPhoto}/>
            :
            <CommonPhotos selectedPhoto={selectPhoto}/>}
      </>
  )
}

export default Main;
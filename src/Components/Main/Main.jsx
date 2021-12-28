import UserPhotos from "../UserProfile/UserProfile";
import {useSelector} from "react-redux";
import CommonPhotos from "../CommonPhotos/CommonPhotos";
import SwitchPhotos from "../Header/SwitchPhotos";
import {useState} from "react";

const Main = () => {

  const isLookingMyPhotos = useSelector(state => state.photoStorage.isLookingMyPhotos)
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
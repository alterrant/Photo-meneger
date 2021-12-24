import UserPhotos from "../UserProfile/UserProfile";
import {useSelector} from "react-redux";
import CommonPhotos from "../CommonPhotos/CommonPhotos";
import SwitchPhotos from "../Header/SwitchPhotos";

const Main = () => {

  const isLookingMyPhotos = useSelector(state => state.photoStorage.isLookingMyPhotos)

  return (
      <>
        <SwitchPhotos/>
        {isLookingMyPhotos ? <UserPhotos/> : <CommonPhotos/>}
      </>
  )
}

export default Main;
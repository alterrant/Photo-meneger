import {CloseSvg} from "../../assets/svg/close";
import {connect} from "react-redux";
import {deletePhoto} from "../../../store/photo-storage";
import {useAppSelector} from "../../../hooks";

const CloseSvgContainer = ({imageName, imageFirebaseId, deletePhoto}: any) => {
    const userId = useAppSelector(state => state.auth.authUserProfile.uid);

  const handleDeletePhoto = () => {
    deletePhoto({imageName, imageFirebaseId, userId})
  }

  return (
      <div onClick={() => handleDeletePhoto()}>
        <CloseSvg />
      </div>
  )
}


export default connect(null, {deletePhoto})(CloseSvgContainer)
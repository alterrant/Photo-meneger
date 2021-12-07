import {CloseSvg} from "../../assets/SVG/Close";
import {connect} from "react-redux";
import {deletePhoto} from "../../../redux/photoStorage";

const CloseSvgContainer = ({imageName, imageFirebaseId, userId, deletePhoto}) => {

  const handleDeletePhoto = () => {
    deletePhoto({imageName, imageFirebaseId, userId})
  }

  return (
      <div onClick={() => handleDeletePhoto()}>
        <CloseSvg />
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.authUserProfile.uid
  }
}

export default connect(mapStateToProps, {deletePhoto})(CloseSvgContainer)
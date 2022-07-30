import Switch from "../common/switch/switch";
import {useDispatch, useSelector} from "react-redux";
import {setStatusLookingPhotos} from "../../redux/photo-storage";

const SwitchPhotos = () => {

  const dispatch = useDispatch();
  const isLookingMyPhotos = useSelector((state) => state.photoStorage.isLookingMyPhotos);

  return (
      <div className="switchPhotosWrapper">
        <Switch
            isOn={isLookingMyPhotos}
            onColor="#7366bd"
            handleToggle={() => dispatch(setStatusLookingPhotos())}
        />
        <p className="switchPhotosLabel">{isLookingMyPhotos ? "Swipe to view common pictures" : "Swipe to view my pictures"}</p>
      </div>
  )
}

export default SwitchPhotos;
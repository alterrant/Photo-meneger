import Switch from "../common/switch/switch";
import {setStatusLookingPhotos} from "../../store/photo-storage";
import {useAppDispatch, useAppSelector} from "../../hooks";

const SwitchPhotos = () => {

  const dispatch = useAppDispatch();
  const isLookingMyPhotos = useAppSelector((state) => state.photoStorage.isLookingMyPhotos);

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
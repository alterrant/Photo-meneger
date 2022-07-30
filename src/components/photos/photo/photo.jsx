import {motion} from "framer-motion";
import CloseSvgContainer from "./close-svg-container";
import {useSelector} from "react-redux";

export const Photo = ({setSelectedPhoto, photos}) => {

  const isLookingMyPhotos = useSelector(state => state.photoStorage.isLookingMyPhotos);

  const photoLists = photos.map(item => {

    return <motion.li
        className='image-wrapper'
        key={item.id}
        layout
        transition={{duration: 0.275}}
        whileHover={{
          opacity: 1,
          boxShadow: `8px 8px 15px 3px rgba(128,0,128,0.5)`
        }}
    >
      {isLookingMyPhotos && <CloseSvgContainer imageName={item.name} imageFirebaseId={item.id}/>}
      <img onClick={() => setSelectedPhoto(item.imageUrl)}
           src={item.imageUrl}
           alt="imageFromBase"/>
    </motion.li>
  })
  return (
      <>
        {photoLists}
      </>
  )
}
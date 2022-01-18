import {motion} from "framer-motion";
import CloseSvgContainer from "./CloseSvgContainer";
import {useSelector} from "react-redux";

export const Photo = ({setSelectedPhoto, doc}) => {

  const isLookingMyPhotos = useSelector(state => state.photoStorage.isLookingMyPhotos);

  const photo = doc && doc
      .sort((a, b) => {
        if (b.addedTime && a.addedTime) return b.addedTime.seconds - a.addedTime.seconds
      })
      .map(item => {

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
          <img onClick={() => setSelectedPhoto(item.imageUrl)} src={item.imageUrl} alt="imageFromBase"/></motion.li>
      })
  return (
      <>
        {photo}
      </>
  )
}
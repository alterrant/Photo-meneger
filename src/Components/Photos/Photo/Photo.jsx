import {useFirestore} from "../../../hooks/useFirestore";
import {motion} from "framer-motion";
import {CloseSvg} from "../../assets/SVG/Close";

export const Photo = ({setSelectedPhoto, doc}) => {

  const Photo = doc && doc
      .sort((a, b) => {
        if (b.addedTime && a.addedTime) return b.addedTime.seconds - a.addedTime.seconds
      })
      .map(item => {
        debugger
        return <motion.li
            className='image-wrapper'
            key={item.id}
            layout
            transition={{duration: 0.275}}
            whileHover={{
              opacity: 1,
              boxShadow: '0 0 8px rgba(128,0,128,0.5)'
            }}
        >
          <CloseSvg fileName={item.name} imageId={item.id}/>
          {/*<div className='delete-picture'>CloseSvg</div>*/}
          {/*<div className='delete-picture close'>CloseSvg</div>*/}
          <img onClick={() => setSelectedPhoto(item.imageUrl)} src={item.imageUrl} alt="imageFromBase"/></motion.li>
      })
  return (
      <>
        {Photo}
      </>
  )
}


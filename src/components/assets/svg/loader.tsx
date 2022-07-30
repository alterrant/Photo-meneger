import {motion, MotionConfig} from "framer-motion"
import {useState} from "react";

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export const SVGLoader = ({width = "24px", height = "24px", fill = "rgb(102,102,255)"}) => {

  const [isHovered, setHovered] = useState("rgb(102,102,255)");
  const [is, setered] = useState(false);

  return (
      <MotionConfig transition={{duration: 0.2}}>
        <motion.svg width={width} height={height}
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2}}
                    onHoverStart={e => {
                      setHovered("#ad78e2");
                      setered(true)
                    }
                    }
                    onHoverEnd={e => {
                      setHovered("rgb(102,102,255)");
                      setered(false)
                    }}
                    version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512">
          <motion.path animate={{fill: isHovered}}
                       d="M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,460.2
                c-112.6,0-204.2-91.6-204.2-204.2S143.4,51.8,256,51.8S460.2,143.4,460.2,256S368.6,460.2,256,460.2z"
                       fill="rgb(102,102,255)"/>

          <motion.path animate={{fill: isHovered}}

                       d="m357.6,235.6h-81.2v-81.2c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v81.2h-81.2c-11.3,
            0-20.4,9.1-20.4,20.4s9.1,20.4 20.4,20.4h81.2v81.2c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-81.2h81.2c11.3,0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4z"
                       fill="rgb(102,102,255)"/>

        </motion.svg>
      </MotionConfig>
  )
}
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {connect} from "react-redux";
import {addNewPhoto} from "../../../store/photo-storage";
import {useAppSelector} from "../../../hooks";

const ProgressBar = ({file, setFile, addNewPhoto}: any) => {

  const userId = useAppSelector(state => state.auth.authUserProfile.uid);

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    addNewPhoto({userId, file, setProgress, setError, setUrl});
  }, [file])

  useEffect(() => {
    if (url) setFile(null)
  }, [url])

  return (<motion.div className="progress-bar"
                      initial={{width: 0}}
                      animate={{width: progress + '%'}}></motion.div>
  )
}

export default connect(null, {addNewPhoto})(ProgressBar);
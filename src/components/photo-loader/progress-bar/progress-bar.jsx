import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {connect} from "react-redux";
import {addNewPhoto} from "../../../redux/photo-storage";

const ProgressBar = ({file, setFile, userId, addNewPhoto}) => {

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

const mapStateToProps = (state) => {
  return {
    userId: state.auth.authUserProfile.uid
  }
}

export default connect(mapStateToProps, {addNewPhoto})(ProgressBar);
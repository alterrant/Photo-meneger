import {projectFirestore} from "../firebase/config";
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore"
import {useDispatch} from "react-redux";
import {setStatusLoadingPhoto} from "../redux/photoStorage";

export const useFirestoreUserImages = (authUserId) => {
  const [userImagesUrl, setUserImagesUrl] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatusLoadingPhoto(true));

    const unsubscribe = onSnapshot(collection(projectFirestore, `user_${authUserId}`),
        (querySnapshot) => {
          const allImagesUrl = [];
          querySnapshot.forEach((item) => {
            allImagesUrl.push({id: item.id, ...item.data()})
          })
          setUserImagesUrl(allImagesUrl);
        });

    return () => unsubscribe();
  }, [])

  dispatch(setStatusLoadingPhoto(false));

  return [userImagesUrl]
}
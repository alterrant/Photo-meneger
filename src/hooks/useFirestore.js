import {projectFirestore} from "../firebase/config";
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore"
import {useDispatch, useSelector} from "react-redux";
import {getCommonPhotos, setStatusLoadingPhoto} from "../redux/photoStorage";

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

//TODO: рефактор, повтор кода
export const useFirestoreAllImages = () => {
  /*const [allImagesUrl, setAllImagesUrl] = useState([]);*/

  const dispatch = useDispatch();
  const commonPhotos = useSelector(state => state.photoStorage.commonPhotos);

  useEffect(() => {
   /* dispatch(setStatusLoadingPhoto(true));*/

    const unsubscribe = onSnapshot(collection(projectFirestore, `common_photos`),
        (querySnapshot) => {
          const allImagesUrl = [];
          querySnapshot.forEach((item) => {
            allImagesUrl.push({id: item.id, ...item.data()})
          })
          dispatch(getCommonPhotos(allImagesUrl))
          /*setAllImagesUrl(allImagesUrl);*/
        });

    return () => unsubscribe();
  }, [])

  /*dispatch(setStatusLoadingPhoto(false));*/

  return [commonPhotos];
  /*return [allImagesUrl]*/
}
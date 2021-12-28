import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  subscribeCommonPhotos,
  subscribeUserPhotos,
  unsubscribeCommonPhotos,
  unsubscribeUserPhotos
} from "../redux/photoStorage";

export const useFirestoreGetUserImages = () => {

  const dispatch = useDispatch();
  const userPhotos = useSelector(state => state.photoStorage.userPhotos);
  const authUserId = useSelector(state => state.auth.authUserProfile.uid);

  const [urlImages, setUrlImages] = useState([]);
  const user = `user_${authUserId}`

  useEffect(() => {
    dispatch(subscribeUserPhotos(setUrlImages, urlImages, user));
    return () => dispatch(unsubscribeUserPhotos(user));
  }, [urlImages]);

  return [userPhotos];
}

export const useFirestoreGetAllImages = () => {

  const dispatch = useDispatch();
  const commonPhotos = useSelector(state => state.photoStorage.commonPhotos);
  const [urlImages, setUrlImages] = useState([]);

  useEffect(() => {
    dispatch(subscribeCommonPhotos(setUrlImages, urlImages));
    return () => dispatch(unsubscribeCommonPhotos());
  }, [urlImages]);

  return [commonPhotos]
}
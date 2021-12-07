import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {projectFirestore, storage} from '../firebase/config';
import {addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp} from "firebase/firestore";


export const addUserPhoto = ({userId, file, setProgress, setError, setUrl}) => {
  const storageRef = ref(storage, `user_${userId}`);
  const storageNewRef = ref(storageRef, file.name)
  const timestamp = serverTimestamp();

  uploadBytesResumable(storageNewRef, file).on('state_changed', (snap) => {
    //записываем фото в fireStore
    let progress = (snap.bytesTransferred / snap.totalBytes) * 100;

    setProgress(progress);
    //проверяем на ошибки при записи
  }, (err) => {

    setError(err);
    //выполняем при завершении
  }, async () => {

    const url = await getDownloadURL(storageNewRef);

    setUrl(url);
    //запись url в fireDataBase
    await addDoc(collection(projectFirestore, `user_${userId}`), {
      name: file.name,
      imageUrl: url,
      addedTime: timestamp,
    });
  })
}

export const deleteUserPhoto = ({userId, imageName, imageFirebaseId}) => {

  const userPhotosRef = ref(storage, `user_${userId}/${imageName}`)
//удаляем из fireStore
  deleteObject(userPhotosRef).then(() => {
    console.log("Photo has been deleted: ")
  }).catch((error) => {
    console.log("Error deleting photo: ", error)
  });
//удаляем из fireBase
  deleteDoc(doc(projectFirestore, `user_${userId}`, `${imageFirebaseId}`));
}

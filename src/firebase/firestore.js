import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {projectFirestore, storage} from '../firebase/config';
import {addDoc, setDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp} from "firebase/firestore";


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
    //запись свойств файла и url в fireDataBase
    const dataFile = {
      addedTime: timestamp,
      name: file.name,
      imageUrl: url,
    }
    //записываем в профиль пользователя и запоминаем автосгенерированное id коллекции
    const userPhotoCollection = await addDoc(collection(projectFirestore, `user_${userId}`), dataFile);
    const imageUserFirebaseId = userPhotoCollection.id;
    //записываем в общие фото
    await setDoc(doc(projectFirestore, `common_photos`, imageUserFirebaseId), dataFile);
  })

}

export const deletePhotos = ({userId, imageName, imageFirebaseId}) => {

  deleteUserPhoto({userId, imageName, imageFirebaseId});
  deleteCommonPhoto({imageFirebaseId});
}

const deleteUserPhoto = ({userId, imageName, imageFirebaseId}) => {
  const userPhotosRef = ref(storage, `user_${userId}/${imageName}`)
//удаляем из fireStore
  deleteObject(userPhotosRef).then(() => {
    console.log("Photo has been deleted: ")
  }).catch((error) => {
    console.log("Error deleting photo: ", error)
  });
//удаляем ссылку на файл из fireBase юзера
  deleteDoc(doc(projectFirestore, `user_${userId}`, `${imageFirebaseId}`));
}
const deleteCommonPhoto = ({imageFirebaseId}) => {
//удаляем ссылку на файл из общей базы картинок в fireBase
  deleteDoc(doc(projectFirestore, `common_photos`, `${imageFirebaseId}`));
}

import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {projectFirestore, storage} from '../firebase/config';
import {addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc} from "firebase/firestore";


export const addUserPhoto = async ({userId, file, setProgress, setError, setUrl}) => {
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
  return 'newPhotoAdded'
}

export const deletePhotos = async ({userId, imageName, imageFirebaseId}) => {
  await deleteUserPhoto({userId, imageName, imageFirebaseId});
  await deleteCommonPhoto({imageFirebaseId});

  return 'delettingPhotoSuccess'
}

const deleteUserPhoto = ({userId, imageName, imageFirebaseId}) => {
  const userPhotosRef = ref(storage, `user_${userId}/${imageName}`)
//удаляем из fireStore
  deleteObject(userPhotosRef).then(() => {
    console.log("photo has been deleted: ")
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

export const snapshotCommonPhotos = async (funcGoal, setUrlImages, urlImages) => {
  //делаем снимок и подписываемся на изменения в коллекции "common_photos"
  onSnapshot(collection(projectFirestore, `common_photos`),
      (querySnapshot) => {
        const allImagesUrl = [];
        querySnapshot.forEach((item) => {
          allImagesUrl.push({id: item.id, ...item.data()})
        })
        if (funcGoal === 'subscribe') {
          const isEqualPhotos = allImagesUrl.length !== urlImages.length;
          if (isEqualPhotos) setUrlImages(allImagesUrl);
        }
      })
  return 'commonPhotosSnapshotSuccess';
}

export const snapshotUserPhotos = async (funcGoal, user, setUrlImages, urlImages) => {
  onSnapshot(collection(projectFirestore, user),
      (querySnapshot) => {
        const allImagesUrl = [];
        querySnapshot.forEach((item) => {
          allImagesUrl.push({id: item.id, ...item.data()})
        })
        if (funcGoal === 'subscribe') {
          const isEqualPhotos = allImagesUrl.length !== urlImages.length;
          if (isEqualPhotos) setUrlImages(allImagesUrl);
        }
      })
  return 'userPhotosSnapshotSuccess'
}

export const sortAndSerializePhotos = (photosArray) => {
  const serializedPhotos = serializeSnapshotPhotos(photosArray);
  return sortPhotos(serializedPhotos);

};

const serializeSnapshotPhotos = (nonSerializePhotos) => {
  return [...nonSerializePhotos].map(item => {
    return {...item, addedTime: {...item.addedTime}};
  });
}
const sortPhotos = (photos) => {
  return photos.sort((a, b) => {
    if (b.addedTime && a.addedTime) return b.addedTime.seconds - a.addedTime.seconds;
  })
}
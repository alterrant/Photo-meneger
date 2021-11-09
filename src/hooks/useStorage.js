import {useEffect, useState} from "react";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import {projectFirestore, storage} from '../firebase/config';
import {setDoc, doc, addDoc, collection, serverTimestamp} from "firebase/firestore";

const useStorage = (file) => {
//user зафиксирован, нужно показывать определённого пользователя
  const user = 'user1';

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, user);
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
        //вместо user1 использовать реальных юзеров
      await addDoc(collection(projectFirestore, "user1"), {
        name: file.name,
        imageUrl: url,
        addedTime: timestamp,
      });
    });

  }, [file]);

  return {progress, url, error}
}

export default useStorage;
import {projectFirestore} from "../firebase/config";
import {useEffect, useState} from "react";
import {onSnapshot, query, collection, doc} from "firebase/firestore"

export const useFirestore = (props) => {
  const [userImagesUrl, setUserImagesUrl] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(projectFirestore, props),
        (querySnapshot) => {
          const allImagesUrl = [];
          querySnapshot.forEach((item) => {
            allImagesUrl.push({id: item.id, ...item.data()})
          })
          setUserImagesUrl(allImagesUrl);
        })

    return () => unsubscribe();
  }, [props])

  return [userImagesUrl]
}
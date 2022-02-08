import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useFirecollection = (collection) => {
  const [contents, setContents] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc);
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setContents(results);
        setErr(null);
      },
      (error) => {
        console.log(error);
        setErr("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection]);

  return { contents, err };
};

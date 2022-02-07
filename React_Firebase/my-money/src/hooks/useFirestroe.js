import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  // 재사용 성을 위해서 컬렉션 하드 코딩 x
  //   나중에 article이 될 수도, 다른 것이 될 수도
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //   collection ref
  const ref = projectFirestore.collection(collection); // 파라미터로 받은 것

  // ADD
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createTimestamp = timestamp.fromDate(new Date()); // 추가하려는 시간
      const addedDocument = await ref.add({ ...doc, createTimestamp });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR" });
    }
  };
  // Delete
  const deleteDocument = (id) => {
    // 파이어스토어에서는 삭제 시 id가 필요
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument };
};

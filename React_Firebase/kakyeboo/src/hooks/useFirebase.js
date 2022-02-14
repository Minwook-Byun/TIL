import { useReducer, useState } from "react";
import { projectFirestore, projectTimeStamp } from "../firebase/config";

const initState = {
  success: null,
  isPending: false,
  error: null,
  document: null,
};
// ReferenceError: Cannot access 'steps' before initialization 얘가 위에 있어야 한다
// https://stackoverflow.com/questions/67875301/referenceerror-cannot-access-steps-before-initialization
const firebaseReducer = (state, action) => {
  //   const initState = { 요 state를 변경해주는 것!
  //     success: null,
  //     isPending: false,
  //     error: null,
  //     document: null,
  //   };
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: true };
    case "ADD_CONTENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETE_CONTENT":
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
      return state; //(변화 없음)
  }
};

//  refact : collection을 파라미터로 받으면 재사용성이 올라간다
export const useFirebase = (collection) => {
  // 파이어베이스로부터 응답을 받는 것이므로 state->res로 변수명 변경
  const [res, dispatch] = useReducer(firebaseReducer, initState);

  // R, 콜렛션 선언
  const ref = projectFirestore.collection(collection);

  // U, 업데이트
  const addContent = async (content) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createTimestamp = projectTimeStamp.fromDate(new Date());
      const addContent = await ref.add({ ...content, createTimestamp }); //timestamp 추가
      dispatch({ type: "ADD_CONTENT", payload: addContent });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    } finally {
      console.log("콘텐츠 업데이트 실행");
    }
  };

  // D, 삭제
  const deleteContent = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      console.log(ref);
      console.log(ref.doc(id));
      await ref.doc(id).delete();
      dispatch({ type: "DELETE_CONTENT", payload: deleteContent });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: "ERROR", payload: err.message });
    } finally {
      console.log("콘텐츠 삭제 실행");
    }
  };

  return { res, addContent, deleteContent };
};

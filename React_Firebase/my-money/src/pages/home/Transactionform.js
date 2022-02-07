import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestroe";

const Transactionform = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transaction");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid, //현재 로그인한 사람의 id
      name,
      amount,
    });
  };

  return (
    <>
      <h3> 거래 내역 추가하기 </h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span> 거래 내역 : </span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          ></input>
        </label>

        <label>
          <span> 소비 : </span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            required
            value={amount}
          ></input>
        </label>

        <button> 추가하기 </button>
      </form>
    </>
  );
};

export default Transactionform;

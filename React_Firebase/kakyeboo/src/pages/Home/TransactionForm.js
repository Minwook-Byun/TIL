import { useState } from "react";
import { useFirebase } from "../../hooks/useFirebase";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const { res, addContent, deleteContent } = useFirebase("transaction");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContent({
      name,
      amount,
    });
    if (res.success) {
      setName("");
      setAmount("");
    }
    setMessage('성공적으로 추가되었습니다')
  };

  return (
    <>
      <h3>소비내역 추가하기</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>내역:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>금액:</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>추가</button>
      </form>
    </>
  );
}

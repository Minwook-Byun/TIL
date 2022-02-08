import { useState } from "react";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      amount,
    });
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

import { useFirebase } from "../../hooks/useFirebase";

// styles
import styles from "./Home.module.css";

export default function TransactionList({ contents }) {
  const { deleteContent } = useFirebase("transactions");
  return (
    <ul className={styles.transactions}>
      {contents.map((content) => (
        <li key={content.id}>
          <p className={styles.name}>{content.name}</p>
          <p className={styles.amount}>${content.amount}</p>
          <button onClick={() => deleteContent(content.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

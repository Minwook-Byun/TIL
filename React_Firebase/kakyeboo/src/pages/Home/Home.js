import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirecollection } from "../../hooks/useFirecollection";

// styles
import styles from "./Home.module.css";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const { contents, err } = useFirecollection("transaction");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        💰지름 내역💰
        {err && <p>{err}</p>}
        {contents && <TransactionList contents={contents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}

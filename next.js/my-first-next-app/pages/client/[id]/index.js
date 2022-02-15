import { useRouter } from "next/router";
import { Link } from "next/link";

export default function ClientPage() {
  const clientList = [
    { id: "1", name: "boram" },
    { id: "2", name: "ccccc" },
    { id: "3", name: "bbbbb" },
  ];
  return (
    <ul>
      {clientList.map((client) => (
        <li key={client.id}>
          <Link href={`/client/${client.id}/`}>{client.name}</Link>
        </li>
      ))}
    </ul>
  );
}

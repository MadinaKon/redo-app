import Link from "next/link";
import { introduction, volumes } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes">volumes</Link>
        </li>
      </ul>
    </>
  );
}

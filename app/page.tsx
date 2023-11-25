import Image from "next/image";
import Link from "next/link";
import Product from "./components/Product";

export default function Home() {
  return (
    <main>
      <h1 className="pt-4">hello world</h1>
      <Link href="/users">users</Link>
      <Product />
    </main>
  );
}

import Link from "next/link";
import Product from "./components/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

// method to acess session on server
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="pt-4">
        {session && (
          <span>
            {session.user?.name}
            <Link href="/api/auth/signout" className="ml-3">
              Logout{" "}
            </Link>
          </span>
        )}
      </h1>
      <Link href="/users">users</Link>
      <Product />
    </main>
  );
}

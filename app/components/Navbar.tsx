"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="bg-gray-400 flex space-x-3">
      <Link href="/">home</Link>
      <Link href="/users">Users</Link>
      {status == "loading" && (
        <span className="loading loading-infinity loading-md"></span>
      )}
      {status == "authenticated" && <div>{session.user!.name}</div>}
      {status == "unauthenticated" && (
        <Link href="/api/auth/signin">Signin</Link>
      )}
    </nav>
  );
};

export default Navbar;

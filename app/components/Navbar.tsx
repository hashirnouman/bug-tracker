import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 flex space-x-3">
      <Link href="/">home</Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin" >Signin</Link>
    </nav>
  );
};

export default Navbar;

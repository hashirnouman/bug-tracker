import React from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";
import { Metadata } from "next";
interface Props {
  searchParams: { sortOrder: string };
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-[20px]">
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UsersTable sortOrder={sortOrder} />
    </div>
  );
};
// export const metadata: Metadata = {
//   title: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product",
//   };
// }
export default Users;

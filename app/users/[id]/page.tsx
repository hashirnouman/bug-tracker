import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetails = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetails{id} </div>;
};

export default UserDetails;

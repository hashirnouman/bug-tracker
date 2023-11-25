interface Props {
  params: { photoid: number };
}

const UsersPhotos = ({ params: { photoid } }: Props) => {
  return <div>UsersPhotos{photoid}</div>;
};

export default UsersPhotos;

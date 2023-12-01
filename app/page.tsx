"use client";
// import HeaveComponent from "./components/HeaveComponent";
// import _ from "lodash";
import dynamic from "next/dynamic";
const HeaveComponent = dynamic(() => import("./components/HeaveComponent"), {
  loading: () => <p>Loading</p>,
  ssr: false,
});
// method to acess session on server
export default function Home() {
  // const [show, setShow] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1 className="pt-4">
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
      <Product /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="python"
        fill
        className="object-cover"
        sizes="(max-width:480px)  100vw, (max-width:768px),50vw, 33vw"
        quality={100}
        priority
      /> */}
      <button
        className="btn btn-circle"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const array = [
            {
              name: "c",
            },
            { name: "a" },
            { name: "b" },
          ];
          const result = _.orderBy(array, ["name"]);
          console.log(result);
        }}
      >
        show
      </button>
      {/* {show && <HeaveComponent />} */}
    </main>
  );
}

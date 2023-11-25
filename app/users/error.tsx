"use client";
// this error page is specific for the users route
// these props will be filled by next.js
interface Props {
  error: Error;
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  return (
    <div>
      Error Occured in users
      <button className="btn btn-warning" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default Error;

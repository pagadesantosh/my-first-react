import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>Opps!!</h2>
      <h3>This error page</h3>
      <h4>{err.status + " : " + err.statusText}</h4>
    </>
  );
};

export default Error;

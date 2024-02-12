import { useRouteError } from "react-router-dom";
//https://reactrouter.com/en/main/hooks/use-route-error

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Error : { error.message }</h1>
      <p>{error.status} - {error.statusText}</p>
    </>
  );
};

export default Error
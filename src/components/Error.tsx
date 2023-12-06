import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(typeof error);

  return <h1>This is an error!! Shit!</h1>;
}

export default Error;

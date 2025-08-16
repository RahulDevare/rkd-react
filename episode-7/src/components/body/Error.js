import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error occurred:", error);
  // You can log the error to an error reporting service here
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Please try again later.</p>
      <pre>{error.data}</pre>
      <h2>Error: {error.status} - {error.statusText}</h2>
    </div>
  );
};

export default Error;

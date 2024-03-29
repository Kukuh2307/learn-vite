import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="flex justify-center min-h-screen items-center flex-col"
    >
      <h1 className="font-bold text-9xl">Oops!</h1>
      <p className="my-4 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

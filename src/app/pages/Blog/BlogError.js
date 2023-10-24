import { useRouteError } from "react-router-dom";

export default function BlogError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="py-52 flex flex-col justify-center items-center gap-4"
    >
      <h1>Oops!</h1>
      <p>Sorry, the blog was removed or not found.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}

      <a href="/resources/blogs" className="text-secondary-accent">
        ← Goto Blogs Page
      </a>
    </div>
  );
}

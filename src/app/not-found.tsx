import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not Found</h1>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
}


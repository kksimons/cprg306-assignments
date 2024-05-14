import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-green-600 hover:text-green-300";

  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className={linkStyles} href="./week-2">
        week-2
      </Link>
    </main>
  );
}

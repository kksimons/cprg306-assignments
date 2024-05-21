import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-2">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-2">Week 2 Assignment</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-3">Week 3 Assignment</Link>
      </p>
    </main>
  );
}

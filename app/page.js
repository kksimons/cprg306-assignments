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
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-4/functions">Week 4 Assignment (functions)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-4/counter">Week 4 Assignment (counter)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-4/managed_form">Week 4 Assignment (form)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-4/">Week 4 Assignment</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-5/arrays">Week 5 Assignment (arrays)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-5/contact">Week 5 Assignment (contact)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-5/">Week 5 Assignment</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-6/class-example">Week 6 (class Example)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-6/">Week 6 Assignment</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-7/class-example">Week 7 (class Example)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-7/">Week 7 Assignment</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-8/class-example">Week 8 (class Example)</Link>
      </p>
      <p className="hover:text-red-700 hover:underline">
        <Link href="./week-8/">Week 8 Assignment</Link>
      </p>
    </main>
  );
}

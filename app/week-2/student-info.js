import Link from "next/link";

export default function StudentInfo() {
  const studentName = "Kyle Simons";
  const githubUrl = "https://github.com/kksimons";

  return (
    <div>
      <h2>{studentName}</h2>
      <Link href={githubUrl}>My Github</Link>
    </div>
  );
}

import Link from "next/link";

export default function StudentInfo() {
  const studentName = "Kyle Simons";
  const githubUrl = "https://github.com/kksimons";
  const linkStyles = "underline text-green-600 hover:text-green-300";

  return (
    <div>
      <h2>{studentName}</h2>
      <Link className={linkStyles} href={githubUrl}>
        My Github
      </Link>
    </div>
  );
}

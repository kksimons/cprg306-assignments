import Link from "next/link";

export default function StudentInfo() {
  const studentName = "Kyle Simons";
  const githubUrl = "https://github.com/kksimons";

  const user = { name: "Kyle Simons", git: "https://github.com/kksimons" };

  return (
    <div>
      <h2>{user.name}</h2>
      <Link href={user.git}>My Github</Link>
    </div>
  );
}

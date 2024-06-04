import React from "react";

function Page() {
  function helloWorld(username, dayofWeek) {
    return `Hello World! Welcome back ${username}. Today is ${dayofWeek}`;
  }

  const helloWorld2 = (username, dayofWeek) => {
    return `Hello World! Welcome back ${username}. Today is ${dayofWeek}`;
  };

  const helloWorld3 = (username, dayofWeek) =>
    `Hello World! Welcome back ${username}. Today is ${dayofWeek}`;

  const helloMath = (a, b) => a + b;

  const louder = (textFunc) => {
    const text = textFunc("James", "Friday");
    return `${text.toUpperCase()}!!!!`;
  };

  const multiplyBy = (num1) => (num2) => num1 * num2;

  const multiplyByThree = multiplyBy(3);
  const multiplyByTen = multiplyBy(10);

  return (
    <main>
      <h1>Functions</h1>
      <p>{helloWorld("Alice", "Tuesday")}</p>
      <p>{helloWorld2("Joe", "Wednesday")}</p>
      <p>{helloWorld3("Sue", "Thursday")}</p>
      <p>{helloMath(3, 4)}</p>
      <p>{louder(helloWorld3)}</p>
      <p>{louder(helloWorld2)}</p>
      <p>{multiplyByThree(7)}</p>
      <p>{multiplyByTen(7)}</p>
    </main>
  );
}

export default Page;

import React from "react";

function Page() {
  let emptyArray = [];
  let numbers = [5, 3, 9, 1, 4];
  numbers.push(12);
  numbers.pop();
  // params: starting index, ending index of how many elements you want to remove
  let newArray = numbers.splice(2, 2);

  let doubled = numbers.map((num) => num * 2);

  let lessThanFive = numbers.filter((num) => num < 5);

  let moreNumbers = [6, 7, 8];

  let allNumbers = numbers.concat(moreNumbers);

  //create a defensive copy so we can display allNumbers before it's mutated by sort
  let numbersToBeSorted = [...allNumbers];

  //mutator because you can see it mutates the original allNumbers and sorts both old and new
  //so we give it our defensive copy instead
  let sortedNumbers = numbersToBeSorted.sort((a, b) => a - b);

  //accumulator holds on the previous value
  //if you change the 0 to anything, it will get added at the very end
  let sum = allNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    7
  );

  //takes everything from numbers, adds additional ones, then takes everything from moreNumbers
  let newNumbers = [...numbers, 12, 23, 34, ...moreNumbers];

  let originalStudent = {
    name: "Alice",
    age: 25,
    email: "alice@sait.ca",
  };

  let newStudent = {
    ...originalStudent,
    phone: "123123123",
  };

  //doing this creates a reference rather than a copy!
  //  let studentCopy = originalStudent;
  //now we need to create a brand new instance of the object
  let studentCopy = { ...originalStudent };

  // join puts in the character as the separator
  return (
    <main>
      <p>{numbers}</p>
      <p>{newArray}</p>
      <p>{doubled}</p>
      <p>{doubled.map((num) => `${num},`)}</p>
      <p>{numbers.join(" | ")}</p>
      <p>{lessThanFive.join(", ")}</p>
      <p>{allNumbers.join(", ")}</p>
      <p>{sortedNumbers.join(", ")}</p>
      <p>{allNumbers}</p>
      <p>{sum}</p>
      <p>{newNumbers.join(", ")}</p>
      <p>{JSON.stringify(originalStudent)}</p>
      <p>{JSON.stringify(newStudent)}</p>
    </main>
  );
}

export default Page;

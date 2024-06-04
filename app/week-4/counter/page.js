"use client";
import React, { useState } from "react";
import Counter from "./counter";

function Page() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    let currentCount = counter;
    setCounter(currentCount + 1);
  };

  return (
    <main className="p-10">
      <Counter
        currentCount={counter}
        incrementCountFunction={incrementCounter}
      />
    </main>
  );
}

export default Page;

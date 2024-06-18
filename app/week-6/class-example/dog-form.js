"use client";
import React, { useState } from "react";

export default function DogForm({ closeFormFunc, onCreateDog }) {
  let controlStyles = "block mb-4";
  let inputStyles =
    "block mt-1 p-1 w-full rounded-sm text-black bg-blue-100 focus:bg-white";

  const [dogId, setDogId] = useState(0);
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState(0);

  // we can use an anonymous function inside the onChange itself since we're only using it once
  //  const handleDogIdChange = (event) => setDogId(event.target.value);

  const handleSubmit = (event) => {
    //prevent the default functionality (submission)
    event.preventDefault();
    //create a new dog object to be added to the dog list
    let newDog = {
      id: dogId,
      name: dogName,
      age: dogAge,
    };

    onCreateDog(newDog);
    setDogId(0);
    setDogName("");
    setDogAge(0);
    closeFormFunc();
  };

  return (
    // the /70 at the end of the bg is what handles the opacity
    <div
      onClick={closeFormFunc}
      className="absolute w-full h-full flex items-center justify-center bg-gray-950/70 focus:bg-white"
    >
      <section
        onClick={(event) => event.stopPropagation()}
        className="max-w-md p-8 rounded-lg shadow-md bg-white text-black"
      >
        <h2>Add new dog for adoption</h2>
        <form onSubmit={handleSubmit}>
          <div className={controlStyles}>
            <label>ID:</label>
            <input
              className={inputStyles}
              onChange={(event) => setDogId(event.target.value)}
              value={dogId}
              type="number"
            />
          </div>
          <div className={controlStyles}>
            <label>Name</label>
            <input
              className={inputStyles}
              onChange={(event) => setDogName(event.target.value)}
              value={dogName}
              type="text"
            />
          </div>
          <div className={controlStyles}>
            <label>Age:</label>
            <input
              className={inputStyles}
              onChange={(event) => setDogAge(event.target.value)}
              value={dogAge}
              type="number"
            />
          </div>
          <div className={controlStyles}>
            <button className="w-full py-1 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded">
              Add Dog
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

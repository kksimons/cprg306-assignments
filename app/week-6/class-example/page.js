"use client";
import React, { useState } from "react";
import DogData from "./dogs.json";
import DogList from "./dog-list";
import DogForm from "./dog-form";

function Page() {
  const [dogList, setDogList] = useState(
    //taking props of dog object and spreading them into a brand new object
    DogData.map((dog) => ({ ...dog }))
  );

  const [isDogFormOpen, setDogFormOpen] = useState(false);

  const openDogForm = () => setDogFormOpen(true);
  const closeDogForm = () => setDogFormOpen(false);

  const handleCreateDog = (newDog) => {
    // dogList.push(newDog) won't work, you're trying to mutate state variables directly w/o using setter
    setDogList([...dogList, newDog]);
  };

  return (
    <main>
      {/*modal needs to be in front of everything else (or mess with z-index)*/}
      {isDogFormOpen && (
        <DogForm closeFormFunc={closeDogForm} onCreateDog={handleCreateDog} />
      )}
      <h1 className="mx-1 text-3xl font-bold">Dogs for Adoption</h1>
      <DogList listOfDogs={dogList} />
      <div className="mx-1 my-2">
        <button
          onClick={openDogForm}
          className="py-1 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded"
        >
          Adopt A Dog
        </button>
      </div>
    </main>
  );
}

export default Page;

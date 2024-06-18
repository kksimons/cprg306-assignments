/* eslint-disable react/jsx-key */
import React from "react";
import DogCard from "./dog-card";

export default function Doglist({ listOfDogs }) {
  return (
    <div>
      {listOfDogs.map((dog) => (
        <DogCard dogObj={dog} />
      ))}
    </div>
  );
}

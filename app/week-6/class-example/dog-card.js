import React from "react";

export default function DogCard({ dogObj = {} }) {
  const { id, name, age } = dogObj;

  return (
    <div className="border border-blue-500 bg-blue-800 m-1 p-2 text-white">
      <h3 className="text-xl font-bold">Name: {name}</h3>
      <p>ID: {id}</p>
      <p>Age: {age}</p>
    </div>
  );
}

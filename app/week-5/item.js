import React from 'react';

export default function Item({ item }) {
  const { name, quantity, category } = item;

  //needed to add list-non to the li classname to remove bullet points
  return (
    <div className="bg-gray-100 p-4 m-2 rounded w-fit list-none">
      <li className="list-none">
        <div className="font-bold text-lg capitalize">{name}</div>
        <div className="text-sm">
          Buy {quantity} in {category}
        </div>
      </li>
    </div>
  );
}

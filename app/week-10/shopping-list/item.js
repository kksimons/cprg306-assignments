import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { dbDeleteItem } from "../_services/shopping-list-service";

export default function Item({ item, onSelect, onDelete }) {
  const { name, quantity, category } = item;

  const categoryColors = {
    produce: "bg-green-200",
    bakery: "bg-yellow-200",
    meat: "bg-red-200",
    household: "bg-blue-200",
    dairy: "bg-purple-200",
    "canned goods": "bg-orange-200",
    "dry goods": "bg-pink-200",
    beverages: "bg-indigo-200",
    snacks: "bg-teal-200",
    other: "bg-gray-200",
  };

  return (
    <div
      className={`relative p-4 rounded shadow cursor-pointer ${
        categoryColors[category] || "bg-gray-200"
      } group`}
      onClick={() => onSelect(item)}
    >
      <div className="font-bold text-lg capitalize">{name}</div>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to get meal ideas
      </div>
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
}

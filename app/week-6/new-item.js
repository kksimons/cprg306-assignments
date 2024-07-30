"use client";
import React, { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 m-4 rounded-lg shadow max-w-md mx-auto text-black"
      >
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            required
            onChange={handleName}
            value={name}
            placeholder="Item name"
            className="p-2 rounded-lg font-sans border flex-grow m-1 text-black"
          />
          <input
            type="number"
            required
            min={1}
            max={99}
            onChange={handleQuantity}
            value={quantity}
            className="p-2 rounded-lg font-sans border w-20 m-1 text-black"
          />
        </div>
        <div className="mb-4">
          <select
            onChange={handleCategory}
            value={category}
            className="p-2 rounded-lg font-sans border w-full m-1 text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white px-4 py-2 w-full">
            Add Item
          </button>
        </div>
      </form>
    </main>
  );
}

export default NewItem;

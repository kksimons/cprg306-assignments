"use client";
import React, { useState } from "react";

function NewItem() {
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

    alert(`Added item: ${item.name} 
    \n Quantity: ${item.quantity}
    \n Category: ${item.category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");

    console.log(item);
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
        className="bg-gray-100 p-4 m-4 rounded max-w-md"
      >
        <div className="flex">
          <input
            type="text"
            required
            onChange={handleName}
            value={name}
            placeholder="Item name"
            className="p-2 rounded-lg font-sans border-2 flex-grow m-1"
          />
          <input
            type="number"
            required
            min={1}
            max={99}
            onChange={handleQuantity}
            value={quantity}
            className="p-2 rounded-lg font-sans border-2 w-20 m-1"
          />
        </div>
        <div>
          <select
            onChange={handleCategory}
            value={category}
            className="p-2 rounded-lg font-sans border-2 w-full m-1"
          >
            <option value={"produce"}>Produce</option>
            <option value={"dairy"}>Dairy</option>
            <option value={"bakery"}>Bakery</option>
            <option value={"meat"}>Meat</option>
            <option value={"frozen foods"}>Frozen Foods</option>
            <option value={"canned goods"}>Canned Goods</option>
            <option value={"dry goods"}>Dry Goods</option>
            <option value={"beverages"}>Beverages</option>
            <option value={"snacks"}>Snacks</option>
            <option value={"household"}>Household</option>
            <option value={"other"}>Other</option>
          </select>
        </div>
        <div>
          <button className="bg-blue-400 active:bg-yellow-300 rounded-md text-white px-4 py-2 m-1 w-full">
            +
          </button>
        </div>
      </form>
    </main>
  );
}

export default NewItem;

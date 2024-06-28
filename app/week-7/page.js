'use client';
import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page() {
  const [itemList, setItemList] = useState(
    itemsData.map((item) => ({ ...item }))
  );

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping List</h1>
      <div className="max-w-4xl mx-auto mb-10">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="max-w-6xl mx-auto">
        <ItemList items={itemList} />
      </div>
    </main>
  );
}

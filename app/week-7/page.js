'use client';
import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js"; // Import MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [itemList, setItemList] = useState(
    itemsData.map((item) => ({ ...item }))
  );
  const [selectedItemName, setSelectedItemName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean up the item name for the API
    const cleanedName = item.name
      .split(",")[0]  // Remove quantity and size and then
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDDFF])/g, '');  // Remove emojis
    setSelectedItemName(cleanedName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping List</h1>
      <div className="max-w-4xl mx-auto mb-10">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="max-w-4xl mx-auto">
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
      </div>
      {isModalOpen && <MealIdeas ingredient={selectedItemName} closeModal={closeModal} />}
    </main>
  );
}

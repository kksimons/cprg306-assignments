"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [itemList, setItemList] = useState(
    itemsData.map((item) => ({ ...item }))
  );
  const [selectedItemName, setSelectedItemName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/week-8");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!user) {
    return null; // Prevents flickering of the page before redirection
  }

  return (
    <main className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping List</h1>
      <div className="max-w-4xl mx-auto mb-10">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="max-w-4xl mx-auto">
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
      </div>
      {isModalOpen && (
        <MealIdeas ingredient={selectedItemName} closeModal={closeModal} />
      )}
    </main>
  );
}

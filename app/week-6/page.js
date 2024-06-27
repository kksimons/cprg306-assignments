'use client'
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"
import itemsData from "./items.json"
import { useState } from "react";

export default function Page() {

  const [itemList, setItemList] = useState(
    //taking props of item object and spreading them into a brand new object
    itemsData.map((item) => ({ ...item }))
  );

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold bg-sky-100 p-10">Shopping List</h1>
      <ItemList />
    </main>
  );
}

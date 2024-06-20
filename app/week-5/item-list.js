"use client";
import React, { useState } from "react";
import Item from "./item";
import ItemsData from "./items.json";

export default function ItemList() {
  const [items] = useState(ItemsData);
  let itemsList = ItemsData.map((item) => ({ ...item }));
  let [sortBy, setSortBy] = useState("name");

  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}

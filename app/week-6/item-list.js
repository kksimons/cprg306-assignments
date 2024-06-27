"use client";
import React, { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";

function ItemList() {
  // Deep defensive copy of all data
  let itemsArray = itemsData.map((item) => ({ ...item }));

  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const handleChangeSortBy = (value) => {
    setSortBy(value);
    setGroupByCategory(false); // Reset group by category when sorting is changed
  };

  const handleToggleGroupByCategory = () => {
    setGroupByCategory((prevState) => !prevState);
  };

  // Sorting
  itemsArray = itemsArray.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      // Sorting alphabetically
      let valueA = a[sortBy].toUpperCase();
      let valueB = b[sortBy].toUpperCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    } else {
      // Sorting numerically
      return a[sortBy] - b[sortBy];
    }
  });

  const groupedItems = itemsArray.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedItems = groupByCategory
    ? Object.keys(groupedItems)
      .sort((a, b) => {
        const categoryA = a.toUpperCase();
        const categoryB = b.toUpperCase();
        if (categoryA < categoryB) {
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        return 0;
      })
      .map((category) => ({
        category,
        items: groupedItems[category],
      }))
    : [{ category: "", items: itemsArray }];

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-blue-200 rounded shadow-lg">
        <div className="mr-4">
          <label className="font-semibold mr-2">Sort By:</label>
          <button
            onClick={() => handleChangeSortBy("name")}
            className={`p-2 m-2 border rounded ${sortBy === "name" && !groupByCategory ? "bg-blue-400 text-white" : "bg-white text-black"}`}
          >
            Name
          </button>
          <button
            onClick={() => handleChangeSortBy("category")}
            className={`p-2 m-2 border rounded ${sortBy === "category" && !groupByCategory ? "bg-blue-400 text-white" : "bg-white text-black"}`}
          >
            Category
          </button>
        </div>
        <div>
          <button
            onClick={handleToggleGroupByCategory}
            className={`p-2 m-2 border rounded ${groupByCategory ? "bg-blue-400 text-white" : "bg-white text-black"}`}
          >
            {groupByCategory ? "Ungroup by Category" : "Group by Category"}
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groupByCategory
          ? sortedItems.map(([category, items], index) => (
            <div key={index} className="col-span-3">
              <h2 className="text-2xl font-bold capitalize mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, idx) => (
                  <Item key={idx} item={item} />
                ))}
              </div>
            </div>
          ))
          : sortedItems[0].items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
      </section>
    </div>
  );
}

export default ItemList;
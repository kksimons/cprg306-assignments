"use client";
import React, { useState } from "react";
import Item from "./item";

function ItemList({ items }) {
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
  items = items.sort((a, b) => {
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

  const sortedItems = groupByCategory
    ? Object.entries(items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {})).sort((a, b) => a[0].localeCompare(b[0]))
    : [{ category: '', items }];

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-blue-100 rounded shadow-lg justify-center">
        <div className="mr-4">
          <label className="font-semibold mr-2">Sort By:</label>
          <button
            onClick={() => handleChangeSortBy("name")}
            className={`p-2 m-2 border rounded ${sortBy === "name" && !groupByCategory ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            Name
          </button>
          <button
            onClick={() => handleChangeSortBy("category")}
            className={`p-2 m-2 border rounded ${sortBy === "category" && !groupByCategory ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            Category
          </button>
        </div>
        <div>
          <button
            onClick={handleToggleGroupByCategory}
            className={`p-2 m-2 border rounded ${groupByCategory ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            {groupByCategory ? "Ungroup by Category" : "Group by Category"}
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupByCategory
          ? sortedItems.map(([category, items], index) => (
            <div key={index} className="col-span-3">
              <h2 className="text-2xl font-bold capitalize mb-4 text-blue-700">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

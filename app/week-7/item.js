import React from 'react';

export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  const categoryColors = {
    produce: 'bg-green-200',
    bakery: 'bg-yellow-200',
    meat: 'bg-red-200',
    household: 'bg-blue-200',
    dairy: 'bg-purple-200',
    'canned goods': 'bg-orange-200',
    'dry goods': 'bg-pink-200',
    beverages: 'bg-indigo-200',
    snacks: 'bg-teal-200',
    other: 'bg-gray-200',
  };

  return (
    <div
      className={`p-4 rounded shadow cursor-pointer ${categoryColors[category] || 'bg-gray-200'}`}
      onClick={() => onSelect(item)}
    >
      <div className="font-bold text-lg capitalize">{name}</div>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </div>
  );
}
export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <div className="bg-gray-100 p-4 m-2">
      <li>
        <ul className="font-bold text-lg">{name}</ul>
        <ul className="text-md">
          Buy {quantity} in {category}
        </ul>
      </li>
    </div>
  );
}

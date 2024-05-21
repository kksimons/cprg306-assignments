export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <div className="bg-gray-100 p-4 m-2 rounded w-fit">
      <li>
        <ul className="font-bold text-lg">{name}</ul>
        <ul className="text-sm">
          Buy {quantity} in {category}
        </ul>
      </li>
    </div>
  );
}

import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold bg-sky-100 p-10">Shopping List</h1>
      <ItemList />
    </main>
  );
}

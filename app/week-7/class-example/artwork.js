import Image from "next/image";

export default function Artwork({ artworkObj }) {
  const {
    title,
    primaryImageSmall = "./notfound.png",
    artistDisplayName,
    objectDate,
    department,
  } = artworkObj;

  return (
    <div className="mx-20 my-10 p-5 bg-blue-400 rounded flex flex-col items-center">
      <h3 className="text-lg mb-4">{title}</h3>
      {/*h attribute here to affect size of image*/}
      <div className="w-full h-80 relative mb-4">
        <Image
          src={primaryImageSmall}
          alt="image artwork"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <ul className="text-left w-full max-w-2xl">
        <li>
          <b>Artist: {artistDisplayName}</b>
        </li>
        <li>
          <b>Date: {objectDate}</b>
        </li>
        <li>
          <b>Department: {department}</b>
        </li>
      </ul>
    </div>
  );
}

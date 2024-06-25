import Artwork from "./artwork";
import Gallery from "./gallery";
import SingleArt from "./single-art";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl text-center">Random Art Gallery</h1>
      <h2 className="text-2xl text-center">
        from the Metropolitan Museum of Art
      </h2>
      {/*<SingleArt />*/}
      <Gallery />
    </main>
  );
}

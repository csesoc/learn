import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-blackA-12 h-screen w-full">
      <main className="text-whiteA-12 flex h-full flex-col items-start py-40 px-20">
        <h1 className="text-6xl">Level up your dev skills.</h1>
        <a
          className="text-whiteA-12 font-light italic"
          href="https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24"
        >
          This lovely model was made by Seaform on Sketchfab.
        </a>
      </main>
    </div>
  );
};

export default Home;

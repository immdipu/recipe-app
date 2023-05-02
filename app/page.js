import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full homepage">
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="text-5xl my-8">Explore food from around the world</h1>
        <Link
          href="/types"
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
        >
          List of Cuisines
        </Link>
      </div>
    </main>
  );
}

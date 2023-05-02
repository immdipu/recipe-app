import React from "react";
import Link from "next/link";

const fetchRecipesName = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await res.json();
  return data.meals;
};

const page = async () => {
  const names = await fetchRecipesName();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 server">
      {names.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/types/${item.strArea}`}
            className="server shadow-gray-50 bg-gray-300 capitalize text-center rounded text-2xl py-10 cursor-pointer font-bold hover:bg-blue-500 hover:text-white"
          >
            {item.strArea}
          </Link>
        );
      })}
    </div>
  );
};

export default page;

import React from "react";
import { getAllCategory } from "../json/categories";
const Header = () => {
  const category = getAllCategory();
  return (
    <header>
      <section className="w-screen font-mono">
        <div className=" container mx-auto px-8 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold">
            redpill-UIT
          </a>
          <div className="flex items-center justify-center gap-8 ">
            {category.length > 0 &&
              category.map((item, index) => {
                if (index < 2)
                  return (
                    <a className=" last-of-type:text-blue-500 hover:text-red-500" href={`/category/${item.slugCategory}`} key={index}>
                      {item.category}
                    </a>
                  );
              })}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

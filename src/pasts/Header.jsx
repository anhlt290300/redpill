import React from "react";
import PropTypes from "prop-types";

const Header = ({ categories }) => {
  return (
    <header>
      <section className="w-screen font-mono">
        <div className=" container mx-auto px-8 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold flex items-center gap-3">
            <img
              className="w-10 aspect-square"
              src="https://st.depositphotos.com/38923194/53981/v/450/depositphotos_539814560-stock-illustration-dogecoin-doge-cryptocurrency-isolated-white.jpg"
              alt=""
            />{" "}
            redpill-UIT
          </a>
          <div className="flex items-center justify-center gap-8 ">
            {categories.length > 0 &&
              categories.map((item, index) => {
                if (index < 2)
                  return (
                    <a
                      className=" last-of-type:text-blue-500 hover:text-red-500"
                      href={`/category/${item.slugCategory}-${item.id}`}
                      key={index}
                    >
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

Headers.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Header;

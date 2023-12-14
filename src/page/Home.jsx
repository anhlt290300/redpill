import React from "react";
import { getAllBlog } from "../json/blogs-all";
import { getCategoryById } from "../json/categories";
import NavigationPage from "../component/NavigationPage";

const Home = () => {
  const blogs = getAllBlog(6);
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col bg-white">
        {blogs.length > 0 &&
          blogs.map((item, index) => {
            return (
              <div
                key={index}
                className="px-12 py-14 border-b last:border-b-0 border-black flex flex-col gap-4 text-lg"
              >
                <a
                  href={`/${getCategoryById(item.categoryId)[0].slugCategory}/${
                    item.slugBlog
                  }`}
                  className="text-2xl font-semibold"
                >
                  {item.title}
                </a>
                <a
                  href={`/category/${
                    getCategoryById(item.categoryId)[0].slugCategory
                  }`}
                  className="cursor-pointer hover:text-red-500 text-blue-600"
                >
                  {getCategoryById(item.categoryId)[0].category}
                </a>
                <p
                  className="line-clamp"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <a
                  className=" cursor-pointer hover:text-red-500 text-blue-600"
                  href={`/${getCategoryById(item.categoryId)[0].slugCategory}/${
                    item.slugBlog
                  }`}
                >
                  Read More »
                </a>
              </div>
            );
          })}
      </div>
      <NavigationPage blogs={blogs} />
    </div>
  );
};

export default Home;

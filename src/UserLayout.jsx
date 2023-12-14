import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pasts/Header";
import Footer from "./pasts/Footer";
import { getAllBlog, getBlogById } from "./json/blogs-all";
import { getAllCategory, getCategoryById } from "./json/categories";
import { getCommentByBlogId1 } from "./json/comments-in-blog-id-1";

const UserLayout = () => {
  const recentposts = getAllBlog(5);
  const comments = getCommentByBlogId1();
  const categories = getAllCategory();
  return (
    <div className=" overflow-x-hidden font-mono">
      <Header />
      <div className="w-screen bg-blue-50 py-16 h-fit">
        <div className=" container mx-auto grid grid-cols-3 gap-16 px-8 ">
          <div className=" col-span-2 flex flex-col ">
            <Outlet />
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="flex flex-col justify-start gap-2">
              <p>Search</p>
              <div className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  className="px-2 py-2 w-full rounded border border-black outline-none focus:outline-dotted focus:outline-blue-600 focus:border-0"
                />
                <a
                  href="/search"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded"
                >
                  Search
                </a>
              </div>
            </div>
            {/* recent posts */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Recent Posts</p>
              {recentposts.length > 0 &&
                recentposts.map((item, index) => {
                  return (
                    <a
                      href={`/${
                        getCategoryById(item.categoryId)[0].slugCategory
                      }/${item.slugBlog}`}
                      key={index}
                      className="text-lg text-blue-600 hover:text-red-500"
                    >
                      {item.title}
                    </a>
                  );
                })}
            </div>
            {/* Recent Comments */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Recent Comments</p>
              {comments.length > 0 &&
                comments.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center whitespace-nowrap gap-1"
                    >
                      <p>{item.data.name} on</p>
                      <a
                        href={`/${
                          getCategoryById(
                            getBlogById(item.data.blogId).categoryId
                          )[0].slugCategory
                        }/${getBlogById(item.data.blogId).slugBlog}`}
                        key={index}
                        className="text-lg text-blue-600 hover:text-red-500"
                      >
                        {getBlogById(item.data.blogId).title}
                      </a>
                    </div>
                  );
                })}
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold mb-2">Categories</p>
              {categories.length > 0 &&
                categories.map((item, index) => {
                  return (
                    <a
                      href={`/category/${item.slugCategory}`}
                      key={index}
                      className="text-lg text-blue-600 hover:text-red-500"
                    >
                      {item.category}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;

import React, { useEffect, useState } from "react";
import { getAllBlog, getBlogPage } from "../json/blogs-all";
import NavigationPage from "../component/NavigationPage";
import CardBlog from "../component/CardBlog";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useSearchParams();
  const page = Number(search.get("page"));
  useEffect(() => {
    if (!page) {
      setBlogs(getBlogPage(1, 5));
    } else {
      setBlogs(getBlogPage(page, 5));
    }
  }, [page]);
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col bg-white">
        {blogs.length > 0 &&
          blogs.map((item, index) => {
            return <CardBlog blog={item} key={index} />;
          })}
      </div>
      <NavigationPage
        currentPage={page ? page : 1}
        lastPage={
          getAllBlog().length <= 5
            ? 1
            : getAllBlog().length % 5 > 0
            ? Math.floor(getAllBlog().length / 5) + 1
            : getAllBlog().length / 5
        }
      />
    </div>
  );
};

export default Home;

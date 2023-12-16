import React from "react";
import { getBlogByCategoryId } from "../json/blogs-all";
import CardBlog from "../component/CardBlog";
import NavigationPage from "../component/NavigationPage";
import { useParams, useSearchParams } from "react-router-dom";
import { getCategoryBySlug } from "../json/categories";

const Category = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const blogs = getBlogByCategoryId(category.id);
  const [search, setSearch] = useSearchParams();
  const page = Number(search.get("page"));
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col bg-white ">
        <div className="px-12 py-16 text-3xl font-semibold border-b border-black">
          <p>{category.category}</p>
        </div>
        {blogs.length > 0 &&
          blogs.map((item, index) => {
            return <CardBlog blog={item} key={index} />;
          })}
      </div>
      <NavigationPage
        currentPage={page ? page : 1}
        lastPage={
          blogs.length <= 5
            ? 1
            : blogs.length % 5 > 0
            ? Math.floor(blogs.length / 5) + 1
            : blogs.length / 5
        }
      />
    </div>
  );
};

export default Category;

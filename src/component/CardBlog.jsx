import React from "react";
import PropTypes from "prop-types";
import { getCategoryById } from "../json/categories";
import { getCommentByBlogId1 } from "../json/comments-in-blog-id-1";

const CardBlog = ({blog}) => {
  return (
    <div
      className="px-12 py-14 border-b last:border-b-0 border-black flex flex-col gap-4 text-lg"
    >
      <a
        href={`/${getCategoryById(blog.categoryId)[0].slugCategory}/${
            blog.slugBlog
        }`}
        className="text-2xl font-semibold"
      >
        {blog.title}
      </a>
      <a
        href={`/category/${getCategoryById(blog.categoryId)[0].slugCategory}`}
        className="cursor-pointer hover:text-red-500 text-blue-600"
      >
        {`${
          getCommentByBlogId1(blog.id).length > 0
            ? getCommentByBlogId1(blog.id).length + " Comments"
            : "Leave a Comment"
        } / ${getCategoryById(blog.categoryId)[0].category}`}
      </a>
      <p
        className="line-clamp"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <a
        className=" cursor-pointer hover:text-red-500 text-blue-600"
        href={`/${getCategoryById(blog.categoryId)[0].slugCategory}/${
            blog.slugBlog
        }`}
      >
        Read More »
      </a>
    </div>
  );
};

CardBlog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default CardBlog;

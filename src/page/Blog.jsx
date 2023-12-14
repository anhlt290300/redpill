import React from "react";
import { useLoaderData, useRoutes } from "react-router-dom";
import { getCommentByBlogId1 } from "../json/comments-in-blog-id-1";
import { getCategoryById } from "../json/categories";

const Blog = () => {
  const blog = useLoaderData();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white px-12 py-14 gap-4">
        <h1 className=" font-semibold text-3xl">{blog.title}</h1>
        <p className=" text-blue-500">
          <span
            onClick={() => {
              const comment = document.getElementById("comment");
              if (comment) comment.scrollIntoView({ behavior: "smooth" });
            }}
            className=" cursor-pointer"
          >
            {getCommentByBlogId1(blog.id).length} Comment
          </span>{" "}
          /
          <a
            href={`/category/${
              getCategoryById(blog.categoryId)[0].slugCategory
            }`}
          >
            {" "}
            {getCategoryById(blog.categoryId)[0].category}
          </a>{" "}
          /<span> {blog.dateSubmitted}</span>
        </p>
        <div
          className=" leading-loose content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      <div className="px-16 py-8 ">
        <p
          className="cursor-pointer text-blue-600 hover:-translate-y-1 hover:shadow w-fit px-2 py-1 shadow-black transition-transform duration-200 ease-in-out hover:text-red-500"
          onClick={() => window.history.back()}
        >
          ← Back to previous page
        </p>
      </div>
      {getCommentByBlogId1(blog.id).length > 0 &&
        getCommentByBlogId1(blog.id).map((item, index) => {
          return (
            <div
              id="comment"
              key={index}
              className="flex flex-col px-12 py-14 bg-white mb-8 last:mb-0 justify-start"
            >
              {index === 0 && (
                <h1 className="text-2xl mb-8">
                  {getCommentByBlogId1(blog.id).length} thoughts on "
                  {blog.title}"
                </h1>
              )}
              <div className=" flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-start gap-6">
                  <img
                    src="https://secure.gravatar.com/avatar/7b0c4f46bd52af461738ee0f780de10d?s=50&d=mm&r=g"
                    className=" rounded-full"
                    alt=""
                  />
                  <div className=" flex flex-col text-blue-600">
                    <h3 className=" font-semibold">{item.data.name}</h3>
                    <p>{item.data.commentDate}</p>
                  </div>
                </div>
                <p>{item.data.content}</p>
                <div className="flex justify-end text-blue-600">
                  <button>Reply</button>
                </div>
              </div>
              {item.children.length > 0 &&
                item.children.map((item_, index_) => {
                  return (
                    <div
                      key={index_}
                      className=" flex flex-col gap-4 mt-4 px-8"
                    >
                      <div className="flex items-center justify-start gap-6">
                        <img
                          src="https://secure.gravatar.com/avatar/7b0c4f46bd52af461738ee0f780de10d?s=50&d=mm&r=g"
                          className=" rounded-full"
                          alt=""
                        />
                        <div className=" flex flex-col text-blue-600">
                          <h3 className=" font-semibold">{item_.data.name}</h3>
                          <p>{item_.data.commentDate}</p>
                        </div>
                      </div>
                      <p>{item_.data.content}</p>
                      <div className="flex justify-end text-blue-600">
                        <button>Reply</button>
                      </div>
                      {item_.children.length > 0 &&
                        item_.children.map((item__, index__) => {
                          return (
                            <div
                              key={index__}
                              className=" flex flex-col gap-4 mt-4 px-8"
                            >
                              <div className="flex items-center justify-start gap-6">
                                <img
                                  src="https://secure.gravatar.com/avatar/7b0c4f46bd52af461738ee0f780de10d?s=50&d=mm&r=g"
                                  className=" rounded-full"
                                  alt=""
                                />
                                <div className=" flex flex-col text-blue-600">
                                  <h3 className=" font-semibold">
                                    {item__.data.name}
                                  </h3>
                                  <p>{item__.data.commentDate}</p>
                                </div>
                              </div>
                              <p>{item__.data.content}</p>
                              <div className="flex justify-end text-blue-600">
                                <button>Reply</button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}

      <div className="flex flex-col bg-white px-12 py-14 gap-6">
        <p className="flex flex-col gap-2">
          <span className="text-3xl">Leave a Comment</span>
          <span className=" opacity-80">
            Your email address will not be published. Required fields are marked
            *
          </span>
        </p>
        <textarea
          placeholder="Type here..."
          cols="30"
          rows="10"
          className=" outline-none px-2 py-4 border border-black rounded"
        />
        <div className=" grid grid-cols-3 gap-6">
          <input className="p-2 outline-none rounded border border-black" type="text" placeholder="Name*" />
          <input className="p-2 outline-none rounded border border-black" type="email" placeholder="Email*" />
          <input className="p-2 outline-none rounded border border-black" type="text" placeholder="Website" />
        </div>
        <div className="flex gap-4 items-center whitespace-nowrap tracking-tight">
          <input type="checkbox" />
          <p>
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <button className="px-8 py-2 rounded bg-blue-600 text-center text-white font-semibold w-fit">Post Comment</button>
      </div>
    </div>
  );
};

export default Blog;

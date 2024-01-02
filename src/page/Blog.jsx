import React from "react";
import { useLoaderData } from "react-router-dom";
import { getCategoryById } from "../json/categories";
import CommentBox from "../component/CommentBox";

const Blog = () => {
  const { blog, comment } = useLoaderData();
  const { blogsResponseModel, categoriesResponseModel, totalComment } = blog;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white px-12 py-14 gap-4">
        <h1 className=" font-semibold text-3xl">{blogsResponseModel.title}</h1>
        <p className=" text-blue-500">
          <span
            onClick={() => {
              const comment = document.getElementById("comment");
              if (comment) {
                comment.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className=" cursor-pointer"
          >
            {totalComment} Comment
          </span>{" "}
          /
          <a
            href={`/category/${categoriesResponseModel.slugCategory}-${categoriesResponseModel.id}`}
          >
            {" "}
            {categoriesResponseModel.category}
          </a>{" "}
          /<span> {blogsResponseModel.dateSubmitted}</span>
        </p>
        <div
          className=" leading-loose content"
          dangerouslySetInnerHTML={{ __html: blogsResponseModel.content }}
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
      <p id="comment"></p>
      {totalComment > 0 &&
        comment.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col px-12 py-14 bg-white mb-8 last:mb-0 justify-start"
            >
              {index === 0 && (
                <h1 className="text-2xl mb-8">
                  {totalComment} thoughts on "{blogsResponseModel.title}"
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

      <CommentBox blogId={blogsResponseModel.id} />
    </div>
  );
};

export default Blog;

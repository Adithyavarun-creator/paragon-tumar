import React from "react";
import "./Blog.css";
import Title from "../Title/Title";
import { blogDatas } from "../../datas/blogDatas";

const Blog = () => {
  return (
    <>
      <Title title="From the Blog" />
      <div className="blogContainer">
        {blogDatas.map((blog) => (
          <div className="blogBox" key={blog.id}>
            <div>
              <img className="blogCoverimage" src={blog.coverImage} />
            </div>
            <div>
              <span>{blog.title}</span>
            </div>
            <div>
              <article>{blog.description.slice(0, 100)}...</article>
            </div>
            <div className="blogDetails">
              <span>By: {blog.author}</span>
              <span>In: {blog.in}</span>
              <span>{blog.dated}</span>
            </div>
            <div className="border-bottom"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

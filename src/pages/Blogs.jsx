import React from "react";
import blog from "../components/assets/blog.png";
import BlogPost from "../components/BlogPost";

const Blogs = () => {
  return (
    <div className="mt-4">
      <div>
        <img src={blog} alt="tree" />
      </div>
      <div className="px-6 md:px-8 lg:px-10 py-6 md:8 lg:py-10">
        <h1 className="text-xl md:text-2xl font-bold">All available post</h1>
        <div className="grid grid-cols-1 gap-2 md:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

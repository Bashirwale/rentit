import React from "react";
import blogpost from "../components/assets/blogpost.png";

const BlogPost = () => {
  return (
    <div className="border rounded-md p-3 w-full">
      <div className="w-full">
        <img src={blogpost} alt="penthouse" className="w-full" />
      </div>
      <div className="flex items-center gap-1 py-2 w-full">
        <p className="text-sm text-customPurple font-normal">March 3, 2023</p>
        <p className="text-sm text-customPurple font-medium">
          Revent Global Finance
        </p>
      </div>
      <div className="py-2 w-full">
        <h2 className="text-xl font-bold mb-1 ">Explore Real Estate</h2>
        <p className="text-sm text-neutral-500 font-normal w-full">
          By Investing with Us, You Can Enjoy the Benefits of Compound Growth,
          Diversi...
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

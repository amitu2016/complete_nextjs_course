"use client"
import {useState} from "react";
import BlogCard from "@/app/components/BlogCard";

export default function Blogs()
{
    const [blogs, setBlogs] = useState([
        {
            id : 1,
            title : "Blog Title 1",
            description : "Blog 1 Excerpt",
            slug : "blog-1"
        },
        {
            id : 2,
            title : "Blog Title 2",
            description : "Blog 2 Excerpt",
            slug : "blog-2"
        },
        {
            id : 3,
            title : "Blog Title 3",
            description : "Blog 3 Excerpt",
            slug : "blog-3"
        },
    ]);

    const handleDelete = (id) => {
        setBlogs((prevBlogs) => prevBlogs.filter(
                     (blog) => blog.id !== id));
    };

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={
            handleDelete} />
      ))}
    </div>
  );
}
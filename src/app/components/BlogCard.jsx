import Link from "next/link";
export default function BlogCard({blog, onDelete})
{
  return (
    <div>
      <h2>
        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
      </h2>
      <p>{blog.description}</p>
      <button onClick={() => onDelete(blog.id)}>Delete</button>
    </div>
  );
}

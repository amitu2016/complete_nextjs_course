import { useRouter } from "next/router";

export default function BlogPageSingle() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <h1>Blog Post: {slug}</h1>
            <p>This is the blog post content for {slug}.</p>
        </div>
    );
}
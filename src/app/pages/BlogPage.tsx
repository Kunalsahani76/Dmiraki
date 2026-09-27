import { useEffect, useState } from "react";
import { useParams } from "react-router";

type BlogPost = { title: string; description: string; slug: string; category: string; content: string; image?: string; publishedAt: string };
const postsKey = "dmiraki-blog-posts";

function readPosts(): BlogPost[] {
  try { return JSON.parse(localStorage.getItem(postsKey) || "[]").filter((post: BlogPost) => post.publishedAt); }
  catch { return []; }
}

export default function BlogPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => { setPosts(readPosts()); }, []);
  const selectedPost = posts.find((post) => post.slug === slug);
  if (slug) return <main className="min-h-[70vh] bg-[#090909] px-5 py-16 text-white sm:px-10"><article className="mx-auto max-w-4xl">
    <a href="/blogs" className="mb-8 inline-block text-sm text-blue-300 hover:text-white">← All Blogs</a>
    {selectedPost ? <><p className="mb-3 text-xs uppercase tracking-widest text-blue-300">{selectedPost.category}</p><h1 className="mb-6 text-4xl font-semibold">{selectedPost.title}</h1>{selectedPost.image && <img src={selectedPost.image} alt="" className="mb-8 max-h-[480px] w-full object-cover" />}<p className="mb-6 text-lg text-white/70">{selectedPost.description}</p><div className="whitespace-pre-wrap leading-8 text-white/85">{selectedPost.content}</div></> : <p className="text-white/70">Blog post not found.</p>}
  </article></main>;
  return <main className="min-h-[70vh] bg-[#090909] px-5 py-16 text-white sm:px-10">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-300">D'Miraki Insights</p>
      <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">Blogs</h1>
      <p className="mb-10 max-w-2xl text-white/70">Ideas, updates, and insights from our team.</p>
      {posts.length === 0 ? <div className="border border-white/20 px-6 py-14 text-center text-white/65">No published blogs yet. Please check back soon.</div> :
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <article key={post.slug} className="overflow-hidden border border-white/20 bg-white/[0.04]">
          {post.image && <img src={post.image} alt="" className="h-52 w-full object-cover" />}
          <div className="p-6"><p className="mb-3 text-xs uppercase tracking-widest text-blue-300">{post.category}</p><h2 className="mb-3 text-xl font-semibold">{post.title}</h2><p className="mb-5 text-sm leading-6 text-white/65">{post.description || post.content.slice(0, 150)}</p><a href={'/blogs/' + post.slug} className="text-sm text-blue-300 hover:text-white">Read article →</a></div>
        </article>)}</div>}
    </div>
  </main>;
}

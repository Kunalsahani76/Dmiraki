import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Plus, X } from "lucide-react";
import { getAuthError, loginWithEmail, loginWithGoogle, logoutUser, observeAuthUser, registerWithEmail } from "../firebaseAuth";
import type { User } from "firebase/auth";

const postsKey = "dmiraki-blog-posts";
const usersKey = "dmiraki-admin-users";
const credentialsKey = "dmiraki-admin-credentials";
type BlogPost = { title: string; slug: string; description: string; content: string; category: string; image?: string; publishedAt: string; author?: string; tags?: string[]; focusKeyword?: string };
type AdminUser = { name: string; email: string };
type Credential = { label: string; username: string; value: string };
type PostForm = Omit<BlogPost, "image" | "publishedAt"> & { image: string };
const blankForm: PostForm = { title: "", slug: "", description: "", content: "", category: "Digital Marketing", image: "", author: "", tags: [], focusKeyword: "" };

function readList<T,>(key: string): T[] {
  try { const value = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(value) ? value : []; }
  catch { return []; }
}

function formatDate(value: string) {
  if (!value) return "Draft";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toISOString().slice(0, 10);
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>(() => readList<BlogPost>(postsKey));
  const categories = ["Business and Employment", "Education and Science", "Digital Marketing", "Branding", "Web Development"];
  const [showCount, setShowCount] = useState(15);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<PostForm>(blankForm);
  const [tagInput, setTagInput] = useState("");
  const [notice, setNotice] = useState("");
  const [modal, setModal] = useState<"user" | "credential" | null>(null);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(() => readList<AdminUser>(usersKey));
  const [credentials, setCredentials] = useState<Credential[]>(() => readList<Credential>(credentialsKey));
  const navigate = useNavigate();

  useEffect(() => observeAuthUser(setUser), []);

  async function authenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    const name = String(data.get("name") || "").trim();
    setError("");
    try {
      if (mode === "signup") await registerWithEmail(name, email, password);
      else await loginWithEmail(email, password);
    } catch (cause) { setError(getAuthError(cause)); }
  }

  function updateForm<K extends keyof PostForm>(key: K, value: PostForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function openNewPost() {
    setEditingSlug(null);
    setForm({ ...blankForm, author: user?.displayName || user?.email || "" });
    setEditorOpen(true);
  }

  function openEdit(post: BlogPost) {
    setEditingSlug(post.slug);
    setForm({ ...blankForm, ...post, image: post.image || "", tags: post.tags || [], author: post.author || user?.displayName || user?.email || "" });
    setEditorOpen(true);
  }

  function savePost(publish: boolean) {
    const title = form.title.trim();
    const slug = (form.slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")).slice(0, 160);
    if (!title || !slug) return;
    const current = readList<BlogPost>(postsKey);
    const prior = current.find((post) => post.slug === editingSlug || post.slug === slug);
    const nextPost: BlogPost = { ...form, title, slug, image: form.image || prior?.image || "", publishedAt: publish ? prior?.publishedAt || new Date().toISOString() : prior?.publishedAt || "" };
    const updated = [...current.filter((post) => post.slug !== editingSlug && post.slug !== slug), nextPost];
    localStorage.setItem(postsKey, JSON.stringify(updated));
    setPosts(updated);
    setEditorOpen(false);
    setNotice(publish ? "Post published." : "Draft saved.");
    window.setTimeout(() => setNotice(""), 3000);
  }

  function deletePost(post: BlogPost) {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    const updated = posts.filter((item) => item.slug !== post.slug);
    localStorage.setItem(postsKey, JSON.stringify(updated));
    setPosts(updated);
    setNotice("Post deleted.");
    window.setTimeout(() => setNotice(""), 3000);
  }

  function saveUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = [...adminUsers, { name: String(data.get("name") || "").trim(), email: String(data.get("email") || "").trim() }];
    localStorage.setItem(usersKey, JSON.stringify(next));
    setAdminUsers(next);
    setModal(null);
    setNotice("User added.");
  }

  function saveCredential(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = [...credentials, { label: String(data.get("label") || "").trim(), username: String(data.get("username") || "").trim(), value: String(data.get("value") || "") }];
    localStorage.setItem(credentialsKey, JSON.stringify(next));
    setCredentials(next);
    setModal(null);
    setNotice("Credential added.");
  }

  const filteredPosts = useMemo(() => posts.filter((post) => {
    const matchesCategory = categoryFilter === "All" || post.category === categoryFilter;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || [post.title, post.category, post.author, post.slug].some((value) => value?.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  }).slice(0, showCount), [posts, categoryFilter, search, showCount]);
  const availableCategories = [...new Set([...categories, ...posts.map((post) => post.category).filter(Boolean)])];
  const inputClass = "h-11 w-full rounded-sm border border-white/20 bg-[#111] px-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-teal-400";
  const labelClass = "mb-1.5 block text-xs font-medium text-white/75";

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {!user ? (
        <section className="flex min-h-[calc(100vh-62px)] items-center justify-center px-5 py-12">
          <form onSubmit={authenticate} className="relative w-full max-w-[440px] border border-white/25 bg-[#151515] px-8 py-8 sm:px-10">
            <button type="button" aria-label="Back to home" onClick={() => navigate("/")} className="absolute right-5 top-5 text-white/60 hover:text-white"><X /></button>
            <h1 className="mb-7 text-center text-2xl font-semibold">{mode === "login" ? "Admin Log In" : "Admin Sign Up"}</h1>
            {mode === "signup" && <input name="name" required autoComplete="name" placeholder="Name" className={`${inputClass} mb-3`} />}
            <input name="email" type="email" required autoComplete="email" placeholder="Email" className={`${inputClass} mb-3`} />
            <div className="relative mb-3"><input name="password" type={passwordVisible ? "text" : "password"} required minLength={6} autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder="Password" className={`${inputClass} pr-11`} /><button type="button" aria-label={passwordVisible ? "Hide password" : "Show password"} onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/55">{passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}</button></div>
            {error && <p role="alert" className="mb-3 text-sm text-red-300">{error}</p>}
            <button className="h-11 w-full rounded-sm bg-teal-600 text-sm font-semibold hover:bg-teal-500">{mode === "login" ? "Log In" : "Sign Up"}</button>
            <p className="mt-4 text-center text-xs text-white/60">{mode === "login" ? "New here?" : "Already have an account?"} <button type="button" onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }} className="text-teal-300">{mode === "login" ? "Sign Up" : "Log In"}</button></p>
            <div className="my-5 flex items-center gap-3 text-xs text-white/45"><span className="h-px flex-1 bg-white/20" />or<span className="h-px flex-1 bg-white/20" /></div>
            <button type="button" onClick={async () => { setError(""); try { await loginWithGoogle(); } catch (cause) { setError(getAuthError(cause)); } }} className="h-11 w-full rounded-sm border border-white/25 bg-white text-sm text-[#333] hover:bg-gray-100">Continue with Google</button>
          </form>
        </section>
      ) : (
        <section className="mx-auto max-w-[1440px] px-4 py-7 sm:px-7 lg:px-10">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-xl font-medium tracking-wide">Admin Panel</h1>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={openNewPost} className="inline-flex h-9 items-center gap-1.5 rounded-sm bg-teal-700 px-3 text-xs font-medium hover:bg-teal-600"><Plus size={14} /> Add Post</button>
              <button onClick={() => setModal("user")} className="inline-flex h-9 items-center gap-1.5 rounded-sm bg-teal-700 px-3 text-xs font-medium hover:bg-teal-600"><Plus size={14} /> Add User</button>
              <button onClick={() => setModal("credential")} className="inline-flex h-9 items-center gap-1.5 rounded-sm bg-teal-700 px-3 text-xs font-medium hover:bg-teal-600"><Plus size={14} /> Add Credential</button>
              <button onClick={() => { void logoutUser().catch((cause) => setError(getAuthError(cause))); }} className="ml-1 h-9 border border-white/20 px-3 text-xs text-white/75 hover:bg-white/10">Log out</button>
            </div>
          </header>

          {editorOpen && <form onSubmit={(event) => { event.preventDefault(); savePost(true); }} className="mb-7 border border-white/20 bg-[#111] p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4"><div><h2 className="text-lg font-semibold">{editingSlug ? "Edit Post" : "Post Details"}</h2><p className="mt-1 text-xs text-white/50">Create and manage the blog post details.</p></div><button type="button" aria-label="Close editor" onClick={() => setEditorOpen(false)} className="text-white/55 hover:text-white"><X size={19} /></button></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label><span className={labelClass}>Post Title *</span><input required maxLength={160} value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="Enter post title" className={inputClass} /></label>
              <label><span className={labelClass}>Slug</span><input maxLength={160} value={form.slug} onChange={(event) => updateForm("slug", event.target.value)} placeholder="Generated from title if blank" className={inputClass} /></label>
              <label><span className={labelClass}>Category</span><select value={form.category} onChange={(event) => updateForm("category", event.target.value)} className={inputClass}>{availableCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label><span className={labelClass}>Author</span><input value={form.author || ""} onChange={(event) => updateForm("author", event.target.value)} placeholder="Author name" className={inputClass} /></label>
              <label><span className={labelClass}>Focus Keyword</span><input value={form.focusKeyword || ""} onChange={(event) => updateForm("focusKeyword", event.target.value)} placeholder="Enter focus keyword" className={inputClass} /></label>
              <label><span className={labelClass}>Featured Image (PNG/JPG, max 2MB)</span><input type="file" accept="image/png,image/jpeg" className={`${inputClass} file:mr-3 file:border-0 file:bg-transparent file:text-xs file:text-teal-300`} onChange={(event) => { const file = event.target.files?.[0]; if (!file) return; if (file.size > 2 * 1024 * 1024) { setNotice("Image must be 2MB or smaller."); return; } const reader = new FileReader(); reader.onload = () => updateForm("image", String(reader.result || "")); reader.readAsDataURL(file); }} /></label>
              <label className="sm:col-span-2 lg:col-span-3"><span className={labelClass}>Meta Description</span><textarea maxLength={320} value={form.description} onChange={(event) => updateForm("description", event.target.value)} className={`${inputClass} min-h-20 resize-y py-3`} placeholder="Enter a short description" /></label>
              <div className="sm:col-span-2 lg:col-span-3"><span className={labelClass}>Meta Tags</span><div className="flex gap-2"><input value={tagInput} onChange={(event) => setTagInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); const value = tagInput.trim(); if (value && !form.tags?.includes(value)) updateForm("tags", [...(form.tags || []), value]); setTagInput(""); } }} placeholder="Enter tag and press Add" className={inputClass} /><button type="button" onClick={() => { const value = tagInput.trim(); if (value && !form.tags?.includes(value)) updateForm("tags", [...(form.tags || []), value]); setTagInput(""); }} className="shrink-0 rounded-sm border border-white/20 px-4 text-xs hover:bg-white/10">Add tag</button></div>{Boolean(form.tags?.length) && <div className="mt-2 flex flex-wrap gap-2">{form.tags?.map((tag) => <button key={tag} type="button" onClick={() => updateForm("tags", form.tags?.filter((item) => item !== tag) || [])} className="rounded-sm bg-white/10 px-2 py-1 text-xs text-white/75">{tag} ×</button>)}</div>}</div>
              <label className="sm:col-span-2 lg:col-span-3"><span className={labelClass}>Post Content</span><textarea value={form.content} onChange={(event) => updateForm("content", event.target.value)} className={`${inputClass} min-h-64 resize-y py-3 leading-6`} placeholder="Write your content here..." /></label>
            </div>
            {notice && <p role="status" className="mt-3 text-right text-sm text-teal-200">{notice}</p>}
            <div className="mt-5 flex flex-wrap justify-end gap-3"><button type="button" onClick={() => savePost(false)} className="h-10 rounded-sm border border-white/25 px-4 text-sm hover:bg-white/10">Save As Draft</button><button className="h-10 rounded-sm bg-white px-5 text-sm font-semibold text-black hover:bg-white/85">{editingSlug ? "Update & Publish" : "Publish"}</button></div>
          </form>}

          <div className="mb-3 grid gap-3 border-b border-white/40 pb-4 sm:grid-cols-[auto_minmax(120px,1fr)_minmax(120px,1fr)_minmax(180px,1fr)_auto] sm:items-end">
            <label className="text-[10px] font-medium text-white/75">Show<select value={showCount} onChange={(event) => setShowCount(Number(event.target.value))} className="mt-1 block h-8 w-full rounded-sm border border-white/25 bg-[#111] px-2 text-xs text-white sm:w-[72px]"><option value={15}>15</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select></label>
            <label className="text-[10px] font-medium text-white/75">Category<select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="mt-1 block h-8 w-full rounded-sm border border-white/25 bg-[#111] px-2 text-xs text-white"><option>All</option>{availableCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-[10px] font-medium text-white/75">category<select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="mt-1 block h-8 w-full rounded-sm border border-white/25 bg-[#111] px-2 text-xs text-white"><option>All</option>{availableCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-[10px] font-medium text-white/75">Search<input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" className="mt-1 block h-8 w-full rounded-sm border border-white/25 bg-[#111] px-2 text-xs text-white placeholder:text-white/40" /></label>
            <button onClick={() => { setSearch(""); setCategoryFilter("All"); }} className="h-8 rounded-sm bg-white px-4 text-xs font-semibold text-black hover:bg-white/85">Filter</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-[11px]">
              <thead><tr className="border-b border-white/35 text-white/85">{["ID", "Post", "Language", "Post Type", "Category", "Author", "Date", "Options"].map((heading) => <th key={heading} className="px-2 py-3 font-semibold">{heading}</th>)}</tr></thead>
              <tbody>{filteredPosts.map((post, index) => <tr key={post.slug} className="border-b border-white/20 hover:bg-white/[0.035]">
                <td className="px-2 py-2.5 text-white/65">{String(posts.length - index).padStart(6, "0")}</td>
                <td className="px-2 py-2.5"><div className="flex min-w-[250px] items-center gap-2"><div className="h-10 w-12 shrink-0 overflow-hidden rounded-sm bg-white/10">{post.image && <img src={post.image} alt="" className="h-full w-full object-cover" />}</div><span className="line-clamp-2 max-w-[260px]">{post.title}</span></div></td>
                <td className="px-2 py-2.5 text-white/70">English</td><td className="px-2 py-2.5 text-white/70">Article</td>
                <td className="px-2 py-2.5"><span className="inline-block max-w-[150px] rounded-sm bg-black px-2 py-1 text-[9px] leading-3 text-white">{post.category || "Uncategorized"}</span></td>
                <td className="px-2 py-2.5 text-white/75">{post.author || "—"}</td><td className="px-2 py-2.5 text-white/70">{formatDate(post.publishedAt)}</td>
                <td className="px-2 py-2.5"><div className="flex items-center gap-1.5"><button onClick={() => openEdit(post)} className="rounded-sm bg-white px-2 py-1 text-[10px] font-medium text-black hover:bg-white/80">Edit</button><button onClick={() => deletePost(post)} className="rounded-sm bg-red-600 px-2 py-1 text-[10px] font-medium text-white hover:bg-red-500">Delete</button></div></td>
              </tr>)}
              {filteredPosts.length === 0 && <tr><td colSpan={8} className="px-3 py-10 text-center text-sm text-white/55">No blog posts found. Select Add Post to create one.</td></tr>}</tbody>
            </table>
          </div>
          <p className="mt-3 text-right text-xs text-white/45">Showing {filteredPosts.length} of {posts.length} posts</p>
          {notice && !editorOpen && <p role="status" className="mt-3 text-right text-sm text-teal-200">{notice}</p>}

          {modal && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}><form onSubmit={modal === "user" ? saveUser : saveCredential} className="w-full max-w-md border border-white/20 bg-[#151515] p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between"><h2 className="text-lg font-semibold">{modal === "user" ? "Add User" : "Add Credential"}</h2><button type="button" onClick={() => setModal(null)} aria-label="Close" className="text-white/55 hover:text-white"><X size={18} /></button></div>
            {modal === "user" ? <><label className={labelClass}>Name<input name="name" required className={`${inputClass} mb-4`} placeholder="Full name" /></label><label className={labelClass}>Email<input name="email" type="email" required className={inputClass} placeholder="name@example.com" /></label>{adminUsers.length > 0 && <p className="mt-3 text-xs text-white/50">{adminUsers.length} user{adminUsers.length === 1 ? "" : "s"} added</p>}</> : <><label className={labelClass}>Credential Name<input name="label" required className={`${inputClass} mb-4`} placeholder="e.g. CMS access" /></label><label className={labelClass}>Username / Email<input name="username" required className={`${inputClass} mb-4`} placeholder="Account username" /></label><label className={labelClass}>Credential<input name="value" required type="password" className={inputClass} placeholder="Password or key" /></label>{credentials.length > 0 && <p className="mt-3 text-xs text-white/50">{credentials.length} credential{credentials.length === 1 ? "" : "s"} saved</p>}</>}
            <div className="mt-6 flex justify-end gap-2"><button type="button" onClick={() => setModal(null)} className="h-9 border border-white/20 px-4 text-xs hover:bg-white/10">Cancel</button><button className="h-9 rounded-sm bg-teal-700 px-4 text-xs font-medium hover:bg-teal-600">Save</button></div>
          </form></div>}
        </section>
      )}
    </main>
  );
}

import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { CloudUpload, Info, Plus, ChevronDown, Link, Image, CirclePlay, MoreHorizontal, X, Eye, EyeOff } from "lucide-react";
import { getAuthError, loginWithEmail, loginWithGoogle, logoutUser, observeAuthUser, registerWithEmail } from "../firebaseAuth";
import type { User } from "firebase/auth";

const postsKey = "dmiraki-blog-posts";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [categories, setCategories] = useState(["Digital Marketing", "Branding", "Web Development"]);
  const [newCategory, setNewCategory] = useState("");
  const [addingCategory, setAddingCategory] = useState(false);
  const [imageName, setImageName] = useState("");
  const [notice, setNotice] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return observeAuthUser(setUser);
  }, []);

  async function authenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const name = String(form.get("name") || "").trim();
    if (mode === "signup" && !name) { setError("Please enter your name."); return; }
    setError("");
    try {
      if (mode === "signup") await registerWithEmail(name, email, password);
      else await loginWithEmail(email, password);
    } catch (cause) { setError(getAuthError(cause)); }
  }

  function addTag(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = tagInput.trim();
    if (value && !tags.includes(value)) setTags([...tags, value]);
    setTagInput("");
  }

  async function savePost(action: string) {
    const editor = document.querySelector<HTMLElement>(".blog-editor");
    const fields = editor?.querySelectorAll<HTMLInputElement>("input") || [];
    const textareas = editor?.querySelectorAll<HTMLTextAreaElement>("textarea") || [];
    const title = fields[0]?.value.trim() || "Untitled post";
    const slug = (fields[1]?.value.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")).slice(0, 160);
    const file = editor?.querySelector<HTMLInputElement>('input[type="file"]')?.files?.[0];
    let image = "";
    if (file && file.size <= 2 * 1024 * 1024 && file.type.startsWith("image/")) {
      image = await new Promise<string>((resolve) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result || "")); reader.onerror = () => resolve(""); reader.readAsDataURL(file); });
    }
    const posts = JSON.parse(localStorage.getItem(postsKey) || "[]") as Array<Record<string, string>>;
    const priorPost = posts.find((item) => item.slug === slug);
    const post = { title, slug, description: textareas[0]?.value || "", content: textareas[1]?.value || "", category, image: image || priorPost?.image || "", publishedAt: action === "published" ? new Date().toISOString() : priorPost?.publishedAt || "" };
    const updated = [...posts.filter((item) => item.slug !== slug), post];
    localStorage.setItem(postsKey, JSON.stringify(updated));
    setNotice(`Post ${action.toLowerCase()} locally.`);
    window.setTimeout(() => setNotice(""), 3000);
  }

  const inputClass = "blog-input w-full border border-white/35 bg-transparent px-8 text-[16px] text-white placeholder:text-white/75 focus:border-blue-400 focus:outline-none";

  return (
    <main className="blog-page min-h-screen text-white">
      {!user ? (
        <section className="blog-auth-wrap flex min-h-[calc(100vh-62px)] items-center justify-center px-5 py-12">
          <form onSubmit={authenticate} className="blog-auth w-full max-w-[440px] border border-white/35 px-8 py-7 sm:px-10">
            <button type="button" aria-label="Back to home" onClick={() => navigate("/")} className="absolute right-6 top-6 text-white/60 hover:text-white"><X /></button>
            <h1 className="mb-7 text-center text-2xl font-semibold text-[#4b4b4b]">{mode === "login" ? "Log in" : "Sign up"}</h1>
            {mode === "signup" && <><label className="sr-only" htmlFor="blog-name">Name</label><input id="blog-name" name="name" type="text" required autoComplete="name" placeholder="Name" className="mb-3 h-[48px] w-full rounded border border-[#d9d9d9] bg-white px-3 text-sm text-[#333] placeholder:text-[#777] focus:border-[#168cff] focus:outline-none" /></>}
            <label className="sr-only" htmlFor="blog-email">Email</label>
            <input id="blog-email" name="email" type="email" required autoComplete="email" placeholder="Email" className="mb-3 h-[48px] w-full rounded border border-[#d9d9d9] bg-white px-3 text-sm text-[#333] placeholder:text-[#777] focus:border-[#168cff] focus:outline-none" />
            <label className="sr-only" htmlFor="blog-password">Password</label>
            <div className="relative mb-3"><input id="blog-password" name="password" type={passwordVisible ? "text" : "password"} required minLength={6} autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder="Password" className="h-[48px] w-full rounded border border-[#d9d9d9] bg-white px-3 pr-11 text-sm text-[#333] placeholder:text-[#777] focus:border-[#168cff] focus:outline-none" /><button type="button" aria-label={passwordVisible ? "Hide password" : "Show password"} onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777]">{passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}</button></div>
            {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
            {mode === "login" && <div className="mb-4 flex justify-end"><button type="button" onClick={() => setError("Password reset is not configured yet.")} className="text-xs text-white/75 hover:text-white">Forgot Password?</button></div>}
            <button className="h-[48px] w-full rounded bg-[#168cff] text-sm font-semibold text-white transition hover:bg-[#0879e8]">{mode === "login" ? "Log In" : "Sign Up"}</button>
            <p className="mt-3 text-center text-xs text-white/70">{mode === "login" ? "New here?" : "Already have an account?"} <button type="button" onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }} className="text-[#168cff]">{mode === "login" ? "Sign Up" : "Log In"}</button></p>
            <div className="my-5 flex items-center gap-3 text-xs text-white/60"><span className="h-px flex-1 bg-white/25" />or<span className="h-px flex-1 bg-white/25" /></div>
            <button type="button" onClick={async () => { setError(""); try { await loginWithGoogle(); } catch (cause) { setError(getAuthError(cause)); } }} className="flex h-[44px] w-full items-center justify-center gap-2 rounded border border-[#d9d9d9] bg-white text-sm text-[#333] hover:bg-gray-50"><span className="font-bold text-[#4285f4]">G</span>Continue with Google</button>
          </form>
        </section>
      ) : (
        <section className="blog-editor mx-auto w-full max-w-[900px] px-5 py-8 sm:px-8">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div><h1 className="text-2xl font-semibold">Admin Panel · Post Details</h1><p className="mt-1 text-sm text-white/80">Fill in the information below to create your post</p></div>
            <button onClick={() => { void logoutUser().catch((cause) => setError(getAuthError(cause))); }} className="shrink-0 border border-white/35 px-4 py-2 text-sm text-white/80 hover:bg-white hover:text-black">Log out</button>
          </div>
          <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2">
            <label className="block text-sm">Meta Title *<input required maxLength={160} placeholder="Enter Meta Title" className={`${inputClass} mt-2 h-[72px]`} /></label>
            <label className="block text-sm">Meta Description <Info className="ml-1 inline h-3.5 w-3.5 text-blue-300" /><textarea maxLength={320} placeholder="Enter Meta Description" className={`${inputClass} mt-2 min-h-[72px] resize-y py-5`} /></label>
            <label className="block text-sm">Meta Slug<input maxLength={160} placeholder="If Blank, It Will Be Generated Automatically" className={`${inputClass} mt-2 h-[126px]`} /><span className="float-right -mt-7 mr-3 text-xs text-blue-200">0/160</span></label>
            <label className="block text-sm">Image<span className="mt-2 flex h-[126px] cursor-pointer flex-col items-center justify-center border border-white/35 text-center text-white/80 hover:border-blue-400"><CloudUpload className="mb-2 h-6 w-6 text-blue-500" /><span className="text-blue-400">{imageName || "Click to upload image"}</span><span className="mt-1">PNG, JPG, JPEG (Max 2MB)</span><input type="file" accept="image/png,image/jpeg" className="sr-only" onChange={(e) => setImageName(e.target.files?.[0]?.name || "")} /></span></label>
            <label className="block text-sm">Meta Focus Keyword<input placeholder="Enter Focus Keyword" className={`${inputClass} mt-2 h-[72px]`} /></label>
            <div className="text-sm">Meta Tags<form onSubmit={addTag} className="relative mt-2"><input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder={tags.length ? tags.join(", ") : "Enter Tags And Press Enter"} className={`${inputClass} h-[72px] pr-10`} /><button aria-label="Add tag" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-200"><ChevronDown size={16} /></button></form></div>
            <div className="md:col-span-2"><label className="block text-sm">Category</label><div className="mt-2 flex gap-3"><select value={category} onChange={(e) => setCategory(e.target.value)} className="h-[72px] min-w-0 flex-1 appearance-none border border-white/35 bg-transparent px-8 text-white focus:outline-blue-400"><option className="bg-[#222]">Select Category</option>{categories.map((item) => <option key={item} className="bg-[#222]">{item}</option>)}</select><button onClick={() => { if (addingCategory && newCategory.trim()) { setCategories([...categories, newCategory.trim()]); setCategory(newCategory.trim()); setNewCategory(""); setAddingCategory(false); } else setAddingCategory(true); }} className="flex h-[72px] items-center gap-3 border border-white/35 px-5 text-blue-400 hover:bg-white/10"><Plus size={18} /> {addingCategory && newCategory.trim() ? "Save Category" : "Add New Category"}</button></div>{addingCategory && <input autoFocus value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Category name" className={`${inputClass} mt-2 h-12`} />}</div>
          </div>
          <div className="mt-4 border border-white/35 p-5">
            <div className="flex flex-wrap items-center gap-4 border border-white/30 px-6 py-4 text-sm"><span>File</span><span>Insert</span><span>Format</span><span>Table</span><span className="rounded bg-white px-3 py-1 text-blue-600">Visual</span><span>Text</span></div>
            <div className="flex flex-wrap items-center gap-4 border-b border-white/35 py-5 text-white/85"><span>↶</span><span>↷</span><span>│</span><select aria-label="Text style" className="bg-transparent"><option className="bg-[#222]">Paragraph</option><option className="bg-[#222]">Heading</option></select><span>│</span><b>B</b><i>I</i><u>U</u><span>≡</span><span>☷</span><span>│</span><Link size={15} /><Image size={15} /><CirclePlay size={15} /><MoreHorizontal size={16} /></div>
            <textarea aria-label="Post content" placeholder="Write your content here..." className="mt-4 min-h-[210px] w-full resize-y border border-white/35 bg-transparent px-8 py-6 text-white placeholder:text-white/80 focus:outline-blue-400" />
          </div>
          <div className="mt-4 flex min-h-[96px] items-center justify-end gap-4 border border-white/35 px-8 py-5"><button onClick={() => savePost("saved as draft")} className="border border-white/35 px-5 py-3 tracking-wider hover:bg-white/10">Save As Draft</button><button onClick={() => savePost("published")} className="min-w-[168px] bg-white px-7 py-3 text-black hover:bg-white/85">Publish</button></div>
          {notice && <p role="status" className="mt-3 text-right text-sm text-blue-200">{notice}</p>}
        </section>
      )}
    </main>
  );
}

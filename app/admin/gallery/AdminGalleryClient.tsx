"use client";
import { useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/lib/gallery-types";
import { GALLERY_CATEGORIES } from "@/lib/gallery-types";

interface Props {
  initialItems: GalleryItem[];
}

const EMPTY_FORM = {
  title: "",
  imageUrl: "",
  category: "Tugboats" as GalleryCategory,
};

export default function AdminGalleryClient({ initialItems }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "saving" | "deleting">("idle");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const clearMessages = () => {
    setError(null);
    setMessage(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearMessages();
    if (!form.title.trim() || !form.imageUrl.trim()) {
      setError("Title and image URL are required.");
      return;
    }
    setStatus("saving");
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to save");
      setItems((prev) => [data.item as GalleryItem, ...prev]);
      setForm(EMPTY_FORM);
      setMessage("Gallery item added.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setStatus("idle");
    }
  };

  const onDelete = async (id: string) => {
    clearMessages();
    if (!confirm("Delete this gallery item?")) return;
    setStatus("deleting");
    try {
      const res = await fetch(`/api/gallery?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to delete");
      }
      setItems((prev) => prev.filter((x) => x.id !== id));
      setMessage("Gallery item removed.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setStatus("idle");
    }
  };

  const inputClasses =
    "w-full bg-[#071528] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-[#6b87ad] focus:outline-none focus:border-[#3B82F6] transition-colors";
  const labelClasses =
    "font-mono text-[10px] text-[#60A5FA] tracking-[0.14em] uppercase block mb-2";

  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
      {/* Add form */}
      <form onSubmit={onSubmit} className="card p-6 lg:p-8 h-fit">
        <h2 className="text-[20px] font-bold text-white mb-2">Add Gallery Item</h2>
        <p className="text-[13px] text-[#a8bcd6] mb-6 leading-relaxed">
          Paste a public image URL (or a path under <code className="text-[#60A5FA]">/images/…</code>),
          give it a title and choose a category.
        </p>

        <div className="mb-4">
          <label className={labelClasses}>Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="e.g. Completed steel barge"
            className={inputClasses}
          />
        </div>

        <div className="mb-4">
          <label className={labelClasses}>Image URL</label>
          <input
            value={form.imageUrl}
            onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
            placeholder="https://… or /images/your-file.jpg"
            className={inputClasses}
          />
        </div>

        <div className="mb-5">
          <label className={labelClasses}>Category</label>
          <select
            value={form.category}
            onChange={(e) =>
              setForm((f) => ({ ...f, category: e.target.value as GalleryCategory }))
            }
            className={inputClasses}
          >
            {GALLERY_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="mb-4 text-[13px] text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 text-[13px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-3">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "saving"}
          className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "saving" ? "Saving…" : "Add to Gallery"}
        </button>

        {/* Preview */}
        {form.imageUrl && (
          <div className="mt-6">
            <div className={labelClasses}>Preview</div>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#071528] border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={form.imageUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => ((e.currentTarget.style.opacity = "0.3"))}
              />
            </div>
          </div>
        )}
      </form>

      {/* Items list */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-white">
            Current Items{" "}
            <span className="text-[#60A5FA] font-mono text-[13px]">({items.length})</span>
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-[#a8bcd6]">No gallery items yet. Add one to get started.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="card p-3 flex items-center gap-4"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#071528] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] text-[#60A5FA] tracking-wider uppercase mb-1">
                    {item.category}
                  </div>
                  <div className="text-[14px] font-semibold text-white truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#6b87ad] truncate mt-0.5">
                    {item.imageUrl}
                  </div>
                </div>
                <button
                  onClick={() => onDelete(item.id)}
                  disabled={status === "deleting"}
                  className="shrink-0 text-[12px] font-mono tracking-wider uppercase text-red-300 hover:text-white bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500 rounded-lg px-3 py-2 transition-colors disabled:opacity-50"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

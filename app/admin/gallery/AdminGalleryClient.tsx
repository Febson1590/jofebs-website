"use client";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/lib/gallery-types";
import { GALLERY_CATEGORIES } from "@/lib/gallery-types";

interface Props {
  initialItems: GalleryItem[];
}

const DEFAULT_CATEGORY: GalleryCategory = "Tugboats";

export default function AdminGalleryClient({ initialItems }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<GalleryCategory>(DEFAULT_CATEGORY);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "deleting">("idle");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Build a preview URL for the chosen file and clean it up afterwards
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const clearMessages = () => {
    setError(null);
    setMessage(null);
  };

  const resetForm = () => {
    setTitle("");
    setCategory(DEFAULT_CATEGORY);
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearMessages();
    const next = e.target.files?.[0] ?? null;
    setFile(next);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearMessages();
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    if (!file) {
      setError("Please choose an image to upload.");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Selected file must be an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("category", category);
    formData.append("file", file);

    setStatus("saving");
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || `Upload failed (${res.status})`);
      }
      setItems((prev) => [data.item as GalleryItem, ...prev]);
      resetForm();
      setMessage("Image uploaded.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setStatus("idle");
    }
  };

  const onDelete = async (id: string) => {
    clearMessages();
    if (!confirm("Delete this gallery item? This removes the image from storage.")) {
      return;
    }
    setStatus("deleting");
    setDeletingId(id);
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
      setDeletingId(null);
    }
  };

  const inputClasses =
    "w-full bg-[#071528] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-[#6b87ad] focus:outline-none focus:border-[#3B82F6] transition-colors";
  const labelClasses =
    "font-mono text-[10px] text-[#60A5FA] tracking-[0.14em] uppercase block mb-2";

  const fileSizeLabel = file
    ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
    : null;

  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
      {/* Add form */}
      <form onSubmit={onSubmit} className="card p-6 lg:p-8 h-fit">
        <h2 className="text-[20px] font-bold text-white mb-2">Upload New Photo</h2>
        <p className="text-[13px] text-[#a8bcd6] mb-6 leading-relaxed">
          Choose a photo from your device or take one with your camera.
          The image is uploaded directly to Vercel Blob storage.
        </p>

        <div className="mb-4">
          <label className={labelClasses}>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Completed steel barge"
            className={inputClasses}
          />
        </div>

        <div className="mb-4">
          <label className={labelClasses}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as GalleryCategory)}
            className={inputClasses}
          >
            {GALLERY_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className={labelClasses}>Image File</label>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={onFileChange}
            className="sr-only"
            id="gallery-file-input"
          />

          <div className="flex flex-wrap gap-2">
            <label
              htmlFor="gallery-file-input"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#3B82F6] hover:bg-[#60A5FA] text-white text-[13px] font-bold cursor-pointer transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              {file ? "Change Image" : "Choose / Take Photo"}
            </label>
            {file && (
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center px-3 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-[12px] text-[#a8bcd6] hover:text-white transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {file && (
            <div className="mt-2 text-[11px] text-[#6b87ad] font-mono truncate">
              {file.name} · {fileSizeLabel}
            </div>
          )}
        </div>

        {/* Preview */}
        {previewUrl && (
          <div className="mb-5">
            <div className={labelClasses}>Preview</div>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#071528] border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Selected preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

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
          {status === "saving" ? "Uploading…" : "Upload to Gallery"}
        </button>
      </form>

      {/* Items list */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-white">
            Current Items{" "}
            <span className="text-[#60A5FA] font-mono text-[13px]">
              ({items.length})
            </span>
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-[#a8bcd6]">
              No gallery items yet. Upload one to get started.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.id} className="card p-3 flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#071528] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
                  {deletingId === item.id ? "…" : "Delete"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

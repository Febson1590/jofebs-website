"use client";
import { useEffect, useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/gallery-types";

const CATEGORIES = [
  "All",
  "Tugboats",
  "Barges",
  "Houseboats",
  "Field Work",
  "Workers",
  "Equipment",
] as const;
type Filter = (typeof CATEGORIES)[number];

interface Props {
  initialItems: GalleryItem[];
}

export default function GalleryGrid({ initialItems }: Props) {
  const [items] = useState<GalleryItem[]>(initialItems);
  const [active, setActive] = useState<Filter>("All");
  const [preview, setPreview] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [items, active]
  );

  // Close on ESC, nav with arrow keys
  useEffect(() => {
    if (preview === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
      if (e.key === "ArrowRight") setPreview((p) => (p === null ? null : (p + 1) % filtered.length));
      if (e.key === "ArrowLeft") setPreview((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview, filtered.length]);

  // Lock scroll while modal open
  useEffect(() => {
    document.body.style.overflow = preview !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [preview]);

  if (items.length === 0) {
    return (
      <div className="card p-12 text-center">
        <p className="text-[#a8bcd6]">No gallery items yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => {
          const on = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono text-[11px] tracking-wider uppercase px-4 py-2 rounded-full border transition-colors ${
                on
                  ? "bg-[#3B82F6] border-[#3B82F6] text-white"
                  : "bg-transparent border-white/15 text-[#a8bcd6] hover:text-white hover:border-[#3B82F6]"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-[#a8bcd6]">No items in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setPreview(idx)}
              className="group card overflow-hidden text-left"
            >
              <div className="relative w-full aspect-[4/3] bg-[#0B1F3A] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wider uppercase bg-[#3B82F6]/90 text-white rounded-full px-2.5 py-1">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <div className="text-[14px] font-semibold text-white truncate">
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Modal preview */}
      {preview !== null && filtered[preview] && (
        <div
          className="lightbox-overlay"
          onClick={() => setPreview(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setPreview(null); }}
            aria-label="Close preview"
            className="fixed top-5 right-5 z-[1001] w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreview((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));
            }}
            aria-label="Previous"
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/20"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreview((p) => (p === null ? null : (p + 1) % filtered.length));
            }}
            aria-label="Next"
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/20"
          >
            ›
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[min(900px,92vw)] max-h-[85vh] flex flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[preview].imageUrl}
              alt={filtered[preview].title}
              className="w-full max-h-[78vh] object-contain rounded-xl border border-[#3B82F6]/30 bg-[#0B1F3A]"
            />
            <div className="mt-4 text-center">
              <div className="font-mono text-[10px] tracking-wider uppercase text-[#60A5FA] mb-1">
                {filtered[preview].category}
              </div>
              <div className="text-[14px] text-white">
                {filtered[preview].title} &nbsp;·&nbsp; {preview + 1} / {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

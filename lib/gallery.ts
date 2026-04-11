import "server-only";
import { put, del, list } from "@vercel/blob";
import type { GalleryItem, GalleryCategory } from "./gallery-types";

export type { GalleryCategory, GalleryItem } from "./gallery-types";
export { GALLERY_CATEGORIES, isGalleryCategory } from "./gallery-types";

/**
 * Storage layout in Vercel Blob:
 *   gallery-index.json   →  array of GalleryItem (the metadata index)
 *   gallery/<id>.<ext>   →  uploaded image files
 *
 * The frontend keeps reading items[].imageUrl which now points at a Blob URL.
 */

const INDEX_PATHNAME = "gallery-index.json";

function genId(): string {
  return `g-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function getExtension(file: File): string {
  const fromName = file.name?.split(".").pop()?.toLowerCase();
  if (fromName && /^[a-z0-9]{2,5}$/.test(fromName)) return fromName;
  const fromType = file.type?.split("/").pop()?.toLowerCase();
  if (fromType && /^[a-z0-9]{2,5}$/.test(fromType)) return fromType;
  return "jpg";
}

async function findIndexBlob(): Promise<{ url: string } | null> {
  const { blobs } = await list({ prefix: INDEX_PATHNAME });
  const match = blobs.find((b) => b.pathname === INDEX_PATHNAME);
  return match ? { url: match.url } : null;
}

async function readIndex(): Promise<GalleryItem[]> {
  try {
    const meta = await findIndexBlob();
    if (!meta) return [];
    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? (data as GalleryItem[]) : [];
  } catch {
    return [];
  }
}

async function writeIndex(items: GalleryItem[]): Promise<void> {
  await put(INDEX_PATHNAME, JSON.stringify(items, null, 2), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
    addRandomSuffix: false,
    cacheControlMaxAge: 0,
  });
}

export async function readGallery(): Promise<GalleryItem[]> {
  return await readIndex();
}

export async function addGalleryItem(input: {
  title: string;
  category: GalleryCategory;
  file: File;
}): Promise<GalleryItem> {
  const id = genId();
  const ext = getExtension(input.file);
  const pathname = `gallery/${id}.${ext}`;

  const uploaded = await put(pathname, input.file, {
    access: "public",
    contentType: input.file.type || `image/${ext}`,
    addRandomSuffix: false,
  });

  const item: GalleryItem = {
    id,
    title: input.title.trim(),
    imageUrl: uploaded.url,
    category: input.category,
    createdAt: new Date().toISOString(),
  };

  const items = await readIndex();
  items.unshift(item);
  await writeIndex(items);

  return item;
}

export async function deleteGalleryItem(id: string): Promise<boolean> {
  const items = await readIndex();
  const target = items.find((x) => x.id === id);
  if (!target) return false;

  // Best-effort delete of the image file from Blob
  try {
    await del(target.imageUrl);
  } catch {
    // If the file was already removed or never existed, still drop from index
  }

  const next = items.filter((x) => x.id !== id);
  await writeIndex(next);
  return true;
}

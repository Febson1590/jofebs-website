import "server-only";
import { promises as fs } from "fs";
import path from "path";
import type { GalleryItem } from "./gallery-types";

export type { GalleryCategory, GalleryItem } from "./gallery-types";
export { GALLERY_CATEGORIES, isGalleryCategory } from "./gallery-types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "gallery.json");

async function ensureFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function readGallery(): Promise<GalleryItem[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeGallery(items: GalleryItem[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

export async function addGalleryItem(
  input: Pick<GalleryItem, "title" | "imageUrl" | "category">
): Promise<GalleryItem> {
  const items = await readGallery();
  const item: GalleryItem = {
    id: `g-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    title: input.title.trim(),
    imageUrl: input.imageUrl.trim(),
    category: input.category,
    createdAt: new Date().toISOString(),
  };
  items.unshift(item);
  await writeGallery(items);
  return item;
}

export async function deleteGalleryItem(id: string): Promise<boolean> {
  const items = await readGallery();
  const next = items.filter((x) => x.id !== id);
  if (next.length === items.length) return false;
  await writeGallery(next);
  return true;
}

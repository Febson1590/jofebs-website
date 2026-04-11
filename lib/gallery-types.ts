export type GalleryCategory =
  | "Tugboats"
  | "Barges"
  | "Houseboats"
  | "Field Work"
  | "Workers"
  | "Equipment";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Tugboats",
  "Barges",
  "Houseboats",
  "Field Work",
  "Workers",
  "Equipment",
];

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: GalleryCategory;
  createdAt: string;
}

export function isGalleryCategory(value: unknown): value is GalleryCategory {
  return typeof value === "string" && (GALLERY_CATEGORIES as string[]).includes(value);
}

import { NextResponse } from "next/server";
import {
  addGalleryItem,
  deleteGalleryItem,
  isGalleryCategory,
  readGallery,
} from "@/lib/gallery";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await readGallery();
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const data = body as { title?: unknown; imageUrl?: unknown; category?: unknown };
  const title = typeof data.title === "string" ? data.title.trim() : "";
  const imageUrl = typeof data.imageUrl === "string" ? data.imageUrl.trim() : "";
  const category = data.category;

  if (!title || !imageUrl) {
    return NextResponse.json(
      { error: "title and imageUrl are required" },
      { status: 400 }
    );
  }
  if (!isGalleryCategory(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const item = await addGalleryItem({ title, imageUrl, category });
  return NextResponse.json({ item }, { status: 201 });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const ok = await deleteGalleryItem(id);
  if (!ok) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

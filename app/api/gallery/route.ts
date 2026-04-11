import { NextResponse } from "next/server";
import {
  addGalleryItem,
  deleteGalleryItem,
  readGallery,
} from "@/lib/gallery";
import { isGalleryCategory } from "@/lib/gallery-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Vercel free plan supports up to ~4.5MB per route handler body. Phone photos are
// usually well under 8MB after compression — keep the cap conservative.
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ACCEPTED_TYPES = /^image\//;

export async function GET() {
  try {
    const items = await readGallery();
    return NextResponse.json({ items });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to read gallery" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Expected multipart/form-data body" },
      { status: 400 }
    );
  }

  const title = String(formData.get("title") ?? "").trim();
  const category = String(formData.get("category") ?? "");
  const file = formData.get("file");

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  if (!isGalleryCategory(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Image file is required" }, { status: 400 });
  }
  if (!ACCEPTED_TYPES.test(file.type || "")) {
    return NextResponse.json({ error: "File must be an image" }, { status: 400 });
  }
  if (file.size > MAX_FILE_BYTES) {
    return NextResponse.json(
      {
        error: `File too large. Max ${Math.round(MAX_FILE_BYTES / (1024 * 1024))}MB.`,
      },
      { status: 413 }
    );
  }

  try {
    const item = await addGalleryItem({ title, category, file });
    return NextResponse.json({ item }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    const ok = await deleteGalleryItem(id);
    if (!ok) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Delete failed" },
      { status: 500 }
    );
  }
}

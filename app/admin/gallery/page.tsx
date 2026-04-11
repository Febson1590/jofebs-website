import type { Metadata } from "next";
import { readGallery } from "@/lib/gallery";
import AdminGalleryClient from "./AdminGalleryClient";

export const metadata: Metadata = {
  title: "Admin · Gallery | Jofebs Global Concept Ltd",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const items = await readGallery();

  return (
    <>
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">ADMIN</span>
          <h1 className="h-display mt-5 mb-4">Gallery Manager</h1>
          <p className="lead max-w-2xl">
            Upload new photos directly from your device or camera and remove
            outdated ones. Images are stored in Vercel Blob and appear instantly
            on the Projects page.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#071528]">
        <div className="container-site">
          <AdminGalleryClient initialItems={items} />
        </div>
      </section>
    </>
  );
}

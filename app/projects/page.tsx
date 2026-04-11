import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { readGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Projects | Jofebs Global Concept Ltd",
  description:
    "Explore projects and work from Jofebs Global Concept Ltd. — tugboats, barges, houseboats, dredging, equipment and yard operations.",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const items = await readGallery();

  return (
    <>
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">OUR WORK</span>
          <h1 className="h-display mt-5 mb-6 max-w-3xl">
            Projects, Vessels &{" "}
            <span className="text-[#60A5FA]">Field Operations</span>
          </h1>
          <p className="lead max-w-2xl">
            A growing record of the vessels, dredging work and yard operations
            delivered by the Jofebs team. Filter by category to explore the
            work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#071528]">
        <div className="container-site">
          <GalleryGrid initialItems={items} />
        </div>
      </section>
    </>
  );
}

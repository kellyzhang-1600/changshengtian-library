"use client";

import { useEffect, useState } from "react";

export function FavoriteButton({ slug, labels }: { slug: string; labels: { save: string; saved: string } }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("cst-favorites") || "[]") as string[];
    setSaved(favorites.includes(slug));
  }, [slug]);

  function toggle() {
    const favorites = JSON.parse(localStorage.getItem("cst-favorites") || "[]") as string[];
    const next = favorites.includes(slug) ? favorites.filter((item) => item !== slug) : [...favorites, slug];
    localStorage.setItem("cst-favorites", JSON.stringify(next));
    setSaved(next.includes(slug));
  }

  return (
    <button type="button" onClick={toggle} className="border border-archive/20 px-4 py-2 text-sm text-archive hover:bg-archive hover:text-vellum">
      {saved ? labels.saved : labels.save}
    </button>
  );
}

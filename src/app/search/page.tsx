import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Krishna dry fruits, fresh nuts, chocolates, mukhwas and celebration boxes.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="px-5 py-20 text-stone-500">Searching…</div>}>
      <SearchResults />
    </Suspense>
  );
}

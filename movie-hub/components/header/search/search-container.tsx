"use client";

import SearchDesktop from "./search-desktop/search-desktop";
import SearchMobile from "./search-mobile/search-mobile";

export default function SearchContainer() {
  return (
    <>
      {/* Search icon hidden on mobile */}
      <SearchDesktop />

      {/* Search icon hidden on desktop */}
      <SearchMobile />
    </>
  );
}

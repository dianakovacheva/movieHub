"use client";

import SearchDesktop from "./search-desktop/search_desktop";
import SearchMobile from "./search-mobile/search_mobile";

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

"use client";

export default function Search() {
  return (
    <label className="input w-24 md:w-auto">
      <input type="search" required placeholder="Search" className="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
  );
}

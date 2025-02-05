export default function SearchDesktop() {
  return (
    <label className="hidden sm:input sm:input-md flex-none">
      <input type="text" placeholder="Search" className="w-24 md:w-auto" />
      <div className="hidden sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1.5em] w-[1.5em] opacity-50"
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
      </div>
    </label>
  );
}

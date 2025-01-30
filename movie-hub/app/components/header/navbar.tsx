"use client";

import Link from "next/link";
import BurgerMenu from "./burger_menu";
//import Swap from "./swap";
import WatchListBtn from "./watch_list_btn";
import SignIn from "./sign_in_btn";
import SearchContainer from "./search/search-container";

export default function Navbar() {
  return (
    <nav className="navbar flex flex-1 items-center gap-4">
      {/* Navbar left side */}
      <div className="navbar-start flex-row-reverse items-center justify-end sm:justify-start sm:flex-row gap-2">
        <Link href={"/"} className="text-xl font-bold">
          MovieHub
        </Link>
        <BurgerMenu />
      </div>
      <div className="flex gap-4 navbar-end order-2 w-full">
        {/* Search bar */}
        <div>
          <SearchContainer />
        </div>
        {/* Buttons right side */}
        <div className="flex gap-4">
          <WatchListBtn />
          <SignIn />
        </div>
      </div>
    </nav>
  );
}

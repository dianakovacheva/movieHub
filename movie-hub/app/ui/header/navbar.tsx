"use client";

import Link from "next/link";
import BurgerMenu from "./burger_menu";
import Search from "./search";
import Swap from "./swap";
import WatchListBtn from "./watch_list_btn";
import SignIn from "./sign_in_btn";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          MovieHub
        </Link>
        <div className="menu">
          <BurgerMenu />
        </div>
      </div>
      <div className="navbar-center">
        <Search />
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <WatchListBtn />
          <SignIn />
          <Swap />
        </div>
      </div>
    </div>
  );
}

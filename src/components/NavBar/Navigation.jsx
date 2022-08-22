import React from "react";
import NavLinks from "./NavLinks";

function Navigation() {
  const name = "<David M./>";

  return (
    <nav className="hidden sm:flex pl-5 gap-2 sm:justify-around py-6 flex-wrap px-2">
      <div>
        <a href="/" className="text-2xl text-yellow-500 pt-2">
          {name}
        </a>
      </div>
      <NavLinks />
    </nav>
  );
}

export default Navigation;

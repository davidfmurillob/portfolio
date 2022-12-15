import React from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function MobileNavigation() {
  const name = "<David M./>";

  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerOpen = (
    <AiOutlineMenu
      size="40px"
      className="text-slate-200 cursor-pointer absolute right-4 top-5"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );
  const hamburgerClose = (
    <AiOutlineClose
      size="40px"
      className="text-slate-200 cursor-pointer absolute right-4 top-5"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );

  const closeByLink = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex flex-col sm:hidden pl-5 gap-4 justify-around align-baseline py-6 bg-mygray-500 overflow-hidden">
      <div>
        <a href="https://davidfmurillob.github.io/portfolio/" className="text-2xl text-yellow-500 pt-2">
          {name}
        </a>
      </div>
      {openMenu ? hamburgerClose : hamburgerOpen}
      {openMenu && <NavLinks closeByLink={closeByLink} />}
    </nav>
  );
}

export default MobileNavigation;

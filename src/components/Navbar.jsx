

import { useState } from "react";
import { NAVIGATION_LINKS } from "../Data";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <>
    <nav className="fixed lg:flex hidden min-h-[5.4rem] px-6 w-[60rem] justify-center items-center shadow-md rounded-lg border border-stone-50/30 bg-black/20 backdrop-blur-lg">
      <ul className="flex relative w-full justify-around max-w-4xl">
        <span
          className={`bg-[#0ef] duration-500 ${NAVIGATION_LINKS[active].dis} border-4 border-red-300 border-t-0  border-t-yellow-100 h-16 w-16 absolute
          -top-11 rounded-full flex justify-center items-center transform translate-y-6`}
        >
          <div className="relative -mt-15">
            <span className="text-3xl text-white">
              {NAVIGATION_LINKS[active].icon}
            </span>
          </div>
        </span>
        {NAVIGATION_LINKS.map((menu, i) => (
          <li key={i} className="relative z-10 ">
            <a
              href={menu.href}
              className="flex flex-col items-center pt-6 cursor-pointer"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl duration-500 ${
                  i === active ? "text-transparent" : "text-white"
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-2 duration-700 opacity-100 text-white"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
   { /* for mobile screen */}
    <div className="lg:hidden flex">
    <MobileMenu/>
  </div>
  </>
  );
};

export default Navbar;

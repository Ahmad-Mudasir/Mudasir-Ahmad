import { useState } from "react";
import { NAVIGATION_LINKS } from "../Data";
const MobileMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="fixed inset-0 m-1 h-[70px] flex justify-between p-3 items-center shadow-md rounded-lg border border-stone-50/30 bg-black/20 backdrop-blur-lg">
      {/* For Logo */}
      <div>Ahmad Portfolio</div>

      {/* Menu icon */}
      <div
        className="flex  flex-col gap-1 cursor-pointer transition-all ease-in-out duration-700"
        onClick={() => setisOpen((prev) => !prev)}
      >
        <div
          className={`bg-white w-6 h-1 rounded-md ${
            isOpen ? "rotate-45" : " "
          } origin-left transition-all ease-in-out duration-700`}
        ></div>
        <div
          className={`bg-white w-4 h-1 rounded-md ${
            isOpen ? "opacity-0" : " "
          }`}
        ></div>
        <div
          className={`bg-white w-6 h-1 rounded-md ${
            isOpen ? "-rotate-45" : " "
          } origin-left   transition-all ease-in-out duration-700`}
        ></div>
      </div>

      <div
        className={`absolute ${
          isOpen
            ? "top-[70px]    p-10 h-[calc(100vh-200px)]"
            : "h-0 -top-2 opacity-0 "
        } transition-all ease-in-out duration-700  left-0 flex flex-col w-full justify-center items-center   shadow-md rounded-lg border border-stone-50/30 bg-black/70  backdrop-blur-3xl `}
      >
        {isOpen && (
          <ul className="flex flex-col relative w-full justify-around max-w-4xl">
            <span
              className={`bg-[#0ef] duration-500 ${NAVIGATION_LINKS[active].disMobile} border-4 border-red-300 border-t-0  border-t-yellow-100 h-16 w-16 absolute
          -top-5 rounded-full flex justify-center items-center transform left-1/2 -translate-x-1/2`}
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
                        ? "translate-y-2 duration-700 opacity-100 text-white font-bold"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {menu.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

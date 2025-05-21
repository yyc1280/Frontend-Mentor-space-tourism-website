import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [nowPage, setNowPage] = useState("home");

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between ">
      {/* logo */}
      <div className="">
        <img
          src="./src/assets/shared/logo.svg"
          alt="logo"
          className="w-10 m-6 lg:w-12 lg:m-15"
        />
      </div>

      <div className="hidden lg:block absolute left-[200px] right-[52vw] top-1/2 -translate-y-1/2 h-px bg-white/30 z-60" />

      {/* menu */}
      {/* <div className="hidden md:flex">
        <ul className="flex items-center gap-10 font-barlow-condensed text-base tracking-[2px] font-light">
          <li>
            <Link
              to="/"
              className="text-white  "
              onClick={() => setOpen(false)}
            >
              <span className="font-bold pr-2">00</span> HOME
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="text-white  "
              onClick={() => setOpen(false)}
            >
              <span className="font-bold pr-2">01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className="text-white   "
              onClick={() => setOpen(false)}
            >
              <span className="font-bold pr-2">02</span> CREW
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className="text-white   "
              onClick={() => setOpen(false)}
            >
              <span className="font-bold pr-2">03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div> */}

      {/* hamburger */}
      <button
        className="cursor-pointer z-40 md:hidden p-6"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <img src="./src/assets/shared/icon-hamburger.svg" alt="hamburger" />
      </button>

      {/* mobile menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70vw] max-w-xs 
            bg-[rgba(20,22,37,0.5)] shadow-lg transition-transform backdrop-blur-lg
            duration-300 ease-in-out z-50 flex flex-col items-end py-9 px-5  
            lg:w-[55vw]
            
            ${
              open ? "translate-x-0" : "translate-x-full"
            } 

             md:translate-none md:bg-[#ffffff]/5 md:h-22 md:flex-row 
             md:py-0 md:px-0 md:pt-0 md:pl-0 md:relative md:items-end md:w-[85vw] md:max-w-none
            `}
      >
        {/* close */}
        <button
          className="cursor-pointer right-0 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <img src="./src/assets/shared/icon-close.svg" alt="close" />
        </button>

        <ul
          className=" w-full pt-18 pl-4 space-y-7 font-barlow-condensed text-base tracking-[2px] font-light
        md:flex md:flex-row md:items-center md:space-y-0 md:pt-0  md:pr-[3%] md:gap-10 md:justify-end
        
        "
        >
          <li className="flex flex-col group cursor-pointer">
            <Link
              to="/"
              className="text-white  "
              onClick={() => {
                setOpen(false);
                setNowPage("home");
              }}
            >
              <span className="font-bold pr-2">00</span> HOME
            </Link>
            <span
              className={`hidden md:inline-block
                md:h-[5px] md:w-full md:transition-all md:duration-200 md:mt-7 
                md:hover:opacity-50 md:border-b-[3px] md:border-white
                ${nowPage === "home"
                  ? " opacity-100"
                  : " md:opacity-0 group-hover:opacity-50"}
             `}
            ></span>
          </li>
          <li className="flex flex-col group cursor-pointer">
            <Link
              to="/destination"
              className="text-white  "
              onClick={() => {
                setOpen(false);
                setNowPage("destination");
              }}
            >
              <span className="font-bold pr-2">01</span> DESTINATION
            </Link>
            <span
             className={`hidden md:inline-block
              md:h-[5px] md:w-full md:transition-all md:duration-200 md:mt-7 
              md:hover:opacity-50 md:border-b-[3px] md:border-white
              ${nowPage === "destination"
                ? " opacity-100"
                : " md:opacity-0 group-hover:opacity-50"}
           `}
            ></span>
          </li>
          <li className="flex flex-col group cursor-pointer">
            <Link
              to="/crew"
              className="text-white   "
              onClick={() => {
                setOpen(false);
                setNowPage("crew");
              }}
            >
              <span className="font-bold pr-2">02</span> CREW
            </Link>
            <span
              className={`hidden md:inline-block
                md:h-[5px] md:w-full md:transition-all md:duration-200 md:mt-7 
                md:hover:opacity-50 md:border-b-[3px] md:border-white
                ${nowPage === "crew"
                  ? " opacity-100"
                  : " md:opacity-0 group-hover:opacity-50"}
             `}
            ></span>
          </li>
          <li className="flex flex-col group cursor-pointer">
            <Link
              to="/technology"
              className="text-white   "
              onClick={() => {
                setOpen(false);
                setNowPage("technology");
              }}
            >
              <span className="font-bold pr-2">03</span> TECHNOLOGY
            </Link>
            <span
              className={`hidden md:inline-block
                md:h-[5px] md:w-full md:transition-all md:duration-200 md:mt-7 
                md:hover:opacity-50 md:border-b-[3px] md:border-white
                ${nowPage === "technology"
                  ? " opacity-100"
                  : " md:opacity-0 group-hover:opacity-50"}
             `}
            ></span>
          </li>
        </ul>
      </div>
      {/* mask */}
      {open && (
        <div
          className="fixed inset-0 bg-black/0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

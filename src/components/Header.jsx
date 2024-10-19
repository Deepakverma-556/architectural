import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const handleOverflow = () => {
        if (open && window.innerWidth < 1024) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      };
      handleOverflow();
      window.addEventListener("resize", handleOverflow);
      return () => {
        window.removeEventListener("resize", handleOverflow);
      };
    }, [open]);
  return (
    <section className="bg-gradient-to-r from-[#474747] to-[#222222] font-poppins pt-12">
      <nav>
        <div className="max-w-xxl mx-auto px-4 pb-9">
          <div className="w-full flex justify-between items-start">
            <div>
              <a href="" className="font-medium text-lg leading-7 text-white">
                General <br />{" "}
                <span className="font-bold text-2xl leading-9 text-blue">
                  Project
                </span>
              </a>
            </div>
            <ul className="flex items-center gap-14 max-lg:hidden">
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Home
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Services
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray text-nowrap"
                >
                  Find a Team
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  About
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Articals
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Portfolio
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray text-nowrap"
                >
                  Contact-us
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
            </ul>
            <div
              className="lg:hidden text-white z-20 text-4xl max-sm:text-3xl font-bold"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </div>
          </div>
          <div
            className={`w-full h-full bg-black transition-all duration-500 left-0 lg:-top-full z-10 fixed flex justify-center items-center ${
              open ? "top-0 left-0" : "-top-full"
            }`}
          >
            <ul className="flex flex-col justify-center items-center gap-14">
              <li>
                <a onClick={() => setOpen(open)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Home
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Services
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray text-nowrap"
                >
                  Find a Team
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  About
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Articals
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Portfolio
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(open)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray text-nowrap"
                >
                  Contact-us
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;

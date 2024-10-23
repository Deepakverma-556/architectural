import React from "react";
import { useState, useEffect } from "react";
import home from "../assets/images/sec-1-bg.webp";
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
    <section className="bg-gradient-to-r from-[#474747] to-[#222222] font-poppins pt-12 max-lg:pt-8 min-h-screen overflow-hidden">
      <nav>
        <div className="max-w-xxl mx-auto px-4 pb-9 max-lg:pb-6">
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
            className={`w-full h-full bg-black transition-all duration-500 left-0 lg:-top-full z-10 fixed flex justify-center items-center ${open ? "top-0 left-0" : "-top-full"
              }`}
          >
            <ul className="flex flex-col justify-center items-center gap-14 max-lg:gap-8">
              <li>
                <a
                  onClick={() => setOpen(open)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Home
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Services
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray text-nowrap"
                >
                  Find a Team
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  About
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Articals
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#"
                  className="font-medium text-lg leading-7 relative group text-gray"
                >
                  Portfolio
                  <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(open)}
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
      <div className="max-w-xxl mx-auto px-4 relative lg:pb-[52px]">
        <div className="bg-home max-lg:hidden w-full bg-cover bg-top absolute -right-60 h-full max-w-[698px] max-h-[741px]"></div>
        <div className="">
          <h2 className="font-medium text-xxxxxl max-lg:leading-tight max-lg:text-5xl leading-xxxl text-white lg:max-w-[654px]">
            We Provide Architectural design and Construction
          </h2>
          <p className="font-medium text-lg lg:max-w-[579px] leading-7 text-gray pt-6 pb-16 max-lg:pt-4 max-lg:pb-10">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </p>
          <button className="py-5 px-10 font-semibold text-base leading-6 text-white bg-gradient-to-r from-[#60bbee] to-blue shadow-[0px_10px_15px_0px] shadow-[#01739933]">
            Discover More
          </button>
        </div>
        <div className="flex gap-12 pt-10 max-lg:pt-7 lg:hidden">
          <div>
            <p className="font-bold text-4xl max-lg:text-3xl leading-xl text-white">
              300<span className="text-dark-blue">+</span>
            </p>
            <p className="max-w-24 font-semibold text-base leading-7 text-gray">
              Happy Client
            </p>
          </div>
          <div>
            <p className="font-bold text-4xl max-lg:text-3xl leading-xl text-white">
              900<span className="text-dark-blue">+</span>
            </p>
            <p className="max-w-24 font-semibold text-base leading-7 text-gray">
              Amazing projects
            </p>
          </div>
          <div>
            <p className="font-bold text-4xl max-lg:text-3xl leading-xl text-white">
              20<span className="text-dark-blue">+</span>
            </p>
            <p className="max-w-24 font-semibold text-base leading-7 text-gray">
              Awards Winning
            </p>
          </div>
        </div>
        <div className="lg:hidden max-w-96 mx-auto max-lg:pt-6">
          <img src={home} alt="sec-1-bg" />
        </div>
      </div>
      <div className="max-w-xxl mx-auto px-4">
        <div className="flex flex-wrap justify-between relative max-lg:hidden">
          <div className="w-full lg:w-4/12 ">
            <div className="flex gap-12 pb-16 ">
              <div>
                <p className="font-bold text-4xl leading-xl text-white">
                  300<span className="text-dark-blue">+</span>
                </p>
                <p className="max-w-24 font-semibold text-base leading-7 text-gray">
                  Happy Client
                </p>
              </div>
              <div>
                <p className="font-bold text-4xl leading-xl text-white">
                  900<span className="text-dark-blue">+</span>
                </p>
                <p className="max-w-24 font-semibold text-base leading-7 text-gray">
                  Amazing projects
                </p>
              </div>
              <div>
                <p className="font-bold text-4xl leading-xl text-white">
                  20<span className="text-dark-blue">+</span>
                </p>
                <p className="max-w-24 font-semibold text-base leading-7 text-gray">
                  Awards Winning
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 absolute -right-44 max-h-10 h-full">
            <div className="flex items-center max-xl:gap-4  gap-10 py-9 px-8 bg-gradient-to-r from-[#399fd8] via-[#0775b4] to-[#003756]">
              <p className="font-medium text-base leading-[44px] text-white">
                General <br />
                <span className="font-semibold text-2xl leading-9">
                  Project
                </span>
              </p>
              <div className="relative">
                <p className="font-bold text-4xl leading-10 text-white max-w-[117px]">
                  25
                  <span className="font-medium text-lg leading-7"> Years </span>
                  <span className="font-semibold text-2xl leading-9">
                    Operated
                  </span>
                </p>
                <div className="absolute top-0 right-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.90979 3.58678L9.20003 2.29883C9.41177 2.08717 9.6989 1.96826 9.99829 1.96826C10.2977 1.96826 10.5848 2.08717 10.7965 2.29883L12.0891 3.58792C12.3005 3.79976 12.5874 3.91896 12.8868 3.91934H14.9187C15.2181 3.91934 15.5053 4.0383 15.7171 4.25005C15.9288 4.4618 16.0478 4.74899 16.0478 5.04844V7.08037C16.0479 7.37952 16.1666 7.66641 16.3781 7.87805L17.6694 9.16829C17.8811 9.38003 18 9.66716 18 9.96655C18 10.2659 17.8811 10.5531 17.6694 10.7648L16.3792 12.0562C16.1666 12.2676 16.0478 12.5545 16.0478 12.8539V14.8858C16.0478 15.1853 15.9288 15.4724 15.7171 15.6842C15.5053 15.8959 15.2181 16.0149 14.9187 16.0149H12.8868C12.5876 16.015 12.3007 16.1338 12.0891 16.3452L10.7988 17.6366C10.5871 17.8482 10.3 17.9671 10.0006 17.9671C9.70118 17.9671 9.41405 17.8482 9.20232 17.6366L7.91093 16.3463C7.69951 16.1338 7.41267 16.0149 7.11325 16.0149H5.08132C4.45735 16.0149 3.95222 15.5098 3.95222 14.8858V12.8539C3.95222 12.5545 3.83337 12.2676 3.62195 12.0562L2.33057 10.7659C2.1189 10.5542 2 10.2671 2 9.96769C2 9.6683 2.1189 9.38117 2.33057 9.16943L3.61966 7.87691C3.8315 7.66545 3.9507 7.37854 3.95108 7.07923V5.0473C3.95108 4.74784 4.07004 4.46065 4.28179 4.2489C4.49353 4.03716 4.78072 3.9182 5.08018 3.9182H7.11211C7.41142 3.91782 7.69833 3.79862 7.90979 3.58678Z"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-8 max-w-[333px] text-white">
                As a trusted general project that has been operating for 25
                years, our commitment is always to prioritize our client
                satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden max-sm:py-5 max-sm:px-4 py-9 px-8 bg-gradient-to-r from-[#399fd8] via-[#0775b4] to-[#003756]">
          <div className="flex flex-wrap w-full items-center justify-between">
            <div className="w-1/2 md:w-2/12">
              <p className="font-medium text-base leading-3 text-white">
                General <br /> <br />
                <span className="font-semibold text-2xl leading-9">
                  Project
                </span>
              </p>
            </div>
            <div className="w-1/2 md:w-2/12">
              <div className="relative max-w-max">
                <p className="font-bold text-4xl leading-7 text-white max-w-[117px]">
                  25
                  <span className="font-medium text-lg leading-7"> Years </span>
                  <span className="font-semibold text-2xl leading-9">
                    Operated
                  </span>
                </p>
                <div className="absolute top-0 right-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.90979 3.58678L9.20003 2.29883C9.41177 2.08717 9.6989 1.96826 9.99829 1.96826C10.2977 1.96826 10.5848 2.08717 10.7965 2.29883L12.0891 3.58792C12.3005 3.79976 12.5874 3.91896 12.8868 3.91934H14.9187C15.2181 3.91934 15.5053 4.0383 15.7171 4.25005C15.9288 4.4618 16.0478 4.74899 16.0478 5.04844V7.08037C16.0479 7.37952 16.1666 7.66641 16.3781 7.87805L17.6694 9.16829C17.8811 9.38003 18 9.66716 18 9.96655C18 10.2659 17.8811 10.5531 17.6694 10.7648L16.3792 12.0562C16.1666 12.2676 16.0478 12.5545 16.0478 12.8539V14.8858C16.0478 15.1853 15.9288 15.4724 15.7171 15.6842C15.5053 15.8959 15.2181 16.0149 14.9187 16.0149H12.8868C12.5876 16.015 12.3007 16.1338 12.0891 16.3452L10.7988 17.6366C10.5871 17.8482 10.3 17.9671 10.0006 17.9671C9.70118 17.9671 9.41405 17.8482 9.20232 17.6366L7.91093 16.3463C7.69951 16.1338 7.41267 16.0149 7.11325 16.0149H5.08132C4.45735 16.0149 3.95222 15.5098 3.95222 14.8858V12.8539C3.95222 12.5545 3.83337 12.2676 3.62195 12.0562L2.33057 10.7659C2.1189 10.5542 2 10.2671 2 9.96769C2 9.6683 2.1189 9.38117 2.33057 9.16943L3.61966 7.87691C3.8315 7.66545 3.9507 7.37854 3.95108 7.07923V5.0473C3.95108 4.74784 4.07004 4.46065 4.28179 4.2489C4.49353 4.03716 4.78072 3.9182 5.08018 3.9182H7.11211C7.41142 3.91782 7.69833 3.79862 7.90979 3.58678Z"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 max-md:pt-4">
              <p className="text-sm leading-6 md:leading-8 text-white">
                As a trusted general project that has been operating for 25
                years, our commitment is always to prioritize our client
                satisfaction
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;

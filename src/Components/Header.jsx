import React, { useEffect } from "react";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiSearchLine,
  RiHeartPulseLine,
} from "@remixicon/react";

const Header = () => {
  useEffect(() => {
    const mobileNav = document.querySelector(".mnav");
    const closeBtn = document.querySelector(".mnav__close-btn");
    const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

    const navOpenedClass = "left-0";
    const navClosedClass = "-left-[300px]";
    const arrowLeftClass = "RiArrowLeftSLine";
    const arrowRightClass = "RiArrowRightSLine";

    const toggleNav = () => {
      if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.remove(navClosedClass);
        mobileNav.classList.add(navOpenedClass);

        closeBtnIcn.classList.remove(arrowRightClass);
        closeBtnIcn.classList.add(arrowLeftClass);
      } else {
        mobileNav.classList.remove(navOpenedClass);
        mobileNav.classList.add(navClosedClass);

        closeBtnIcn.classList.remove(arrowLeftClass);
        closeBtnIcn.classList.add(arrowRightClass);
      }
    };

    closeBtn.addEventListener("click", toggleNav);

    return () => {
      closeBtn.removeEventListener("click", toggleNav);
    };
  }, []);

  return (
    <div>
      <header className="py-8 lg:pt-6 lg:pb-14">
        <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
          <div className="flex justify-center lg:justify-normal">
            <a href="">
              <img
                src="/src/assets/header/logo.png"
                alt=""
                className="w-32 h-auto"
              />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0">
            <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
              <RiMapPin2Fill className="text-accent" />
              <div className="text-secondary">Grobogan</div>
            </div>
            <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
              <RiPhoneFill className="text-accent" />
              <div className="text-secondary">+1234567890</div>
            </div>
            <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
              Booking Now
            </button>

            {/* Mobile Nav */}
            <nav className="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20">
              <div className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                <RiArrowRightSLine className="mnav__close-btn-icon text-2xl text-white" />
              </div>

              {/* logo, list, form */}
              <div className="px-12 flex flex-col gap-y-12 h-full">
                <a href="">
                  <img
                    src="src/assets/header/logo.png"
                    alt=""
                    className="w-32 h-auto"
                  />
                </a>
                <ul className="flex flex-col gap-y-5">
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Department
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-seconodary hover:text-accent transition-all duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <form action="" className="relative flex gap-x-[10px]">
                  <label htmlFor="mnav-search-imput">
                    <RiSearchLine className="text-2xl text-accent" />
                  </label>
                  <input
                    type="text"
                    id="mnav-search-input"
                    placeholder="Search...."
                    className="outline-none w-[160px] border-b-2 hover:border-b-2 focus:border-accent placeholder:italic"
                  />
                </form>
              </div>
            </nav>

            {/* Desktop Nav */}
            <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-2xl hidden lg:flex lg:items-center lg:justify-between lg:px-[50]">
              <ul className="flex gap-x-5 mx-4">
                <li>
                  <a
                    href=""
                    className="border-r pr-4 text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="border-r pr-4 text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="border-r pr-4 text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Department
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="border-r pr-4 text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="border-r pr-4 text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-seconodary hover:text-accent transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <form action="" className="mx-4 relative flex gap-x-[10px]">
                <label
                  htmlFor="search-input"
                  className="flex justify-center items-center group"
                >
                  <RiSearchLine className="text-2xl text-accent" />
                </label>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
                />
              </form>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero bg-gray-100 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full">
            <div className="hero__text xl:w-[48%] text-center xl:text-left">
              <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                <RiHeartPulseLine className="text-2xl text-accent" />
                <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                  Live Your Life
                </div>
              </div>
              <h1 className="h1 mb-6">We Care About Your Health</h1>
              <p className="mb-[42px] md:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                aut provident iusto, voluptas ipsum nisi.
              </p>
              <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                Contact Us
              </button>
            </div>
            <div className="hero__img hidden xl:flex max-w-[814px] self-end">
              <img src="/src/assets/hero/docter.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="stats section">
        <div className="container mx-auto xl:mt-6">
          <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
            <div className="stats__items flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary hover:text-accent xl:mb-2">
                +3651
              </div>
              <div className="">Happy Patients</div>
            </div>

            <div className="stats__items flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary hover:text-accent xl:mb-2">
                33
              </div>
              <div className="">Total Branches</div>
            </div>

            <div className="stats__items flex-1 xl:border-r flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary hover:text-accent xl:mb-2">
                +40
              </div>
              <div className="">Senior Doctors</div>
            </div>

            <div className="stats__items flex-1  flex flex-col items-center">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary hover:text-accent xl:mb-2">
                +6
              </div>
              <div className="">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

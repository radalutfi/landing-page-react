import React from "react";
import {
  RiMapPinFill,
  RiMailFill,
  RiPhoneFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";
const Footer = () => {
  return (
    <div>
      <footer className="footer pt-12 xl:pt-[150px]">
        <div className="container mx-auto pb-12 xl:pb-[100px]">
          <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
            <div className="footer__item flex-1">
              <a href="">
                <img
                  src="src/assets/header/logo.png"
                  alt=""
                  className="w-32 mb-[30px]"
                />
              </a>
              <p className="mb-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                voluptates dolores iste.
              </p>
              <div className="flex flex-col gap-y-3 mb-10">
                <div className="flex items-center gap-x-[6px]">
                  <RiMapPinFill className="text-accent" />
                  <div className="">123 Grobogan, Jawa Tengah</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <RiMailFill className="text-accent" />
                  <div className="">youremail@gmail.com</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <RiPhoneFill className="text-accent" />
                  <div className="">+1234567890</div>
                </div>
              </div>
              <div className="flex gap-[14px] text-[30px]">
                <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                  <RiInstagramFill />
                </div>
                <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                  <RiTwitterFill />
                </div>
                <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                  <RiYoutubeFill />
                </div>
                <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                  <RiFacebookCircleFill />
                </div>
              </div>
            </div>
            <div className="footer__item flex-1">
              <h4 className="h4 mb-5">Quick Links</h4>
              <div className="flex gap-x-5">
                <ul className="flex-1 flex flex-col gap-y-5">
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Docter
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Booking
                    </a>
                  </li>
                </ul>

                <ul className="flex-1 flex flex-col gap-y-5">
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Faqs
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:text-accent transition-all duration-700"
                    >
                      Department
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__items flex-1">
              <h4 className="h4 mb-5">Opening House</h4>
              <div className="flex flex-col gap-5">
                <div className="flex-1">
                  <div className="flex justify-between items-center border-b pb-[10px]">
                    <div className="">Monday - Thursday</div>
                    <div className="text-accent font-medium">
                      8:00 Am - 6:00 Pm
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center border-b pb-[10px]">
                    <div className="">Friday - Saturday</div>
                    <div className="text-accent font-medium">
                      10:00 am - 4:00 pm
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center border-b pb-[10px]">
                    <div className="">Sunday</div>
                    <div className="text-accent font-medium">
                      Emergency only
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] border-t">
          <div className="container mx-auto text-left">
            <div className="font-light text-base">
              &copy: 2024 Rada Lutfi Mahcrus
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

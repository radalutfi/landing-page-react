import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="section testimonials bg-testi bg-cover bg-no-repeat bg-right py-12 xl:py-0">
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start">
        {/* Background Image */}
        <div className="hidden xl:flex xl:w-1/3 xl:justify-end">
          <img
            src="/src/assets/testi/img-1.png"
            alt="Background"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Slider */}
        <div className="w-full xl:w-2/3 xl:pr-8 xl:mt-32">
          <Slider {...settings}>
            <div className="flex flex-col items-center text-center px-4 py-6">
              <p className="font-light text-[15px] text-[#4c5354] leading-[190%] relative mb-7 ">
                <span className="mx-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis vitae sit praesentium voluptas, ullam deleniti
                  dolor non repellat.
                </span>
              </p>
              <div className="text-[26px] text-[#4c5354] font-semibold">
                James Rodri
              </div>
              <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                Customer
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4 py-6">
              <p className="font-light text-[15px] text-[#4c5354] leading-[190%] relative mb-7">
                <span className="mx-2">
                  Donec euismod nisl et nisi convallis, quis dictum odio
                  vehicula. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas.
                </span>
              </p>
              <div className="text-[26px] text-[#4c5354] font-semibold">
                Alex Smith
              </div>
              <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                Client
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4 py-6">
              <p className="font-light text-[15px] text-[#4c5354] leading-[190%] relative mb-7">
                <span className="mx-2">
                  Quisque convallis velit a efficitur hendrerit. Nullam bibendum
                  massa id arcu tincidunt, a ultrices ligula tincidunt.
                </span>
              </p>
              <div className="text-[26px] text-[#4c5354] font-semibold">
                Sara Johnson
              </div>
              <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                Patron
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiMailFill,
} from "@remixicon/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="team section">
        <div className="container mx-auto">
          <h2 className="team__title mb-[50px] h2 text-center xl:text-left">
            Our Team
          </h2>
          <Slider {...settings}>
            {[
              {
                name: "Dr. Jones Bone",
                title: "Pediatrician",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat dolorem.",
                img: "/src/assets/team/docter1.jpg",
              },
              {
                name: "Dr. Sarah Connor",
                title: "Dentist",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat dolorem.",
                img: "/src/assets/team/docter2.jpg",
              },
              {
                name: "Dr. Michael Brown",
                title: "Surgeon",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat dolorem.",
                img: "/src/assets/team/docter3.jpg",
              },
              {
                name: "Dr. Emily White",
                title: "Cardiologist",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat dolorem.",
                img: "/src/assets/team/docter4.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col xl:flex-row items-center gap-[30px]"
              >
                <div className="flex-1 flex xl:flex-row items-center gap-[30px]">
                  <div className="w-full xl:w-1/3 flex justify-center xl:justify-end">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-72 h-72 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="w-full xl:w-2/3 flex flex-col items-center xl:items-start text-center xl:text-left">
                    <h4 className="h3 mb-[10px]">{member.name}</h4>
                    <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                      {member.title}
                    </div>
                    <p className="font-light mb-[26px] max-w-[320px]">
                      {member.description}
                    </p>
                    <div className="flex gap-x-4 justify-center xl:justify-start">
                      <RiFacebookCircleFill className="text-accent-tertiary hover:text-accent cursor-pointer" />
                      <RiInstagramFill className="text-accent-tertiary hover:text-accent cursor-pointer" />
                      <RiPinterestFill className="text-accent-tertiary hover:text-accent cursor-pointer" />
                      <RiMailFill className="text-accent-tertiary hover:text-accent cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Team;

import React from "react";
import {
  RiHomeGearLine,
  RiWomenLine,
  RiFileList3Line,
  RiHospitalLine,
} from "@remixicon/react";

const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="bg-services bg-cover bg-no-repeat mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
          <div className="container mx-auto">
            <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
              <h2 className="h2 text-white flex-1 xl:mb-0 text-center xl:text-left">
                Our Best Services For Your Solution
              </h2>
              <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                atque dignissimos dolorem sunt facilis dolor quos?
              </p>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="container mx-auto mt-8 xl:-mt-[144px]">
          <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <RiHomeGearLine size={45} className="text-accent-tertiary" />
              </div>
              <h3 className="h3 mb-[10px]">General Praticioners</h3>
              <p className="font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                explicabo.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <RiWomenLine size={45} className="text-accent-tertiary" />
              </div>
              <h3 className="h3 mb-[10px]">Pregnancy Support</h3>
              <p className="font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                explicabo.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <RiFileList3Line size={45} className="text-accent-tertiary" />
              </div>
              <h3 className="h3 mb-[10px]">Nutritional Support</h3>
              <p className="font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                explicabo.
              </p>
            </div>

            <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <RiHospitalLine size={45} className="text-accent-tertiary" />
              </div>
              <h3 className="h3 mb-[10px]">Pharmaceutical Care</h3>
              <p className="font-light leading-normal max-w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                explicabo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

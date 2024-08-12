import React from "react";

const Brands = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
            <img
              src="src/assets/brands/brands1.png"
              alt=""
              className="w-32 h-32"
            />
            <img
              src="src/assets/brands/brands2.png"
              alt=""
              className="w-32 h-32"
            />
            <img
              src="src/assets/brands/brands3.png"
              alt=""
              className="w-32 h-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;

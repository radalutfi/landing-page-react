import React from "react";

const NewsLatter = () => {
  return (
    <div>
      <section className="newslater bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden">
        <div className="absolute left-0 bottom-0">
          <img src="src/assets/bg/pattern.jpg" alt="" className="opacity-10" />
        </div>
        <div className="newslater__container container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[50px]">
            <div className="flex-1 z-10 text-center md:text-left">
              <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
                Our Newslater
              </div>
              <h1 className="text-[60px] font-bold mb-4 text-white">
                Subscribe to Get More Updates
              </h1>
            </div>
            <form action="" className="flex-1">
              <div className="flex flex-col md:flex-row relative gap-y-4">
                <input
                  type="text"
                  className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
                  placeholder="Your Email Address"
                />
                <button className="btn btn-lg btn-white md:absolute right-0 ">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLatter;

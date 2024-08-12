import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto py-5">
          <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
            Our Recent Post
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
            {/* post 1 */}
            <div className="blog__post max-w-[420px] shadow-custom2 rounded-t-lg overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src="/src/assets/blog/blog1.jpg"
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Aug 8, 2024</div>
                <h4 className="h4 mb-[10px] hover:text-accent duration-700">
                  10 Foods Avoid For Heart
                </h4>
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  adipisci accusantium iste!...
                  <a
                    href=""
                    className="ml-1 italic underline text-[#4c5341] hover:text-accent duration-700"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className="blog__post max-w-[420px] shadow-custom2 rounded-t-lg overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src="/src/assets/blog/blog2.jpg"
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Aug 9, 2024</div>
                <h4 className="h4 mb-[10px] hover:text-accent duration-700">
                  10 Foods Avoid For Heart
                </h4>
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  adipisci accusantium iste!...
                  <a
                    href=""
                    className="ml-1 italic underline text-[#4c5341] hover:text-accent duration-700"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className="blog__post max-w-[420px] shadow-custom2 rounded-t-lg overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src="/src/assets/blog/blog3.jpg"
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Aug 10, 2024</div>
                <h4 className="h4 mb-[10px] hover:text-accent duration-700">
                  10 Foods Avoid For Heart
                </h4>
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  adipisci accusantium iste!...
                  <a
                    href=""
                    className="ml-1 italic underline text-[#4c5341] hover:text-accent duration-700"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-accent">Read More Blogs</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;

import React from "react";

function Footer() {
  return (
    <div
    //   data-scroll
    //   data-scroll-section
    //   data-scroll-speed="-0.1"
      className="w-full h-screen bg-zinc-900 p-13 rounded-xl"
    >
      <div className="w-full grid grid-cols-12 gap-4 pt-8">
        <div className="col-span-6">
          <h1 className=" text-[10vw] uppercase leading-26 font-[FoundersGrotesk]">
            Eye-
          </h1>
          <h1 className=" text-[10vw] uppercase leading-26 font-[FoundersGrotesk]">
            Opening
          </h1>
        </div>
        <div className="col-span-6">
          <h1 className="text-[10vw] uppercase leading-26 font-[FoundersGrotesk]">
            presentations
          </h1>
          <div className="links mt-5">
            {["instagram", "facebook", "behance", "linkedin"].map(
              (items, index) => (
                <a
                  key={index}
                  className={`block text-md font-[NeueMontreal] font-light capitalize mt-1 underline`}
                >
                  {items}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

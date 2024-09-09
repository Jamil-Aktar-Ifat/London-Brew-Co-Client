import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/yf0qvpt/3.png)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="md:py-52 text-left md:pl-[600px]">
            <h1 className="mb-5 text-5xl font-bold text-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-raleway">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="border px-3 py-1 bg-none hover:bg-[#E3B577] hover:text-black text-rancho text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

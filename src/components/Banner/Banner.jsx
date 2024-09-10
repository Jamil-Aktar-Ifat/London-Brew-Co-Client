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
      <div className="bg-[#ECEAE3] py-9 md:px-72">
        <div className="pl-5 md:pl-0 md:flex items-center justify-around">
          <div className="space-y-2">
            <img src="../../../public/images/icons/1.png" alt="" />
            <h2 className="text-rancho text-3xl">Awesome Aroma</h2>
            <p className="text-raleway">
              You will definitely be a fan of the design <br /> & aroma of your
              coffee
            </p>
          </div>
          <div className="space-y-2">
            <img src="../../../public/images/icons/2.png" alt="" />
            <h2 className="text-rancho text-3xl">High Quality</h2>
            <p className="text-raleway">
              We served the coffee to you maintaining <br /> the best quality
            </p>
          </div>
          <div className="space-y-2">
            <img src="../../../public/images/icons/3.png" alt="" />
            <h2 className="text-rancho text-3xl">Pure Grades</h2>
            <p className="text-raleway">
              The coffee is made of the green coffee beans <br /> which you will
              love
            </p>
          </div>
          <div className="space-y-2">
            <img src="../../../public/images/icons/4.png" alt="" />
            <h2 className="text-rancho text-3xl">Proper Roasting</h2>
            <p className="text-raleway">
              Your coffee is brewed by first roasting <br /> the green coffee
              beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center ">
          <h1 className="text-raleway">--- Sip & Savor ---</h1>
          <h2 className="text-rancho text-6xl text-[#4c322c]">
            Our Popular Products
          </h2>
        </div>
        <div className="text-center mt-5 mb-8">
          <Link
            to="/addCoffee"
            className="border px-3 py-1.5  bg-[#E3B577] hover:bg-transparent text-white hover:text-black hover:shadow-xl text-rancho text-lg"
          >
            Add Coffee
          </Link>
        </div>
        <div className=" grid md:grid-cols-2 gap-5  ">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>

      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;

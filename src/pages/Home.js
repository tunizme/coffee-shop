import React from "react";
import DrinkCard from "../components/DrinkCard";
import MenuBanner from "../components/MenuBanner";
import { Link } from "react-router-dom";
import CoffeeStory from "../components/CoffeeStory";
const Home = () => {
  const result = [
    {
      title: "Espresso Avicii",
      description:
        "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
      ingredients: [
        "Espresso",
        "Whiskey",
        "Ice cream",
        "Chocolate",
        "Foamed milk",
      ],
      image: "../img/espresso.jpg",
      id: 0,
    },
  ];
  return (
    <main id="home" className="w-full">
      <section className="w-full py-20">
        <div className="w-full">
          <img
            src="https://cdn.trungnguyenlegend.com/wp-content/uploads/2019/10/ky15-bia.jpg"
            alt="banner"
            className="object-cover m-auto"
          />
        </div>
      </section>
      <section className="w-11/12 md:container xl:w-9/12 py-20 mx-auto">
        <div className="grid grid-cols-1 lg:gap-8 gap-4">
          <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
            <MenuBanner />
            <div className="grid grid-cols-2 md:gap-10 lg:gap-8 gap-4">
              <DrinkCard bestSeller data={result[0]} key="0" />
              <DrinkCard bestSeller data={result[0]} key="1" />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-10 lg:gap-8 gap-4">
            <DrinkCard bestSeller data={result[0]} key="2" />
            <DrinkCard bestSeller data={result[0]} key="3" />
            <DrinkCard bestSeller data={result[0]} key="4" />
            <DrinkCard bestSeller data={result[0]} key="5" />
          </div>
        </div>
      </section>
      <section className="lg:py-20">
        <div className="flex justify-center">
          <img src="../img/flow.png" width={300} alt="" />
        </div>
      </section>
      <section className="w-11/12 m-auto py-20">
        <div className="flex items-center justify-center flex-col">
          <h3>Our Way</h3>
          <p className="lg:w-6/12 w-full py-8 font-light tracking-widest text-center">
            September is a micro roastery in Ottawa, Canada. We exist to
            highlight beautiful coffees by working in partnership and
            relationship with coffee producers and farmers around the world.
          </p>
          <Link
            to="about"
            className="text-sm px-6 py-3 bg-[--color-icon] rounded-md"
          >
            ABOUT US
          </Link>
        </div>
      </section>
      <section className="lg:w-9/12 w-11/12 m-auto py-20">
        <CoffeeStory />
      </section>
      <section className="w-full py-20 relative">
        <img
          className="object-cover w-full h-[400px]"
          src="../img/contact-image.webp"
          alt="contact-banner"
        />
        <div className="absolute top-[25%] left-10 right-10 lg:top-[32%] lg:left-auto lg:right-[10%]">
          <div className="rounded-xl px-6 py-8 bg-[#f6f3ed]">
            <h6 className="font-medium tracking-wider text-sm">
              SUBSCRIBE TO OUR NEWSLETTER
            </h6>
            <p className="mt-5 text-sm font-light tracking-wide">
              Promotions, deals, new products and sales. Directly to your inbox.
            </p>
            <form className="flex lg:flex-row flex-col mt-8 gap-2">
              <div className="relative">
                <div className="absolute h-6 w-14 top-[-12px] left-5"></div>
                <label
                  htmlFor=""
                  className="absolute top-[-12px] left-7 bg-[#f6f3ed]"
                >
                  Email
                </label>
                <input
                  required
                  placeholder="Write your email"
                  type="email"
                  className="border-2 lg:w-[360px] w-full bg-transparent border-gray-500 focus:outline-none p-3 rounded-lg"
                />
              </div>
              <button
                className="p-3 w-full bg-[#e1a184] rounded-lg"
                type="submit"
              >
                <span className="text-white font-medium tracking-wide">
                  SUBSCRIBE
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

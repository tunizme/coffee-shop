import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
const CoffeeStory = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="rounded-full overflow-hidden lg:w-full w-9/12 m-auto">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="../img/coffee-story1.jpg"
              alt="story"
              className="object-contain w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../img/coffee-story2.jpg"
              alt="story"
              className="object-contain w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-10 gap-4">
        <h3>Coffee Story</h3>
        <p className="font-light tracking-widest text-justify">
          Storm Series coffees are sweet, bodied and well rounded. They remind
          us of the sweetness of caramels, chocolates, roasted nuts, dried
          fruit, brown sugars etc. Great for traditional espresso or as a
          comfortable filter coffee. Storm series are like it's name... big,
          sweet, and cozy inside by the fire.
        </p>
      </div>
    </div>
  );
};

export default CoffeeStory;

import React from "react";
import { Link } from "react-router-dom";

const DrinkCard = ({ data, bestSeller = false }) => {
  return (
    <div>
      <div className="w-full bg-inherit">
        <Link
          to={`${data.id}`}
          className={`inline-block w-full md:h-[300px] sm:h-[360px] h-[270px] ${
            bestSeller && "h-[260px] sm:h-[360px] md:h-[400px] lg:h-[300px]"
          } rounded-xl overflow-hidden shadow-lg shadow-stone-500`}
        >
          <img
            src={data.image?.length > 10 ? data.image : "../img/ske.jpg"}
            alt="coffee"
            className="object-cover h-full w-full"
          />
        </Link>
      </div>
      <div className="mt-1 pb-10">
        <h3 className="font-medium text-lg">
          <Link
            className="inline-block hover:text-[--color-icon] duration-200"
            to="menu"
          >
            {data.title}
          </Link>
        </h3>
        <p className="text-sm text-[#00000099]">40.000 đ</p>
      </div>
    </div>
  );
};

export default DrinkCard;

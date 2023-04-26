import React from "react";
import DrinkCard from "./DrinkCard";
const Products = ({ data }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-8 gap-4 mt-2">
        {data && data.map((data) => <DrinkCard data={data} key={data.id} />)}
      </div>
    </>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";

const MenuBanner = () => {
  return (
    <div>
      <Link
        to="menu"
        className="inline-block rounded-xl overflow-hidden shadow-lg shadow-stone-500"
      >
        <img src="../img/banner1.png" alt="coffee" className="object-contain" />
      </Link>
    </div>
  );
};

export default MenuBanner;

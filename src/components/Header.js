import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { RiEBike2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    if (!nav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
    setNav((pre) => !pre);
  };

  return (
    <>
      <header className="flex bg-[--color-bg-header] py-3 px-2 items-center justify-center">
        <ul className="flex items-center justify-center lg:gap-40 md:gap-4 gap-2">
          <li className="flex items-center gap-1">
            <span>
              <HiOutlineLocationMarker size={20} color="#e0c0a9" />
            </span>
            <p className="text-xs md:text-sm font-medium text-[--color-text]">
              01 Cửa hàng khắp cả nước
            </p>
          </li>
          <li className="flex items-center gap-1">
            <span>
              <HiOutlinePhone size={20} color="#e0c0a9" />
            </span>
            <p className="text-xs md:text-sm font-medium text-[--color-text]">
              Đặt hàng: 0969721480
            </p>
          </li>
          <li className="flex items-center gap-1">
            <span>
              <RiEBike2Line size={20} color="#e0c0a9" />
            </span>
            <p className="text-xs md:text-sm font-medium text-[--color-text]">
              Free ship từ 70k
            </p>
          </li>
        </ul>
      </header>
      <header className="w-full h-16 sticky top-0 bg-[--color-bg] z-10 shadow-md">
        <div className="w-full h-full">
          <div className="h-full hidden md:flex items-center justify-between lg:px-48 px-20">
            <Link to="/">
              <a href="#home">
                <img
                  src="../img/style-of-coffee-logo.png"
                  width={54}
                  alt="../img/ske.jpg"
                  className="object-cover"
                />
              </a>
            </Link>
            <ul className="hidden md:flex gap-10">
              <NavLink to="menu" className="font-medium">
                Menu
              </NavLink>
              <NavLink to="menu" className="font-medium">
                Cà Phê
              </NavLink>
              <NavLink className="font-medium">Cửa hàng</NavLink>
              <NavLink className="font-medium">Tuyển dụng</NavLink>
            </ul>
          </div>
          <div className="h-full md:hidden flex items-center justify-center px-12 relative">
            <button onClick={handleNav} className="absolute left-[5%]">
              <AiOutlineMenu size={25} />
            </button>
            <Link to="/">
              <img
                src="../img/style-of-coffee-logo.png"
                width={54}
                alt="../img/ske.jpg"
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </header>

      <aside
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[9999] overflow-y-hidden"
            : "z-[9999]"
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-[5000px] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-150%] h-screen w-[60%] top-0 ease-in duration-500 z-[9999]"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link onClick={handleNav} to="/">
                <img
                  src="../img/style-of-coffee-logo.png"
                  width={100}
                  alt="../img/ske.jpg"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li onClick={handleNav} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link to="menu">
                <li onClick={handleNav} className="py-4 text-sm">
                  Coffee
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;

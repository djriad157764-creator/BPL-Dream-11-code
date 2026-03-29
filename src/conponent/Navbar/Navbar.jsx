import React from "react";
import Logo from "../../assets/logo.png";
import Currency from "../../assets/Currency.png";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar w-full sticky top-0 z-10 max-w-[1320px] mx-auto justify-between  bg-transparent backdrop-blur-xl shadow-sm px-4">
      <div className="flex items-center">
        <img className="w-[73px] h-auto" src={Logo} alt="Navbar Image" />
      </div>
      <div className=" flex items-center gap-12">
        <ul className="hidden sm:flex gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
        </ul>
        <ThemeSwitcher></ThemeSwitcher>
        <div className="flex  items-center text-yellow-700 gap-2.5 py-4 px-5 border-2 border-neutral/10 rounded-xl">
          <p className="font-bold text-xl">
            <span className="mr-2.5">${coin}</span>Coin
          </p>
          <img className="w-5 h-5" src={Currency} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

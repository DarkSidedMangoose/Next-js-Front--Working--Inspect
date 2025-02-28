"use clients";

import React from "react";
import "../styles.css";
const NavbarSlide: React.FC<{
  navbarClicked: boolean | null;
  onClickHandler: (arg: boolean) => void;
}> = ({ navbarClicked, onClickHandler }) => {
  return (
    <div
      className={` ${
        navbarClicked
          ? "flex animation"
          : navbarClicked === false
          ? "animation-back"
          : "hidden"
      } text-2xl  h-full right-0 fixed z-10 bg-[#734646] w-[70%]   text-colorLightGreen  flex-col   `}
    >
      <div className="w-full h-1/2 justify-evenly  items-center  relative flex flex-col ">
        <p
          className="border-b-2 border-colorLightGreen"
          onClick={() => {
            onClickHandler(false);
          }}
        >
          Mans
        </p>
        <p className="border-b-2 border-colorLightGreen">Support</p>
        <p className="border-b-2 border-colorLightGreen">Login</p>
      </div>
    </div>
  );
};

export default NavbarSlide;

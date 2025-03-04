import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo.png";
import Navbar from "../../../../public/navbar.png";

const Navitem: React.FC<{ identifyGenderWhole: string }> = ({
  identifyGenderWhole,
}) => {
  return (
    <nav className="bg-[#FFF] z-20  w-full h-14 md:h-[90px] null:fixed null:top-0 flex justify-between  items-center shadow-bottom-right">
      <Image src={Logo} width={56} height={56} alt="navbar"></Image>
      <div className="flex md:w-[70%] md:justify-between h-full items-center md:px-[2%] text-[#000000af]  ">
        <p className="  border-b-2 border-[#c1c08e8c] cursor-pointer  md:hover:mb-3 transition-all duration-300 ease  ">
          {identifyGenderWhole}
        </p>
        <p className="  hidden md:flex cursor-pointer   hover:mb-3 transition-all duration-300 ease ">
          {identifyGenderWhole === "ქალბატონები" ? "მამაკაცები" : "ქალბატონები"}
        </p>
        <p className=" hidden md:flex cursor-pointer  hover:mb-3 transition-all duration-300 ease">
          ჩვენს შესახებ
        </p>
        <p className=" hidden md:flex cursor-pointer  hover:mb-3 transition-all duration-300 ease">
          ავტორიზაცია
        </p>
      </div>

      <Image src={Navbar} alt="navbar" className="md:hidden"></Image>
    </nav>
  );
};

export default Navitem;

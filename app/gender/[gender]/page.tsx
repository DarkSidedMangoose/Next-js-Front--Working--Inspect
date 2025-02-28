"use client";
import Image from "next/image";
import "./styles.css";
import Navbar from "@/public/navbar.png";
import DropDowns from "./_resources/dropDowns";
import { useState, useEffect } from "react";
import PriceSlider from "./_resources/priceSlider";
import Link from "next/link";
import NavbarSlide from "./_resources/navbarSlide";
import GenderSection from "./_resources/section";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [size, setSize] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");
  const [navbarClicked, setNavbarClicked] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchData() {
      const genderWhole = (await params).gender;
      setIdentifyGenderWhole(genderWhole);
    }
    fetchData();
  }, [params]);
  const handleNavbarClick = (arg: boolean) => {
    setNavbarClicked(arg);
  };
  const sizes = ["sm", "m", "lg", "xl", "2xl"];
  const models = ["Zara", "Boss", "Levi's", "Calvin Klein"];
  const navs = [
    `${identifyGenderWhole === "womans" ? "მამაკაცები" : "ქალები"}`,
    "Support",
    "Login",
  ];
  const handleChangeSizes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };
  const handleChangeModels = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value);
  };

  return (
    <div className="bg-[#a6b9c974] w-screen h-screen mainGridGender">
      <NavbarSlide
        navbarClicked={navbarClicked}
        onClickHandler={handleNavbarClick}
      />
      {/* <header className="flex w-full    h-[100px]   text-3xl justify-center items-center  font-vintage rounded-bl-xl rounded-br-xl text-mainTextCol">
        <div className="w-[95%] h-[90%] bg-[#ecf0f1] flex justify-center items-center rounded-2xl shadow-all-directions">
          {identifyGenderWhole}
        </div>
      </header> */}
      <aside className="w-full h-full flex justify-end items-center    ">
        <Image
          src={Navbar}
          onClick={() => setNavbarClicked(true)}
          alt="navbar"
          className={` h-[50px] w-auto mr-[2%] xsToMedium:hidden  z-20 opacity-90 rounded-2xl ${
            navbarClicked ? "hidden" : ""
          }`}
        />
        <nav className="w-full h-full null:hidden xsToMedium:flex ">
          <ul className="w-full h-full flex justify-evenly  text-xl">
            {navs.map((char, index) => (
              <Link
                key={char}
                href={`${
                  char === "Mans"
                    ? "/gender/mans"
                    : char === "Support"
                    ? "/support"
                    : char === "Login"
                    ? "/login"
                    : "/gender/womans"
                }`}
              >
                <ul key={index} className="flex cursor-pointer">
                  <p key={index} className={`${"text-mainTextCol"}`}>
                    {char}
                  </p>
                </ul>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
      {/* <section
        style={{ fontFamily: "Vintage", transition: "ease-in 0.5s" }}
        className="w-[95%] xsToMedium:w-[400px] h-[250px] bg-[#e74d3c2d]  text-mainTextCol text-2xl  rounded-lg flex justify-center items-center "
      >
        <div className="w-[96%] h-[96%]  rounded-xl shadow-all-directions">
          <div className="grid-section w-full h-full">
            <article className="w-full flex justify-center Genders-first  items-center">
              <h1 className="w-auto h-1/2   pl-5 pr-5  border-mainTextCol">
                Filter
              </h1>
            </article>
            <div className="w-full h-full border-b-2 border-mainTextCol flex justify-center Genders-second">
              <input
                type="text"
                className="w-50% h-5/6 bg-[#ffffffa0] rounded-lg opacity-100 shadow-custom-shadow text-sm text-mainTextCol outline-none placeholder-style"
                placeholder="...Search"
              />
            </div>
            <div className="w-full h-full flex justify-start  items-center Genders-third ">
              <DropDowns
                whichOne="size"
                identifier={sizes}
                selected={size}
                onChange={handleChangeSizes}
              />
            </div>
            <div className="w-full h-full flex justify-between Genders-fourth">
              <PriceSlider />
            </div>
            <div className="w-full h-full flex justify-start  items-center Genders-fifth">
              <DropDowns
                whichOne="model"
                identifier={models}
                selected={model}
                onChange={handleChangeModels}
              />
            </div>
            <div className="w-full h-full flex  Genders-sixth justify-center items-center ">
              <button
                type="submit"
                className="w-[calc(100%-1.5rem)] h-[68%] text-lg bg-[#ffffffa0] shadow-custom-shadow rounded-lg"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* <main className="w-[95%] h-full">
        <GenderSection />
      </main> */}
    </div>
  );
};

export default GenderProduct;

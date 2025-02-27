"use client";
import Image from "next/image";
import "./styles.css";
import Navbar from "@/public/navbar.png";
import DropDowns from "./_resources/dropDowns";
import { useState, useEffect } from "react";
import PriceSlider from "./_resources/priceSlider";
import Link from "next/link";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [size, setSize] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");
  const [identifyGender, setIdentifyGender] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const gender = (await params).gender.split("");
      const genderWhole = (await params).gender;
      setIdentifyGender(gender);
      setIdentifyGenderWhole(genderWhole);
    }
    fetchData();
  }, [params]);

  const sizes = ["sm", "m", "lg", "xl", "2xl"];
  const models = ["Zara", "Boss", "Levi's", "Calvin Klein"];
  const navs = [
    `${identifyGenderWhole === "womans" ? "Mans" : "Womans"}`,
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
    <div className="bg-colorLightGreen w-screen h-screen flex flex-col items-center">
      <header className="flex w-full   h-[100px]  text-3xl justify-center items-center font-vintage">
        {identifyGender.map((e, i) => (
          <p
            className={`${i === 0 || i % 2 === 0 ? "text-mainTextCol" : ""}`}
            key={i}
          >
            {e}
          </p>
        ))}
      </header>
      <aside className="w-full h-12 flex justify-end items-center  ">
        <Image
          src={Navbar}
          alt="navbar"
          className="h-full w-auto pr-3 xsToMedium:hidden"
        />
        <nav className="w-full h-full null:hidden xsToMedium:flex ">
          <ul className="w-full h-full flex justify-evenly items-center text-xl">
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
                  {char.split("").map((charNd, indexNd) => (
                    <p
                      key={indexNd}
                      className={`${
                        indexNd === 0 || indexNd % 2 === 0
                          ? "text-mainTextCol"
                          : null
                      }`}
                    >
                      {charNd}
                    </p>
                  ))}
                </ul>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
      <section
        style={{ fontFamily: "Vintage", transition: "ease-in 0.5s" }}
        className="w-full xsToMedium:w-[400px] h-[200px] mt-10 bg-background shadow-bottom-right text-mainTextCol text-2xl grid-section "
      >
        <article className="w-full flex justify-center Genders-first">
          <h1 className="w-auto h-1/6">Filter</h1>
        </article>
        <div className="w-full h-full border-b-2 border-mainTextCol flex justify-center Genders-second">
          <input
            type="text"
            className="w-50% h-5/6 bg-[#ffffffa0] rounded-lg opacity-100 text-sm text-mainTextCol outline-none placeholder-style"
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
        <div className="w-full h-full flex  Genders-sixth ">
          <div className=""></div>
        </div>
      </section>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default GenderProduct;

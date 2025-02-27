"use client";
import Image from "next/image";
import "./styles.css";
import Navbar from "@/public/navbar.png";
import DropDowns from "./_resources/dropDowns";
import { useState, useEffect } from "react";
import PriceSlider from "./_resources/priceSlider";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [size, setSize] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [identifyGender, setIdentifyGender] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const gender = (await params).gender.split("");
      setIdentifyGender(gender);
    }
    fetchData();
  }, [params]);

  const sizes = ["sm", "m", "lg", "xl", "2xl"];
  const models = ["Zara", "Boss", "Levi's", "Calvin Klein"];
  const handleChangeSizes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };
  const handleChangeModels = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value);
  };

  return (
    <div className="bg-colorLightGreen w-screen h-screen">
      <header className="flex w-full h-[100px] text-3xl justify-center items-center font-vintage">
        {identifyGender.map((e, i) => (
          <p
            className={`${i === 0 || i % 2 === 0 ? "text-mainTextCol" : ""}`}
            key={i}
          >
            {e}
          </p>
        ))}
      </header>
      <aside className="w-full h-12 flex justify-end items-center">
        <Image src={Navbar} alt="navbar" className="h-full w-auto pr-3" />
      </aside>
      <section
        style={{ fontFamily: "Vintage" }}
        className="w-full h-[200px] mt-10 bg-background shadow-bottom-right text-mainTextCol text-2xl grid-section "
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
        <div className="w-full h-full flex justify-start  items-center Genders-third">
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

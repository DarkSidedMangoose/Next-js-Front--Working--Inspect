"use client";
import "./styles.css";
import Navbar from "../../../public/navbar.png";
import Logo from "../../../public/logo.png";
import { useState, useEffect, useCallback } from "react";
import Filters from "./_resources/filter";
import Filter from "../../../public/Filter2.png";

import Cart from "../../../public/Cart3.png";
import Image from "next/image";
import ProductCart from "./_resources/productCart";
import FirstShirt from "../../../public/shirt.jpg";
import SecondShirt from "../../../public/shirt2.jpg";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");
  const [filter, setFilter] = useState<boolean | null>(true);

  useEffect(() => {
    async function fetchData() {
      const genderWhole = (await params).gender;
      if (genderWhole === "womans") {
        setIdentifyGenderWhole("ქალბატონები");
      } else {
        setIdentifyGenderWhole("მამაკაცები");
      }
    }
    fetchData();
  }, [params]);
  const handleSetFilter = useCallback((arg: boolean) => {
    setFilter(arg);
  }, []);
  const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  // bg - [#FEF7FF];
  return (
    <div className="bg-[#FFF7FE] w-[99.9%] min-h-[80%] h-auto font-georgian  ">
      <nav className="bg-[#FFF]  w-full h-14 null:fixed null:top-0 flex justify-between  items-center">
        <Image src={Logo} className="w-14 h-14 " alt="navbar"></Image>
        <div className="flex md:w-[70%] md:justify-between md:px-[2%] text-mainTextCol ">
          <p className=" font-bold  ">{identifyGenderWhole}</p>
          <p className=" hidden md:flex">
            {identifyGenderWhole === "ქალბატონები"
              ? "მამაკაცები"
              : "ქალბატონები"}
          </p>
          <p className="hidden md:flex">ჩვენს შესახებ</p>
          <p className="hidden md:flex">ავტორიზაცია</p>
        </div>

        <Image src={Navbar} alt="navbar" className="md:hidden"></Image>
      </nav>
      <section
        className={` ${
          filter === null
            ? "h-12 md:h-24 w-12 md:w-24"
            : !filter
            ? "h-12 md:h-24 w-12 md:w-24"
            : "hidden"
        } fixed flex justify-center items-center top-[20%] left-0 `}
      >
        <Image
          src={Filter}
          alt="Filter"
          onClick={() => setFilter(true)}
          className={`${filter ? "hidden" : ""} w-full h-full cursor-pointer`}
        ></Image>
      </section>
      <div
        className={`fixed top-[20%] w-[241px] h-[399px] bg-[#FEF7FF] flex justify-center items-center shadow-lg   ${
          filter === null ? "" : !filter ? "animation-off" : "animation-on"
        } `}
      >
        <Filters
          submitHandler={submitHandler}
          setFilter={handleSetFilter}
          filter={filter}
        />
      </div>
      <section className="w-12 h-12 fixed right-0 flex justify-center items-center top-16">
        <Image src={Cart} alt="ShoppingCart"></Image>
      </section>
      <div className="flex flex-col mt-14  items-center w-full h-auto min-h-[1000px]">
        <header className="h-12 flex  justify-center items-center ">
          <h2 className="h-6 w-auto flex justify-center items-center text-[#767676] p-4 border-b-[1px]    ">
            კოლექცია
          </h2>
        </header>
        <main className="h-auto min-h-[80vh] mt-2  GenderMainGapping w-[80%] rounded-xl items-center bg-colorLightGreen py-10 ">
          {[FirstShirt, SecondShirt].map((e, i) => (
            <ProductCart key={i} pic={e} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default GenderProduct;

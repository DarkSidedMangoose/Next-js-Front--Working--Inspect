"use client";
import "./styles.css";
import Navbar from "../../../public/navbar.png";
import Profile from "../../../public/User.png";
import { useState, useEffect } from "react";
import Filter from "../../../public/Filter2.png";
import Cart from "../../../public/Cart3.png";
import Image from "next/image";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");

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

  return (
    <div className="bg-[#fff] w-screen h-screen font-georgian  ">
      <nav className="bg-[#FEF7FF] w-full h-11 null:fixed null:top-0 flex justify-between items-center">
        <Image src={Navbar} alt="navbar"></Image>
        <p className=" font-bold  ">{identifyGenderWhole}</p>
        <Image src={Profile} alt="Profile" className=""></Image>
      </nav>
      <section className="w-12 h-12 fixed flex justify-center items-center top-16">
        <Image src={Filter} alt="Filter" className="w-10 h-10"></Image>
      </section>
      <section className="w-12 h-12 fixed right-0 flex justify-center items-center top-16">
        <Image src={Cart} alt="ShoppingCart"></Image>
      </section>
      <div className="flex flex-col mt-16  items-center w-full h-auto min-h-[1000px]">
        <header className="h-12 flex  justify-center items-center ">
          <h2 className="h-6 w-auto flex justify-center items-center text-[#767676] p-4 border-b-2    ">
            კოლექცია
          </h2>
        </header>
        <main className="h-auto min-h-[500px] mt-14  GenderMainGapping w-full items-center ">
          {[1, 2, 3, 4, 5].map((e) => (
            <div
              key={e}
              className="w-60 h-96 border border-[#D9D9D9] rounded-lg"
            >
              {" "}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default GenderProduct;

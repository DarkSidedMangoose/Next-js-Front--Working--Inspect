"use client";
import "./styles.css";
import Navbar from "../../../public/navbar.png";
import Logo from "../../../public/logo.png";
import { useState, useEffect, useCallback } from "react";
import Filters from "./_resources/filter";
import Filter from "../../../public/filter3.png";

import Cart from "../../../public/Cart3.png";
import Messenger from "../../../public/messenger2.png";
import Image from "next/image";
import ProductCart from "./_resources/productCart";

import ShoppingBag from "./_resources/shoppingBag";
import { CardDetails } from "./_resources/objects";
import CardDetailsProps from "./_resources/objects";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

export interface CardDetailsPropsExtended extends CardDetailsProps {
  value: number;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");
  const [filter, setFilter] = useState<boolean | null>(true);
  const [addToShoppingCart, setAddToShoppingCart] = useState<
    CardDetailsPropsExtended | undefined
  >();

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

  const handleAddToCart = useCallback((e: number | undefined) => {
    if (e !== undefined) {
      const selectedItem = CardDetails.find((item) => item.id === e);
      if (selectedItem) {
        setAddToShoppingCart({ ...selectedItem, value: 1 });
      }
    }
  }, []);

  // bg - [#FEF7FF];
  return (
    <div className="bg-[#FFF7FE] w-[99.9%] min-h-[80%] h-auto font-georgian  ">
      <ShoppingBag addToCart={addToShoppingCart} />
      <nav className="bg-[#FFF]  w-full h-14 md:h-[90px] null:fixed null:top-0 flex justify-between  items-center shadow-bottom-right">
        <Image src={Logo} className="w-14 h-14 " alt="navbar"></Image>
        <div className="flex md:w-[70%] md:justify-between md:px-[2%] text-[#000000af] ">
          <p className=" py-2 px-4 border-b-2 border-[#c1c08ec2] cursor-pointer ">
            {identifyGenderWhole}
          </p>
          <p className=" py-2 px-4 hidden md:flex cursor-pointer ">
            {identifyGenderWhole === "ქალბატონები"
              ? "მამაკაცები"
              : "ქალბატონები"}
          </p>
          <p className="py-2 px-4 hidden md:flex cursor-pointer">
            ჩვენს შესახებ
          </p>
          <p className="py-2 px-4 hidden md:flex cursor-pointer">ავტორიზაცია</p>
        </div>

        <Image src={Navbar} alt="navbar" className="md:hidden"></Image>
      </nav>
      <section
        className={` ${
          filter === null ? "h-12 w-12 " : !filter ? "h-12 w-12 4" : "hidden"
        } fixed flex justify-center items-center top-[20%] left-2 `}
      >
        <Image
          src={Filter}
          alt="Filter"
          onClick={() => setFilter(true)}
          className={`${
            filter ? "hidden" : ""
          } w-full h-full cursor-pointer 2xl:hidden `}
        ></Image>
      </section>
      <div
        className={`fixed top-[20%] w-[241px] h-[399px]  flex justify-center items-center shadow-lg   ${
          filter === null ? "" : !filter ? "animation-off" : "animation-on"
        } `}
      >
        <Filters
          submitHandler={submitHandler}
          setFilter={handleSetFilter}
          filter={filter}
        />
      </div>
      <section className="w-12 h-12 fixed right-2 flex justify-center items-center top-16 md:top-[90px] cursor-pointer ">
        <Image src={Cart} alt="ShoppingCart"></Image>
      </section>
      <section className="w-12 h-12 fixed right-2 bottom-16 flex justify-center items-center cursor-pointer">
        <Image src={Messenger} alt="Messenger" className=""></Image>
      </section>

      <div className="flex flex-col mt-14 md:mt-[90px]  items-center w-full h-auto min-h-[1000px]">
        <header className="h-12 flex  justify-center items-center ">
          <h2 className="h-6 w-auto flex justify-center items-center text-[#767676] p-4 border-b-[1px]    ">
            კოლექცია
          </h2>
        </header>
        <main className="h-auto min-h-[80vh] mt-2  GenderMainGapping w-[80%] rounded-xl items-center bg-[#c1c08ec2] py-10 ">
          {CardDetails.map((e, i) => (
            <ProductCart
              key={i}
              img={e.img}
              price={e.price}
              name={e.name}
              subImages={e.subImages}
              id={e.id}
              addToCart={handleAddToCart}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default GenderProduct;

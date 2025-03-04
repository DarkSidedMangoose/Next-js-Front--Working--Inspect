"use client";
import "./styles.css";
import { useState, useEffect, useCallback } from "react";

import Cart from "../../../public/Cart3.png";
import Messenger from "../../../public/messenger2.png";
import Image from "next/image";
import ProductCart from "./_resources/productCart";

import ShoppingBag from "./_resources/shoppingBag";
import { CardDetails } from "./_resources/objects";
import CardDetailsProps from "./_resources/objects";
import Navitem from "./_resources/navitem";
import WholeFilter from "./_resources/filter";

interface GenderProductProps {
  params: Promise<{ gender: string }>;
}

export interface CardDetailsPropsExtended extends CardDetailsProps {
  value: number;
}

const GenderProduct: React.FC<GenderProductProps> = ({ params }) => {
  const [identifyGenderWhole, setIdentifyGenderWhole] = useState<string>("");
  const [shoppingBag, setShoppingBag] = useState<boolean | null>(false);
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
      {/* {shoppingBag ? <ShoppingBag addToCart={addToShoppingCart} /> : null} */}
      <Navitem identifyGenderWhole={identifyGenderWhole} />
      <WholeFilter />
      <section className="w-12 h-12 fixed right-2 z-30 flex justify-center items-center top-16 md:top-[90px] cursor-pointer ">
        <Image
          src={Cart}
          onClick={() => {
            setShoppingBag(true);
          }}
          alt="ShoppingCart"
        ></Image>
      </section>
      <section className="w-12 h-12 fixed z-30 right-2 bottom-16 flex justify-center items-center cursor-pointer">
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

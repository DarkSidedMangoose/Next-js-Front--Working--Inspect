"use client";
import React, { useEffect, useState } from "react";
import { CardDetailsPropsExtended } from "../page";
import Image from "next/image";

interface ShoppingBagProps {
  addToCart: CardDetailsPropsExtended | undefined;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({ addToCart }) => {
  const [state, setState] = useState<CardDetailsPropsExtended[]>([]);

  useEffect(() => {
    if (addToCart) {
      setState((prevState) => {
        const itemIndex = prevState.findIndex(
          (item) => item.id === addToCart.id
        );
        if (itemIndex !== -1) {
          const updatedItems = [...prevState];
          updatedItems[itemIndex].value += 1;
          return updatedItems;
        } else {
          return [...prevState, addToCart];
        }
      });
    }
  }, [addToCart]);

  const valueChange = (arg: boolean, i: number) => {
    setState((prevState) => {
      const updatedState = [...prevState];
      if (arg) {
        updatedState[i].value += 1;
      } else {
        if (updatedState[i].value > 0) {
          updatedState[i].value -= 1;
        }
      }
      return updatedState.filter((item) => item.value !== 0);
    });
  };

  return (
    <div className="fixed bg-[#fff7fe] w-[350px] h-[550px] top-0 z-40 right-0  rounded-bl-2xl shadow-bottom-right  ">
      <article className="w-full py-4 flex justify-between items-center text-[12px] border-b-2 border-colorLightGreen">
        <p className="px-4 text-sm text-[#0000006e]">პროდუქცია</p>
        <p className="w-1/4 h-full  text-sm flex justify-center items-center text-[#0000006e] ">
          ფასი
        </p>
      </article>
      {state.length !== 0 ? (
        <div className="w-full h-[80%] overflow-y-auto  flex flex-col items-center ">
          {state.map((e, i) => (
            <div
              key={i}
              className="h-[150px] w-full  flex justify-between items-center border-b-[1px] border-colorLightGreen"
            >
              <div className=" h-full flex items-center py-3  ">
                <Image
                  width={70}
                  height={70}
                  src={e.img}
                  alt={`image ${i}`}
                  className="rounded-lg ml-3"
                ></Image>

                <div className="w-[calc(100%-70px)] h-full p-3 flex flex-col gap-2 justify-center">
                  <p className="text-[10px]">{e.name}</p>
                  <p className="text-[10px]">{`ზომა: ${e.id}`}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[10px]">რაოდენობა:</p>
                    <div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => valueChange(false, i)}
                          className="border-[1px] w-[20px] h-[20px] flex justify-center items-center"
                        >
                          -
                        </button>
                        <p className="text-[10px]">{`${e.value}`}</p>
                        <button
                          onClick={() => valueChange(true, i)}
                          className="border-[1px] w-[20px] h-[20px] flex justify-center items-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px]">ფასი: {e.price}ლ</p>
                </div>
              </div>
              <div className="w-1/4 h-full flex justify-center  items-center text-[14px]">
                {e.value * e.price}ლ
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="  text-[#0000006e] w-full h-full flex justify-center items-center ">
          კალათა ცარიელია :(
        </p>
      )}
    </div>
  );
};

export default ShoppingBag;

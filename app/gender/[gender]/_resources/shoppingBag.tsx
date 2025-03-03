"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardDetailsPropsExtended } from "../page";

interface ShoppingBagProps {
  addToCart: CardDetailsPropsExtended | undefined;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({ addToCart }) => {
  const [state, setState] = useState<CardDetailsPropsExtended[]>([]);

  //   const initialRender = useRef(true);

  //   useEffect(() => {
  //     if (addToCart) {
  //       setState((prev) => {
  //         const existingItemIndex = prev.findIndex(
  //           (item) => item.id === addToCart.id
  //         );
  //         if (existingItemIndex !== -1) {
  //           const updatedItems = [...prev];
  //           updatedItems[existingItemIndex].value++;
  //           console.log(1);
  //           return updatedItems;
  //         }
  //         return [...prev, addToCart];
  //       });
  //     }
  //   }, [addToCart]);
  useEffect(() => {
    const itemIndex = state?.findIndex((item) => item.id === addToCart?.id);
    if (itemIndex !== -1) {
      setState((prev) => {
        const updatedItems = [...prev];
        updatedItems[itemIndex].value += 1;
        return updatedItems;
      });
    } else {
      if (addToCart) {
        setState((prev) => {
          const result = [...prev, addToCart];
          return result;
        });
      }
    }
  }, [addToCart]);
  return (
    <div className="fixed bg-[#FFF7FE] w-[250px] h-[450px] top-0 z-20 right-0 rounded-bl-lg rounded-tl-lg ">
      <article className="w-full p-4 flex justify-between items-center text-[12px] border-b-2 border-colorLightGreen">
        <p>პროდუქცია</p>
        <p>ფასი</p>
      </article>
      <div className="w-full h-[80%] overflow-y-auto px-4">
        {state.map((e, i) => (
          <div key={i} className="h-[200px] w-full">
            {e.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingBag;

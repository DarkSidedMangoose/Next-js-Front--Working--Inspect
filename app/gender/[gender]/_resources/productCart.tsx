"use client";

import Image, { StaticImageData } from "next/image";
import Exit from "../../../../public/closes.png";
import AddTo from "../../../../public/add-to-cart.png";
import "../styles.css";

import React, { useCallback, useState } from "react";
import CardDetailsProps from "./objects";

interface ExtendedCardDetailsProps extends CardDetailsProps {
  addToCart: (arg: number) => void;
}

const ProductCart: React.FC<ExtendedCardDetailsProps> = ({
  img,
  name,
  price,
  subImages,
  id,
  addToCart,
}) => {
  const [currentImageWithAlt, setCurrentImageWithAlt] = useState<{
    img: StaticImageData;
    alt: string;
  }>({
    img: img,
    alt: "default",
  });
  const [viewPhoto, setViewPhoto] = useState<boolean>(false);

  const clickHandlerOfClose = useCallback((arg: boolean) => {
    setViewPhoto(arg);
  }, []);

  const addToCartHandler = useCallback(
    (arg: number) => {
      addToCart(arg);
    },
    [addToCart]
  );
  return (
    <div className="w-60 md:w-64 h-96 md:h-[412px] border border-[#D9D9D9] bg-[#FFF] rounded-lg shadow-bottom-right relative z-10 ">
      {viewPhoto && (
        <ViewPhoto
          closeClick={clickHandlerOfClose}
          img={currentImageWithAlt.img}
          alt={currentImageWithAlt.alt}
        />
      )}
      <div className="absolute top-0 -right-14 w-32 h-7 rotate-[45deg]  bg-[#ffffffed] flex justify-center rounded-sm cursor-pointer">
        სრულად
      </div>
      <div className="w-full h-full px-4  ">
        <section className="w-full h-[90%]">
          <p className="text-[#767676] text-sm font-bold w-full justify-center items-center flex h-[10%] ">
            {name}
          </p>
          <div className="w-full h-3/4 flex justify-between cursor-pointer z-20">
            <Image
              src={currentImageWithAlt.img}
              className="h-full w-3/4 shadow-lg  "
              alt={`product`}
              loading="lazy"
              onClick={() => setViewPhoto(true)}
            ></Image>
            <div className="w-1/5 h-full flex flex-col overflow-y-auto gap-3 ">
              {subImages.map((e, i) => (
                <Image
                  onClick={() =>
                    setCurrentImageWithAlt((prev) => ({ ...prev, img: e }))
                  }
                  className="w-full h-1/5 cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out"
                  key={i}
                  src={e}
                  alt={`image ${i}`}
                ></Image>
              ))}
            </div>
          </div>
          <p className="w-full flex justify-center items-center h-[15%] text-sm ">
            ფასი:{price}₾
          </p>
        </section>
        <div
          onClick={() => {
            if (id !== undefined) addToCartHandler(id);
          }}
          className="cursor-pointer w-full h-[10%] bg-[#c1c08ec9] hover:bg-[#c1c08e7d] flex justify-between items-center text-[12px] rounded-tl-lg rounded-tr-lg px-4 transition-all duration-200 ease-in-out "
        >
          <p>კალათაში დამატება</p>
          <Image
            src={AddTo}
            className="h-3/4 w-auto "
            alt={`item-${id}`}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

interface ViewPhotoProps {
  img: StaticImageData;
  alt: string;
  closeClick: (arg: boolean) => void;
}

const ViewPhoto: React.FC<ViewPhotoProps> = ({ img, alt, closeClick }) => {
  const handleClose = useCallback(() => {
    closeClick(false);
  }, [closeClick]);

  const handleImageClicker = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent div
    closeClick(true);
  };

  return (
    <div
      className="fixed w-full  h-full bg-[#76767676] top-0 left-0 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="null:w-[300px] null:h-[450px] md:w-[500px] md:h-[700px] relative">
        <Image
          src={img}
          alt={alt}
          className="w-full h-full"
          onClick={handleImageClicker}
        />
        <div
          className="absolute -top-4 -right-4 w-[40px] h-[40px] bg-[#ffffffb3] flex justify-center items-center rounded-full cursor-pointer"
          onClick={handleClose}
        >
          <Image
            src={Exit}
            alt="exit"
            className="absolute w-[20px] h-[20px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

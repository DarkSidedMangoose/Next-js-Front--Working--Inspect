import Image, { StaticImageData } from "next/image";
import React from "react";

const ProductCart: React.FC<{ pic: StaticImageData }> = ({ pic }) => {
  return (
    <div className="w-60 h-96 border border-[#D9D9D9] bg-[#FFF] rounded-lg">
      <div className="w-full h-full p-4 ">
        <Image
          src={pic}
          className="h-[70%] shadow-lg rounded-lg"
          alt={`product`}
        ></Image>
      </div>
    </div>
  );
};

export default ProductCart;

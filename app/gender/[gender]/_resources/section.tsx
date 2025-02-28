import React from "react";
import "../styles.css";
import Image from "next/image";
import Coat from "../../../../public/coat.png";

const GenderSection = () => {
  return (
    <section className="w-full h-auto bg-[#a6b9c974] shadow-all-directions mt-10 rounded-lg">
      <div className=" w-full  min-h-[500px] h-auto gridOfGenderSection text-[11px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className=" w-full max-h-[350px] h-[350px] flex justify-center items-center"
          >
            <div className="h-[95%] w-[95%] bg-colorLightGreen flex items-center flex-col rounded-xl shadow-all-directions">
              <p>Boss Coat</p>
              <Image src={Coat} className="h-1/2" alt="coat"></Image>
              <p>price: 130₾</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenderSection;

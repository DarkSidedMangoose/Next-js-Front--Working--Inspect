"use client";
import "./page.css";
import Woman from "@/public/woman.jpg";
import Man from "@/public/man.jpg";
import Image from "next/image";

export default function page() {
  return (
    <div className=" MainPageContainerGridding">
      <section className="w-full h-full flex justify-end items-top grid-1-element">
        <Image
          style={{ transition: "0.5s ease" }}
          className=" xs:w-full xs:h-full hover:opacity-70 md:w-5/6 2xl:w-4/6 cursor-pointer rounded-lg shadow-bottom-right "
          src={Woman}
          alt="Woman"
        ></Image>
      </section>
      <div className="grid-2-element w-full h-full  flex justify-center 2xl:justify-start items-center ">
        <div className="flex flex-col justify-center items-center w-4/6 ">
          <p className="2xl:text-2xl 2xl:auto   text-[#734646] font-bold  ">
            Your
          </p>
          <p className="2xl:text-2xl 2xl:auto   text-[#734646] font-bold  ">
            Fashion
          </p>
        </div>
      </div>
      <div className="grid-3-element w-full h-full  flex justify-center 2xl:justify-end items-center ">
        <div className="flex flex-col justify-center items-center w-4/6 ">
          <p className="2xl:text-2xl 2xl:auto   text-[#734646] font-bold pr-10">
            Start
          </p>
          <p className="2xl:text-2xl 2xl:auto   text-[#734646] font-bold ">
            From
          </p>
          <p className="2xl:text-2xl 2xl:auto   text-[#734646] font-bold pl-10 ">
            There
          </p>
        </div>
      </div>

      <section className="w-full h-full flex justify-start items-end grid-4-element ">
        <Image
          style={{ transition: "0.5s ease" }}
          className=" xs:w-full xs:h-full md:w-5/6 2xl:w-4/6 hover:opacity-70 cursor-pointer rounded-lg shadow-left-top"
          src={Man}
          alt="Man"
        ></Image>
      </section>
    </div>
  );
}

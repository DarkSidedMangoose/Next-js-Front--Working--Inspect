import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Exit from "../../../../public/x.png";
import Close from "../../../../public/closes.png";
import DropDowns from "./dropDowns";
import PriceSlider from "./priceSlider";
import Filter from "../../../../public/filter3.png";

import "../styles.css";

const WholeFilter = () => {
  const [filter, setFilter] = useState<boolean | null>(true);
  const handleSetFilter = useCallback((arg: boolean) => {
    setFilter(arg);
  }, []);
  const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  return (
    <>
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
        className={`fixed z-30 top-[20%] w-[241px] h-[399px]  flex justify-center items-center shadow-lg   ${
          filter === null ? "" : !filter ? "animation-off" : "animation-on"
        } `}
      >
        <Filters
          submitHandler={submitHandler}
          setFilter={handleSetFilter}
          filter={filter}
        />
      </div>
    </>
  );
};

export default WholeFilter;

const Filters: React.FC<{
  filter: boolean | null;
  setFilter: (arg: boolean) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ filter, submitHandler, setFilter }) => {
  const [filters, setFilters] = useState<boolean | null>(filter);
  const models = ["Zara", "Boss", "C'klein"];
  const [model, setModel] = useState<string>("");

  const sizes = ["sm", "m", "lg", "xl", "2xl"];
  const [size, setSize] = useState("");

  const handleModel = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value);
  }, []);
  const handleSize = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  }, []);

  const handleSetFilter = useCallback(() => {
    console.log("heya");
    setFilter(false);
    setFilters(false);
  }, [setFilter]);
  useEffect(() => {
    setFilters(filter);
  }, [filter]);
  return (
    <div
      className={`fixed top-[20%]   w-[240px] h-[399px] bg-[#FEF7FF] flex justify-center items-center shadow-lg   ${
        filters === null ? "" : !filters ? "animation-off" : "animation-on"
      } `}
    >
      <div className="absolute right-2 top-2 h-[25px] flex justify-center items-center">
        <Image
          src={Close}
          alt="cleanButton"
          className="cursor-pointer w-5 h-5 2xl:hidden "
          onClick={handleSetFilter}
        ></Image>
      </div>
      <form
        className={`w-[190px] h-[359px] flex justify-start items-center flex-col gap-6 relative `}
        onSubmit={submitHandler}
      >
        <p className="h-[25px] w-[131px] flex justify-center items-center">
          ფილტრი
        </p>
        <div className="w-full h-[33px] relative ">
          <input
            type="text"
            className="w-full h-full rounded-xl border-[#D9D9D9] border-[1px] outline-none px-3  "
            placeholder="...ძიება"
          />
          <div className="absolute right-2 h-full  top-0 justify-center items-center flex ">
            <Image src={Exit} alt="cleanButton"></Image>
          </div>
        </div>
        <DropDowns
          whichOne="model"
          identifier={models}
          selected={model}
          onChange={handleModel}
        />
        <DropDowns
          identifier={sizes}
          selected={size}
          onChange={handleSize}
          whichOne="size"
        />
        <PriceSlider />
        <button
          type="submit"
          className="bg-black w-full h-9 rounded-xl text-white text-sm"
        >
          ძებნა
        </button>
      </form>
    </div>
  );
};

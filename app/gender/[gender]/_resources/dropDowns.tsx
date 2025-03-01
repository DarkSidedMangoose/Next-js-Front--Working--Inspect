import React from "react";

interface DropDownSizesProps {
  whichOne: string;
  identifier: string[];
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDowns: React.FC<DropDownSizesProps> = ({
  whichOne,
  identifier,
  selected,
  onChange,
}) => {
  return (
    <div className="w-full h-[33px] rounded-xl border-[#D9D9D9] border-[1px] outline-none bg-white px-2 ">
      <select
        className="w-full outline-none h-full"
        value={selected}
        onChange={onChange}
      >
        <option>
          {whichOne === "size" ? "აირჩიეთ ზომა" : "აირჩიეთ მოდელი"}
        </option>
        {identifier.map((e, i) => (
          <option className="w-full" key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDowns;

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
    <div
      className={`relative ${
        whichOne === "size" ? "w-[calc(100%-0.75rem)]" : "w-[calc(100%-1.5rem)]"
      }  h-5/6 text-lg ml-3 flex `}
    >
      <select
        value={selected}
        onChange={onChange}
        className="block w-full mt-1 border bg-[#ffffffa0]  border-gray-300 h-5/6 rounded-lg shadow-sm  outline-none"
      >
        <option value="" disabled>
          {whichOne === "size" ? "Select a size" : "select a model"}
        </option>
        {identifier.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDowns;

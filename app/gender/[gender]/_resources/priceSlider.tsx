import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import default styles

const PriceSlider: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 100]);

  const handleChange = (values: number[]) => {
    setPriceRange(values as [number, number]);
  };

  return (
    <div className="w-[calc(100%-0.75rem)] h-5/6  flex flex-col r ml-3 relative">
      <Slider
        range
        min={0}
        max={200}
        value={priceRange}
        onChange={(e) => Array.isArray(e) && handleChange(e)}
        trackStyle={[{ backgroundColor: "#734646" }]} // Change track color
        railStyle={{ backgroundColor: "#ddd" }} // Change rail color
        handleStyle={[
          {
            backgroundColor: "#C1C08E",
            borderColor: "#734646",
            outline: "none",
            boxShadow: "none",
          },
          {
            backgroundColor: "#C1C08E",
            borderColor: "#734646",
            outline: "none",
            boxShadow: "none",
          },
        ]}
      />
      <div className="flex justify-between w-full mt-4">
        <div className="relative">
          <div className="absolute -bottom-7 left-0 w-16 bg-white text-center text-black p-1 rounded-md shadow-lg text-lg">
            ₾{priceRange[0]}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-7 right-0 w-16 bg-white text-center text-black p-1 rounded-md shadow-lg text-lg">
            ₾{priceRange[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;

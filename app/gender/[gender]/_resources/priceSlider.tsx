import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import default styles

const PriceSlider: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 100]);

  const handleChange = (values: number[]) => {
    setPriceRange(values as [number, number]);
  };

  return (
    <div className="w-[85%] h-[50px]     flex flex-col   relative">
      <div className="w-full h-[30px] flex justify-between items-start  ">
        <p className="text-sm ">ფასი:</p>
        <p className="text-sm">
          ₾: {priceRange[0]}-{priceRange[1]}
        </p>
      </div>
      <Slider
        range
        min={0}
        max={200}
        value={priceRange}
        onChange={(e) => Array.isArray(e) && handleChange(e)}
        trackStyle={[{ backgroundColor: "#D9D9D9" }]} // Change track color
        railStyle={{ backgroundColor: "#ddd" }} // Change rail color
        handleStyle={[
          {
            backgroundColor: "black",
            borderColor: "black",
            outline: "none",
            boxShadow: "none",
          },
          {
            backgroundColor: "black",
            borderColor: "black",
            outline: "none",
            boxShadow: "none",
          },
        ]}
      />
    </div>
  );
};

export default PriceSlider;

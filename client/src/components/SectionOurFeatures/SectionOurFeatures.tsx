import React, { FC } from "react";
import rightImgPng from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="" />
            
            
          </li>
   
    
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;

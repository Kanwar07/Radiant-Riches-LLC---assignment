import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DisclosureButton from "../button/DisclosureButton";
import FilterButton from "../button/FilterButton";

function Heading() {
  return (
    <>
      <div class="font-inter text-[48px] font-normal leading-[3.8rem] tracking-normal text-left text-[#2c384a] pt-8 pr-[20%] pb-8 pl-[20%]">
        Best Website builders in the US
      </div>
      <hr class="mt-0 mr-[20%] mb-0 ml-[20%] opacity-90" />
      <div class="font-inter text-[14px] font-normal leading-[2.2rem] tracking-normal text-left text-[#4b5665] flex flex-row justify-between items-center pt-2 pr-[20%] pb-2 pl-[20%] opacity-90 cursor-pointer">
        <div class="flex flex-row justify-between items-center">
          <div class="mt-0 mr-2 mb-0 ml-2 opacity-90">
            <CheckCircleOutlineIcon />
          </div>
          <div>
            Last Updated{"  "}-{"  "}February 22, 2020
          </div>
          <DisclosureButton />
        </div>
        <FilterButton />
      </div>
      <hr class="mt-0 mr-[20%] mb-0 ml-[20%] opacity-90" />
    </>
  );
}

export default Heading;

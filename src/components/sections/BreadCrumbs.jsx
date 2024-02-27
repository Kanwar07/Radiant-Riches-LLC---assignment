import React from "react";
import MediaQuery from "react-responsive";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadCrumbs() {
  return (
    <>
      <MediaQuery minWidth={601}>
        <div class="flex flex-row font-inter text-[13px] font-normal leading-[2.2rem] tracking-normal text-left text-[#727d87] pt-4 pr-[20%] pb-4 pl-[20%]">
          <button class="pr-1 pl-1 rounded-xl hover:shadow-2xl">Home</button>
          <div class="pr-1">
            <NavigateNextIcon />
          </div>
          <button class="pr-1 pl-1 rounded-xl hover:shadow-2xl">
            Hosting for all
          </button>
          <div class="pr-1 ">
            <NavigateNextIcon />
          </div>
          <button class="pr-1 pl-1 rounded-xl hover:shadow-2xl">Hosting</button>
          <div class="pr-1">
            <NavigateNextIcon />
          </div>
          <button class="pr-1 pl-1 rounded-xl hover:shadow-2xl">
            Hosting6
          </button>
          <div class="pr-1">
            <NavigateNextIcon />
          </div>
          <button class="pr-1 pl-1 rounded-xl hover:shadow-2xl">
            Hosting5
          </button>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div class="flex flex-row justify-center font-inter text-[13px] font-normal leading-[2.2rem] tracking-normal text-left text-[#727d87] pt-4 pr-[20%] pb-4 pl-[20%]">
          <div class="pr-1 pl-1 hover:shadow-2xl rounded-xl">Hosting5</div>
        </div>
      </MediaQuery>
    </>
  );
}

export default BreadCrumbs;

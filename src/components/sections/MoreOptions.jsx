import React from "react";
import BuilderCard from "../card/BuilderCard";
import builderdata from "../data/Builderdata.json";

function MoreOptions() {
  return (
    <div class="flex flex-col pt-8 pr-[20%] pb-8 pl-[20%] bg-[#fffff]">
      <div class="mt-4 mb-10 font-inter text-[32px] font-normal leading-[2.75rem] tracking-normal text-left text-[#2C384A]">
        Related deals you might like for
      </div>
      <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-1 w-full max-xl:grid-cols-2">
        {builderdata.map((item) => {
          const {
            image,
            title,
            discount,
            time,
            content,
            discountedPrice,
            actualPrice,
          } = item;
          return (
            <div>
              <BuilderCard
                {...{
                  image,
                  title,
                  discount,
                  time,
                  content,
                  discountedPrice,
                  actualPrice,
                }}
              />
            </div>
          );
        })}
      </div>
      <div class="mt-32 mb-8 flex justify-between max-lg:flex-col max-xl:flex-row">
        <div class="w-[50%] font-inter text-[32px] font-normal leading-[2.75rem] tracking-normal text-left text-[#5C6874] max-xl:pb-8">
          Sign up and get exclusive special deals
        </div>
        <div>
          <input
            type="search"
            name="searchtext"
            class="pt-4 pr-4 pb-4 pl-4 text-[#000000] rounded-l-2xl"
          />
          <button class="pt-4 pr-4 pb-4 pl-4 bg-[#1B88F4] rounded-r-2xl text-[#ffffff]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreOptions;

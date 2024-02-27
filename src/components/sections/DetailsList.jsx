import React from "react";
import data from "../data/Data.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import ViewButton from "../button/ViewButton";

function DetailsList() {
  return (
    <>
      <div>
        {data.map((item, index) => {
          const {
            image,
            title,
            content,
            para,
            highlights,
            rating,
            stars,
            feedback,
          } = item;
          return (
            <div
              key={index}
              class="flex pt-8 pr-[20%] pb-8 pl-[20%] bg-[#fffff] max-lg:flex-col max-2xl:flex-row "
            >
              <div class="flex flex-col items-center justify-center max-lg:pb-8">
                <img
                  src={image}
                  alt={title}
                  style={{
                    height: "30%",
                    width: "100%",
                    marginBottom: "0.5rem",
                  }}
                />
                <div>{title}</div>
              </div>
              <div class="flex flex-col pr-[2%] pl-[5%] items-start">
                <div class="font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left opacity-80 pb-4">
                  <span class="font-bold">{content}</span> - {para}
                </div>
                <div class="font-bold pb-1 opacity-80">Main highlights</div>
                <div class="pl-4 font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left opacity-70 pb-10">
                  {highlights}
                </div>
                <button class="flex items-center bg-transparent text-sky-400 rounded-3xl border-none max-lg: pb-8">
                  Show more
                  <ExpandMoreIcon />
                </button>
              </div>
              <div class="flex flex-col justify-between">
                <div class="flex flex-col items-center bg-[#f3f9ff] pt-4 pr-8 pb-4 pl-4 rounded-b-xl max-lg: mb-8">
                  <div class="pb-2 text-[40px] text-[#074786]">{rating}</div>
                  <div class="font-inter text-[18px] font-normal leading-[1.5rem] tracking-normal text-align pb-2 opacity-60 text-[#074786]">
                    {feedback}
                  </div>
                  <Rating
                    name="read-only"
                    value={stars}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </div>
                <ViewButton />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DetailsList;

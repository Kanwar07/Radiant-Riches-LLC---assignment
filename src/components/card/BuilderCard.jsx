import React from "react";
import { Box, Card, CardContent, CardActionArea } from "@mui/material";
import ViewButton from "../button/ViewButton";

function BuilderCard({
  image,
  title,
  discount,
  time,
  content,
  discountedPrice,
  actualPrice,
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <img
          src={image}
          alt={title}
          class="h-[50%] w-[70%] pt-6 pl-[25%]
          pb-6"
        />
        <CardContent class="flex flex-row mt-8">
          <div class="pr-2 pl-2 ml-2 mb-2 font-inter text-[13px] font-normal leading-[1.5rem] tracking-normal text-left text-[#074786] bg-[#F2F4F7] rounded-lg">
            {discount}% Off
          </div>
          <div class="pr-2 pl-2 ml-2 mb-2 font-inter text-[13px] font-normal leading-[1.5rem] tracking-normal text-left text-[#074786] bg-[#F2F4F7] rounded-lg">
            {time}
          </div>
        </CardContent>
        <CardContent class="flex flex-row justify-center mb-4 mt-2 font-inter text-[16px] font-bold leading-[1.5rem] tracking-normal text-left text-[#626E79]">
          {title}
        </CardContent>
        <CardContent class="pr-4 pl-4 mb-4 font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left text-[#626E79]">
          {content}
        </CardContent>
        <CardContent class="flex flex-row items-baseline m-2">
          <div class="pr-2 font-inter text-[20px] font-normal leading-[1.5rem] tracking-normal text-left text-[#5C6874]">
            ${discountedPrice}
          </div>
          <div class="pr-2 font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left text-[#9FA9B3]">
            {actualPrice}
          </div>
          <div class="pr-2 font-inter text-[13px] font-normal leading-[1.2rem] tracking-normal text-left text-[#EF4C5D]">
            ({discount}% Off)
          </div>
        </CardContent>
        <CardActionArea class="pt-4 pr-4 pb-4 pl-4 w-full">
          <ViewButton />
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default BuilderCard;

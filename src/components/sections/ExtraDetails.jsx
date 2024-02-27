import React from "react";
import Rating from "@mui/material/Rating";
import ViewButton from "../button/ViewButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExtraDetails() {
  return (
    <>
      <div class="flex pt-8 pr-[20%] pb-8 pl-[20%] bg-[#fffff] max-lg:flex-col max-2xl:flex-row">
        <div class="flex flex-col items-center justify-center max-lg:pb-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
            alt="CDK"
            style={{
              height: "30%",
              width: "100%",
              marginBottom: "0.5rem",
            }}
          />
          <div>CDK</div>
        </div>
        <div class="flex flex-col pr-[2%] pl-[5%] items-start">
          <div class="font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left opacity-80 pb-4">
            <span class="font-bold">CDK Resposive Builder:</span> An extensive
            library of widgets and apps, and detailed step-by-step guides
          </div>
          <div class="font-inter text-[13px] font-normal leading[1.5rem] tracking-normal text-left text-[#074786] bg-[#F2F4F7] pb-2 pr-2 pl-2 rounded-md">
            26% Off
          </div>
          <div class="font-bold pb-1 opacity-80">Main highlights</div>
          <div class="ml-4 mb-4 pl-2 pt-4 pb-4 w-full font-inter font-normal leading-[1.5rem] tracking-normal text-left opacity-80 bg-[#fff4ed] rounded-xl">
            <div class="mb-4">
              <span class="border-solid bg-[#FFFFFF] text-[#1B88F4] px-2 py-1 rounded-lg mr-2">
                9.9
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Building responsive
              </span>
            </div>
            <div class="mb-4">
              <span class="border-solid bg-[#FFFFFF] text-[#1B88F4] px-2 py-1 rounded-lg mr-2">
                8.9
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Cool
              </span>
            </div>
            <div>
              <span class="border-solid bg-[#FFFFFF] text-[#1B88F4] px-2 py-1 rounded-lg mr-2">
                8.9
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Docs
              </span>
            </div>
          </div>
          <div class="pb-4">
            Why we love it
            <div class="pt-2">
              <span class="pr-2">
                <CheckCircleOutlineIcon fontSize="small" color="primary" />
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Documentation
              </span>
            </div>
            <div>
              <span class="pr-2">
                <CheckCircleOutlineIcon fontSize="small" color="primary" />
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Easy Use
              </span>
            </div>
            <div>
              <span class="pr-2">
                <CheckCircleOutlineIcon fontSize="small" color="primary" />
              </span>
              <span class="font-inter text-[15px] font-normal leading-[1.5rem] tracking-normal text-left">
                Out of box
              </span>
            </div>
          </div>
          <button class="flex items-center bg-transparent text-sky-400 rounded-3xl border-none max-lg: pb-8">
            Show more
            <ExpandMoreIcon />
          </button>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col items-center bg-[#f3f9ff] pt-4 pr-8 pb-4 pl-4 rounded-b-xl max-lg: mb-8">
            <div class="pb-2 text-[40px] text-[#074786]">9.1</div>
            <div class="font-inter text-[18px] font-normal leading-[1.5rem] tracking-normal text-align pb-2 opacity-60 text-[#074786]">
              Very Good
            </div>
            <Rating
              name="read-only"
              value={4}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <ViewButton />
        </div>
      </div>
    </>
  );
}

export default ExtraDetails;

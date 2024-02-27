import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MediaQuery from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div class="pt-4 pr-[25%] pb-4 pl-[25%] bg-[#212731] text-[#ffffff] ">
      <MediaQuery maxWidth={600}>
        <div class="flex flex-col items-center">
          <div class="pb-4">
            <input
              type="search"
              name="searchtext"
              class="pt-2 pr-4 pb-2 pl-4 rounded-xl text-[#000000]"
            />
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<MenuIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Explore More
              </AccordionSummary>
              <AccordionDetails class="flex flex-col">
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60 hover:shadow-2xl rounded-lg">
                  Categories
                </button>
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60 hover:shadow-2xl rounded-lg">
                  Website Builders
                </button>
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60  hover:shadow-2xl rounded-lg">
                  Today's deals
                </button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={600} and maxWidth={1000}>
        <div class="flex flex-row">
          <div class="pr-12">
            <input
              type="search"
              name="searchtext"
              class="pt-2 pr-4 pb-2 pl-4 rounded-xl text-[#000000]"
            />
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<MenuIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Explore More
              </AccordionSummary>
              <AccordionDetails>
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60  hover:shadow-2xl rounded-lg">
                  Categories
                </button>
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60  hover:shadow-2xl rounded-lg">
                  Website Builders
                </button>
                <button class="text-[#000000] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent opacity-60 hover:shadow-2xl rounded-lg">
                  Today's deals
                </button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1001}>
        <div class="flex flex-row pt-4 pb-4 justify-around">
          <div class="pr-[20%]">
            <input
              type="search"
              name="searchtext"
              class="pt-2 pr-4 pb-2 pl-4 rounded-xl text-[#000000]"
            />
          </div>
          <div class="flex flex-row">
            <button class="text-[#d1d6da] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent hover:shadow-2xl rounded-lg">
              Categories
            </button>
            <button class="text-[#d1d6da] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent hover:shadow-2xl rounded-lg">
              Website Builders
            </button>
            <button class="text-[#d1d6da] font-inter text-[14px] font-normal leading-[1.5rem] tracking-normal text-left pt-2 pr-4 pb-2 pl-4 border-none rounded-lg bg-transparent hover:shadow-2xl rounded-lg">
              Today's deals
            </button>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Navbar;

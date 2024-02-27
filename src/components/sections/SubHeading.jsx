import React from "react";
import MediaQuery from "react-responsive";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuIcon from "@mui/icons-material/Menu";

function SubHeading() {
  return (
    <>
      <MediaQuery maxWidth={1001}>
        <div class="pt-4 pr-[20%] pb-4 pl-[20%] font-inter text-[14px] font-normal leading-[2.2rem] tracking-normal text-left text-[#4b5665] opacity-80">
          <Accordion>
            <AccordionSummary
              expandIcon={<MenuIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              More tools to enhance your experience
            </AccordionSummary>
            <AccordionDetails>
              <div class="flex flex-col">
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  Tools
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  AWS Builder
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  Start Build
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  Build Supplies
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  Tooling
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl">
                  BlueHosting
                </button>
                <button class="pt-1 pb-1 rounded-xl hover:shadow-2xl rounded-xl"></button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <div class="flex flex-row justify-between pt-4 pr-[20%] pb-4 pl-[20%] font-inter text-[14px] font-normal leading-[2.2rem] tracking-normal text-left text-[#4b5665] opacity-80">
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            Tools
          </button>
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            AWS Builder
          </button>
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            Start Build
          </button>
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            Build Supplies
          </button>
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            Tooling
          </button>
          <button class="pt-2 pb-2 pr-2 pl-2 rounded-xl hover:shadow-2xl rounded-2xl">
            BlueHosting
          </button>
          <div></div>
        </div>
      </MediaQuery>
    </>
  );
}

export default SubHeading;

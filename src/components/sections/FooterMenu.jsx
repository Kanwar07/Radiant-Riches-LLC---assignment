import React from "react";
import menu1 from "../data/Menu1.json";
import menu2 from "../data/Menu2.json";
import CategoryButton from "../button/CategoryButton";
import ContactButton from "../button/ContactButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function FooterMenu() {
  return (
    <div class="flex pr-[20%] pl-[20%] h-[40%h] w-full bg-[#212731] flex justify-around pt-16 max-lg:flex-col max-xl:flex-row">
      <div class="flex flex-col">
        <div class="font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left text-[#ffffff] pb-4">
          Categories
        </div>
        <div class="flex flex-col">
          {menu1.map((menu) => {
            const { category } = menu;
            return (
              <>
                <CategoryButton {...{ category }} />
              </>
            );
          })}
        </div>
      </div>
      <div>
        <div class="font-inter text-[16px] font-normal leading-[1.5rem] tracking-normal text-left text-[#ffffff] pb-4">
          Contact
        </div>
        <div class="flex flex-col">
          {menu2.map((menu) => {
            const { contact } = menu;
            return (
              <>
                <ContactButton {...{ contact }} />
              </>
            );
          })}
        </div>
      </div>
      <div class="flex flex-row text-[#ffffff] max-lg:justify-start max-2xl:justify-center pt-16 pb-16">
        <div>
          <KeyboardArrowDownIcon />
        </div>
        <div>United States</div>
      </div>
    </div>
  );
}

export default FooterMenu;

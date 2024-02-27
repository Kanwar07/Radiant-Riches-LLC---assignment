import React from "react";
import menu1 from "../data/Menu1.json";
import menu2 from "../data/Menu2.json";
import CategoryButton from "../button/CategoryButton";
import ContactButton from "../button/ContactButton";
import countries from "../data/Countries.json";

function FooterMenu() {
  return (
    <div class="flex pr-[20%] pl-[20%] h-[40%h] w-full bg-[#212731] flex justify-around pt-16 max-lg:flex-col max-xl:flex-row">
      <div class="flex flex-col max-lg:mb-8">
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
      <div class="max-lg:mb-8">
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
      <div class="flex flex-row text-[#ffffff] max-lg:justify-start max-2xl:justify-center pl-4 mt-16 mb-32">
        <select class="text-[#ffffff] bg-transparent w-60">
          {countries.map((country) => {
            const { name, code } = country;
            return (
              <option
                key={code}
                value={name}
                class="text-[#ffffff] bg-[#000000]"
              >
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default FooterMenu;

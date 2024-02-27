import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function FilterButton() {
  return (
    <>
      <button class="flex flex-row items-center border-none bg-transparent pl-4 opacity-70">
        <KeyboardArrowDownIcon />
        <div>Top Relevant</div>
      </button>
    </>
  );
}

export default FilterButton;

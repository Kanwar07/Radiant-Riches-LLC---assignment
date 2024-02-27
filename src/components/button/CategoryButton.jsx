import React from "react";

function CategoryButton({ category }) {
  return (
    <button class="font-inter text-[13px] font-normal leading-[1.25rem] tracking-normal text-left text-[#B6BDC4] pb-4 rounded-xl hover:shadow-2xl">
      {category}
    </button>
  );
}
export default CategoryButton;

import React from "react";

function ContactButton({ contact }) {
  return (
    <button class="font-inter text-[13px] font-normal leading-[1.25rem] tracking-normal text-left text-[#B6BDC4] pb-4 rounded-xl hover:shadow-2xl">
      {contact}
    </button>
  );
}

export default ContactButton;

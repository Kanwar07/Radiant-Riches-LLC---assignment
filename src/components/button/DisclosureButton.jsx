import React from "react";
import InfoIcon from "@mui/icons-material/Info";

function DisclosureButton() {
  return (
    <button class="flex flex-row items-center border-none bg-transparent pl-4 opacity-70">
      <div>
        <InfoIcon
          style={{ backgroundColor: "transparent", paddingRight: "0.5rem" }}
        />
      </div>
      <div>Advertising Disclosure</div>
    </button>
  );
}

export default DisclosureButton;

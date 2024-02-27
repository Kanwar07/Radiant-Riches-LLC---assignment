import React from "react";
import Navbar from "./components/navbar/Navbar";
import WebsitePage from "./components/main/WebsitePage";
import Contextdata from "./components/context/Context";

function App() {
  return (
    <Contextdata class="bg-[#fbfcfd]">
      <Navbar />
      <WebsitePage />
    </Contextdata>
  );
}

export default App;

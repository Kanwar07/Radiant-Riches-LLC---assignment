import React, { createContext, useEffect, useState } from "react";
import builderdata from "../data/Builderdata.json";

export const data = createContext();

function Contextdata({ children }) {
  const [count, setcount] = useState();

  useEffect(() => {
    setcount(builderdata.count);
  }, []);

  return <data.Provider value={{ count }}>{children}</data.Provider>;
}

export default Contextdata;

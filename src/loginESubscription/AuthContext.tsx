import React, { createContext } from "react";

export const userContext = createContext([
  0,
  React.Dispatch<React.SetStateAction<number>>,
]);

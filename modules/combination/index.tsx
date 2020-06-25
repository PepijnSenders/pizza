import React, { createContext, useContext } from "react";

import combinations from "./combinations.json";

export interface Combination {
  color1: string;
  color2: string;
  url: string;
  name: string;
}

const transformCombination = (combinationEntry: string[]): Combination => {
  const [color1, color2, url, name] = combinationEntry;

  return { color1, color2, url, name };
};

const CombinationsContext = createContext<Combination>(
  transformCombination(combinations[0])
);

export const useCombination = () => useContext(CombinationsContext);

const CombinationsProvider: React.FC = ({ children }) => {
  const currentCombination: Combination = transformCombination(
    combinations[Math.floor(Math.random() * combinations.length)]
  );

  return (
    <CombinationsContext.Provider value={currentCombination}>
      {children}
    </CombinationsContext.Provider>
  );
};

export default CombinationsProvider;

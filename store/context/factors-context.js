import { createContext } from "react";

export const FactorsContext = createContext();



const screenStack = [
  { name: "Factors", props: { name: "Humor", chipsData:
    [
      { id: "1", label: "Humor1", selected: false },
      { id: "2", label: "Humor2", selected: false },
    ]
   } },
  { name: "Factors", props: { name: "Food", chipsData:
    [
      { id: "1", label: "Food1", selected: false },
      { id: "2", label: "Food2", selected: false },
      { id: "3", label: "Food3", selected: false },
    ]
   } },
];

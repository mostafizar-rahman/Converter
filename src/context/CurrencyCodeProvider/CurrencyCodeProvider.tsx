"use client"
import React, { createContext, useReducer } from "react";
import CurrencyCodeReducer, {
  initialState,
} from "../CurrencyCodeReducer/CurrencyCodeReducer";

type stateType = {
  state: {
    fromCurrencyCode: string;
    toCurrencyCode: string;
  };
  dispatch: any;
};


export const FORM_CONTEXT = createContext<stateType>({
  state: {
    fromCurrencyCode: "",
    toCurrencyCode: "",
  },
  dispatch: null,
});

const CurrencyCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CurrencyCodeReducer, initialState);

  return (
    <>
      <FORM_CONTEXT.Provider value={{ state, dispatch }}>
        {children}
      </FORM_CONTEXT.Provider>
    </>
  );
};

export default CurrencyCodeProvider;

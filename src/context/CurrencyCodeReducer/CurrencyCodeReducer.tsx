import {
    FROM_CURRENCY_CODE,
    TO_CURRENCY_CODE,
  } from "../ActionTypes/ActionTypes";
  
  type stateType = {
    fromCurrencyCode: string;
    toCurrencyCode: string;
  };
  type actionType = {
    type: string;
    payload: string;
  };
  
  export const initialState: stateType = {
    fromCurrencyCode: "",
    toCurrencyCode: "",
  };
  
  const CurrencyCodeReducer = (state: stateType, action: actionType) => {
    switch (action.type) {
      case FROM_CURRENCY_CODE:
        return {
          ...state,
          fromCurrencyCode: action.payload,
        };
  
      case TO_CURRENCY_CODE:
        return {
          ...state,
          toCurrencyCode: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default CurrencyCodeReducer;
  
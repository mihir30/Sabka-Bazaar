import React, { createContext, useReducer } from "react";
import { reducer } from "../reducers/ReducerContext";

const initialState = {
  count: 0,
  products: {},
};

export const AppWideContext = createContext(initialState);

const AppWideContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  return (
    <AppWideContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </AppWideContext.Provider>
  );
};

export default AppWideContextProvider;

import React, { createContext, useContext, useReducer } from "react";
import { Action, defaultState, reducer, State } from "../reducer";

import { ThemeProvider } from "@chakra-ui/core";
import UiTheme from "./UiTheme";
import {CSSReset} from "@chakra-ui/core/dist";


const stateContext = createContext(defaultState);

const dispatchContext = createContext((() => true) as React.Dispatch<Action>);

export const Provider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        <ThemeProvider theme={UiTheme}>
          <CSSReset />
          {children}
        </ThemeProvider>
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useDispatch = () => {
  return useContext(dispatchContext);
};

export const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(stateContext);
  return state[property];
};

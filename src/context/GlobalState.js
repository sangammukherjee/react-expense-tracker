import React, { createContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.production.min";
import AppReducer from "./AppReducer";

// Initial state

const themes = {
  light: {
    bgColor: "blanchedalmond",
    dark : false,
    color : 'green'
  },
  dark: {
    bgColor: "indigo",
    dark : true,
    color : 'white'
  },
};

const initialState = {
  transactions: [],
  isDarkTheme : false,
  theme : themes.light
};

// Create context
export const GlobalContext = createContext(initialState);

const getTransactionsOnPageLoad = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions"));
  return transactions;
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const transactionsOnInitialLoad = getTransactionsOnPageLoad();
  const updatedState = {
    ...initialState,
    transactions:
      transactionsOnInitialLoad && transactionsOnInitialLoad.length
        ? transactionsOnInitialLoad
        : [],
  };
  const [state, dispatch] = useReducer(AppReducer, updatedState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function toggleTheme() {
    dispatch({
      type: "CHANGE_THEME"
    });
  }
  const theme = state.isDarkTheme ? themes.dark : themes.light
  console.log(state);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        toggleTheme,
        theme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const updatedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return {
        ...state,
        transactions: updatedTransactions,
      };
    case "ADD_TRANSACTION":
      localStorage.setItem(
        "transactions",
        JSON.stringify([action.payload, ...state.transactions])
      );
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "CHANGE_THEME":
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

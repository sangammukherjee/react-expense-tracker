import React , {useContext} from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalContext } from "./context/GlobalState";

import "./App.css";

function App() {
	const {theme} = useContext(GlobalContext)
    console.log(theme);
  return (
      <div style={{backgroundColor : theme.bgColor , color : theme.color, height : '100%'}} className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
  );
}

export default App;

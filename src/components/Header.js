import React , {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Header = () => {
  const {toggleTheme} = useContext(GlobalContext)
  return (
    <div style={{display : 'flex'}}>
      <h2 style={{flex :'1'}}>Expense Tracker</h2>
      <div style={{padding : '16px 0px 0px 0'}}>
        <button className="theme-button" onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

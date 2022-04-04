import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('')
    setAmount(0)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter Title</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Title..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Add Amount <br /></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

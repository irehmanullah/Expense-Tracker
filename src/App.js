import { useState } from 'react'

import "./Components/Expenses/Expenses.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const dummyExpenses = [
    {
      id: 'a1',
      title: 'Car',
      amount: 40,
      date: new Date(2021, 7, 23)
    },
    {
      id: 'a2',
      title: 'Bike',
      amount: 100,
      date: new Date(2021, 1, 23)
    }
  ]
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    })
  }

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses ? <Expenses items={expenses} /> : <Expenses />}
    </div>
  );
}

export default App;

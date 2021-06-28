import "./Components/Expenses/Expenses.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState, useEffect } from 'react'
function App() {
  const dummyExpenses = [
    {
      id: 'a1',
      title: 'Car',
      amount: 234,
      date: new Date(2020, 7, 23)
    },
    {
      id: 'a2',
      title: 'Bike',
      amount: 87,
      date: new Date(2020, 12, 3)
    },
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

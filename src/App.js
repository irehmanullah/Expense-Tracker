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
  const [expenses, setExpenses] = useState([]);
  console.log(expenses)
  const saveLocalTodos = () => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("expenses") === null) {
      localStorage.setItem("expenses", JSON.stringify([]));
    } else {
      let expensesLocal = JSON.parse(localStorage.getItem("expenses"));
      setExpenses(expensesLocal);
    }
  }
  useEffect(() => {
    // addExpenseHandler();
    getLocalTodos();
  }, [])
  useEffect(() => {
    saveLocalTodos();
  }, [expenses])
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

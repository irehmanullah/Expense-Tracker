import "./Components/Expenses/Expenses.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'a1',
      title: 'car',
      amount: 234,
      date: new Date(2020, 7, 23)
    },
    {
      id: 'a2',
      title: 'bike',
      amount: 87,
      date: new Date(2020, 12, 3)
    },
  ]
  return (
    <div >
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

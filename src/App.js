import logo from './logo.svg';
// import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import "./Components/ExpenseItem.css";
function App() {
  const expenses=[
    {
      id:'a1',
      title:'car',
      amount: 234,
      date: new Date(2020, 7, 23)
    },
    {
      id:'a2',
      title:'bike',
      amount: 87,
      date: new Date(2020, 12, 3)
    },
  ]
  return (
    <div className="expenses">
    <ExpenseItem title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date} />
     <ExpenseItem title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date} />
    </div>
  );
}

export default App;

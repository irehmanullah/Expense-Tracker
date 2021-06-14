import "./Components/Expenses.css";
import Expenses from "./Components/Expenses";
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
    <div >
    <h2>Let's get started!</h2>
   <Expenses items={expenses}/>
    </div>
  );
}

export default App;

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
const ExpenseList = props => {
    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'>Found no Expense.</h2>
    }
    return(
        <div>
            {props.items.length === 0 ? (<p>No Expenses Found.</p>) :
                props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                )}
        </div>
    )
}
export default ExpenseList;
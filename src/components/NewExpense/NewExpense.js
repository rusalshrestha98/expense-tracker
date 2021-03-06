import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const toggleFormHandler = () => {
    setShowForm(true);
  }

  const closeFormHandler = () => {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/> : <button onClick={toggleFormHandler}>Add New Expense</button>}  
    </div>
  );
};
export default NewExpense;

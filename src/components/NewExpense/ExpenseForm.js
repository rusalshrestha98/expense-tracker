import "./ExpenseForm.css";
const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label className=".new-expense__control label">Title</label>
                    <input className="new-expense__control input" type="text" />
                </div>
                <div className="new-expense__controls">
                    <label className=".new-expense__control label">Amount</label>
                    <input className="new-expense__control input" type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__controls">
                    <label className=".new-expense__control label">Date</label>
                    <input className="new-expense__control input" type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
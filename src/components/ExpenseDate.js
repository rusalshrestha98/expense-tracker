import "./ExpenseItem.css";

const ExpenseDate = (props) => {
    const month = <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
    const day = <div>{props.date.toLocaleString('en-US', { day: '2-digit' })}</div>
    const year = <div>{props.date.getFullYear()}</div>

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
};

export default ExpenseDate;
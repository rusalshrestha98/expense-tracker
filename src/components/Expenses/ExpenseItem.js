import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [ title, setTitle ] = useState(props.title)

  const changeTitleHandler = () => {
    setTitle("New Title");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={changeTitleHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

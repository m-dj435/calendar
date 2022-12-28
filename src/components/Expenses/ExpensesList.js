import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const ExpensesList = (props) => {
  console.log(props.filtered);
  if (props.filtered.length === 0) {
    return <h2 className="h2">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filtered.map(({ id, amount, title, date }) => {
        return (
          <ExpenseItem
            key={id}
            amountItem={amount}
            titleItem={title}
            dateItem={date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;

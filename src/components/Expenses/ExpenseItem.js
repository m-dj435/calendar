import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = ({ dateItem, titleItem, amountItem }) => {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate actualDate={dateItem} />
        </div>
        <div className="expense-item__description">
          <h2>{titleItem}</h2>
          <div className="expense-item__price">${amountItem}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

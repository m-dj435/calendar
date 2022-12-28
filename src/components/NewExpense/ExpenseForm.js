import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [amountValueInput, setAmountValueInput] = useState("");
  const [dateValueInput, setDateValueInput] = useState("");

  const titleChangeHandler = (event) => {
    setTitleInputValue(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //console.log(event.target.value);
    setAmountValueInput(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //console.log(event);
    setDateValueInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDataValue = {
      title: titleInputValue,
      amount: Number(amountValueInput),
      date: new Date(dateValueInput),
    };

    //console.log(expenseDataValue);
    props.onSaveData(expenseDataValue);
    cancelCliked();

    setTitleInputValue("");
    setAmountValueInput("");
    setDateValueInput("");
  };

  const cancelCliked = () => {
    props.closer();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            onChange={titleChangeHandler}
            value={titleInputValue}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            onChange={amountChangeHandler}
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            value={amountValueInput}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            onChange={dateChangeHandler}
            className="new-expense__control input"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateValueInput}
          />
        </div>
        <div className="new-expense__actions">
          <button className="button" type="button" onClick={cancelCliked}>
            Cancel
          </button>
          <button className="button" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

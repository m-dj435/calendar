import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [openForm, setOpenForm] = useState(false);
  const onOpenFormHandler = () => {
    setOpenForm(true);
  };

  const cancelHandler = () => {
    setOpenForm(false);
  };

  return (
    <div className="new-expense">
      {!openForm ? (
        <button className="button" onClick={onOpenFormHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveData={saveExpenseDataHandler}
          closer={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

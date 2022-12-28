import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2020");

  const onSelectedYearHandler = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  };

  const filteredData = props.item.filter(({ date }) => {
    const year = date.toLocaleString("en-US", { year: "numeric" });
    return year === selectedYearFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelected={onSelectedYearHandler}
        selected={selectedYearFilter}
      />
      <ExpensesList filtered={filteredData} className="expenses" />
    </Card>
  );
};
//{ id, title, amount, date }
export default Expenses;

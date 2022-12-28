import "./ExpenseDate.css";

const ExpenseDate = ({ actualDate }) => {
  const month = actualDate.toLocaleString("en-US", { month: "long" });
  const year = actualDate.toLocaleString("en-US", { year: "numeric" });
  const day = actualDate.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;

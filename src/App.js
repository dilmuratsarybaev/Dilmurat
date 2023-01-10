import { useState } from "react";
import "./App.css";
import { Expenses } from "./component/expenses/Expenses";
import { NewExpense } from "./component/new-expense/NewExpense";

const expenses = [];

function App() {
  const [preExpense, setPreExpense] = useState(expenses);
  const addExpenseData = (expenseData) => {
    const updateExpanse = [...preExpense, expenseData];
    setPreExpense(updateExpanse);
    // console.log(updateExpanse);
  };
  return (
    <div className="App">
      <NewExpense onaddExpenseData={addExpenseData} />
      <Expenses expenses={preExpense} />
    </div>
  );
}

export default App;

import React from "react";
import { ExpenseItem } from "../expenses-item/ExpenseItem";
export const Expenses = (props) => {
  // console.log(props.expenses);
  return (
    <ul>
      {props.expenses.map((element) => {
        return (
          <ExpenseItem
            title={element.title}
            date={element.date}
            price={element.price}
            key={element.title}
          />
        );
      })}
    </ul>
  );
};

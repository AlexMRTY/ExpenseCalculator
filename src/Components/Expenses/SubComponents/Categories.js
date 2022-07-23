import React from "react";

import ExpenseListItem from "./ExpenseListItem";

import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {

  return (
    <div className={styles.container}>
      {props.categorizedData.map((item) => (
        <ExpenseListItem
          key={item.id}
          category={item.category}
          count={props.paymentCount[item.category]}
          price={props.costByCategory[item.category]}
          percentage={props.percentageForCategory[item.category]}
          tab="categories"
        />
      ))}
    </div>
  );
};

export default ExpenseList;

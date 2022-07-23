import React from "react";

import ExpenseListItem from "./ExpenseListItem";

import styles from "./ExpenseList.module.css";

const AllPayments = (props) => {

    

  return (
    <div className={styles.container}>
      {props.dataPoints.map((item) => (
        <ExpenseListItem
          key={item.id}
          category={item.category}
          date={item.date}
          price={parseInt(item.price)}
          total={props.dataSummary.totalExpenses}
          tab="all-payment"
        />
      ))}
    </div>
  );
};

export default AllPayments;

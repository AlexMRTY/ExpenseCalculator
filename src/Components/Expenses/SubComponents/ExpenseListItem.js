import React from "react";

import styles from "./ExpenseListItem.module.css";

const ExpenseListItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>

      </div>
      <div className={styles.info_container}>
        <span className={styles.category}>{props.dataPoint.category}</span>
        <span className={styles.price}>$ {props.price}</span>
        <span className={styles.payment_count}>{props.count} payments</span>
        <span className={styles.percentage}>{props.percentage}%</span>
      </div>
    </div>
  );
};

export default ExpenseListItem;

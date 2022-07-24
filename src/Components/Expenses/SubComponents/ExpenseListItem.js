import React from "react";

import styles from "./ExpenseListItem.module.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPlane,
  faUtensils,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

const ExpenseListItem = ({ category, price, count, percentage, date, total, tab }) => {
  const icon = {
    'Shopping': faCartShopping,
    'Travel': faPlane,
    'Food': faUtensils,
    'Gym': faDumbbell,
  };

  const percentageForAllPayments = ((price / total) * 100).toFixed(2);

  // Date
  let formatedDate = '';
  if (tab === 'all-payment') {

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dd = date.getDate();
    const mm = months[date.getMonth()];
    const yy = date.getFullYear();
  
    formatedDate = dd + " " + mm + " " + yy
  }

  // Payment count or date

  return (
    <div className={styles.container}>
      <div className={`${styles.icon_container} ${styles[category + '_icon_container']}`}>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles[category]}`}
          icon={icon[category]}
        />
      </div>

      <div className={styles.info_container}>
        <span className={styles.category}>{category}</span>
        <span className={styles.price}>$ {price}</span>
        <span className={styles.payment_count}>{tab === 'categories' ? count + ' payments' : formatedDate}</span>
        <span className={styles.percentage}>{percentage || percentageForAllPayments}%</span>
      </div>
    </div>
  );
}

export default ExpenseListItem;

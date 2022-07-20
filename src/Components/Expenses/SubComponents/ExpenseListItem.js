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

const ExpenseListItem = ({ category, price, count, percentage }) => {
  const icon = {
    'Shopping': faCartShopping,
    'Travel': faPlane,
    'Food': faUtensils,
    'Gym': faDumbbell,
  };

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
        <span className={styles.payment_count}>{count} payments</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
    </div>
  );
};

export default ExpenseListItem;

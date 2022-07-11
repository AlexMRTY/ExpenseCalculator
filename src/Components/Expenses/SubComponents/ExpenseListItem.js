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

const ExpenseListItem = (props) => {
  const icon = {
    Shopping: faCartShopping,
    Travel: faPlane,
    Food: faUtensils,
    Gym: faDumbbell,
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={icon[props.dataPoint.category]}
        />
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

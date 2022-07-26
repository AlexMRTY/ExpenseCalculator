import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./AddExpenseButton.module.css";

const AddExpenseButton = (props) => {
  return (
    <div>
      <button onClick={props.clickHandler} className={styles.button}>
        <FontAwesomeIcon icon={faPlus} /> Add Expense
      </button>
      <button onClick={props.clickHandler} className={styles.mobile_button}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddExpenseButton;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./AddExpenseButton.module.css";

const AddExpenseButton = (props) => {
  return (
    <button onClick={props.clickHandler} className={styles.button}>
      <FontAwesomeIcon icon={faPlus} /> Add Expense
    </button>
  );
};

export default AddExpenseButton;

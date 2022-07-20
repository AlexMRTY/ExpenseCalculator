import React, { useState } from "react";

import AddExpenseButton from "./subComponents/AddExpenseButton";
import AddExpenseForm from "./subComponents/AddExpenseForm";

import styles from "./AddExpense.module.css";

const AddExpense = (props) => {
  // Open and close AddExpense form.
  const [isAdding, setIsAdding] = useState(false);
  const isEditingHandler = () => {isAdding ? setIsAdding(false) : setIsAdding(true)};
  // Recieve and pass on form data to App.js
  const formDataHandler = (formData) => {
    props.passOnData(formData);
  };

  return (
    <div className={styles.container}>
      {isAdding ? (
        <AddExpenseForm
          passOnData={formDataHandler}
          isEditing={isEditingHandler}
        />
      ) : (
        <AddExpenseButton clickHandler={isEditingHandler} />
      )}
    </div>
  );
};

export default AddExpense;

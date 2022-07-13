import React, { useState } from "react";

import Card from "../../UI/Card";

import styles from "./AddExpenseForm.module.css";

const AddExpenseForm = (props) => {
  const [category, setCategory] = useState("Shopping");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formData = {
      category: category,
      price: price,
      date: new Date(date),
    };

    props.passOnData(formData)

    // Reset form
    setCategory('Shopping')
    setPrice('')
    setDate('')

    props.isEditing()
  };


  return (
    <Card>
      <form className={styles.container} onSubmit={formSubmitHandler}>
        <select
          name="Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Gym">Gym</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          min="0.01"
          step="0.01"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <button onClick={props.isEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </form>
    </Card>
  );
};

export default AddExpenseForm;

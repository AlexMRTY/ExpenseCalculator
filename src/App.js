import React from "react";
import {v4 as uuidv4} from 'uuid'

import Expenses from "./Components/Expenses/Expenses";

import styles from "./App.module.css";

// FontAwesome Icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function App() {
  
  const randomIdGenerator = () => {
    return uuidv4()
  }

  const dataPoints = [
    {
      id: randomIdGenerator(),
      date: new Date('2019-10-11'),
      category: 'Shopping',
      price: 300
    },
    {
      id: randomIdGenerator(),
      date: new Date('2020-10-11'),
      category: 'Travel',
      price: 500
    },
    {
      id: randomIdGenerator(),
      date: new Date('2021-10-11'),
      category: 'Food',
      price: 120
    },
    {
      id: randomIdGenerator(),
      date: new Date('2022-10-11'),
      category: 'Gym',
      price: 600
    },
    {
      id: randomIdGenerator(),
      date: new Date('2022-11-11'),
      category: 'Shopping',
      price: 50
    },
    {
      id: randomIdGenerator(),
      date: new Date('2022-11-12'),
      category: 'Travel',
      price: 600
    },
    {
      id: randomIdGenerator(),
      date: new Date('2022-11-02'),
      category: 'Food',
      price: 100
    }
  ];


  const getTotalExpenses = () => {
    let total = 0;
    dataPoints.forEach(item => {
      total += item.price
    })

    return total
  }

  let dataSummary = {
    totalPaymentCount: dataPoints.length,
    totalExpenses: getTotalExpenses()
  }


  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Expenses</h1>
          <FontAwesomeIcon icon={faFilter}  className={styles.filter_icon} />
        </div>
        <Expenses dataPoints={dataPoints} dataSummary={dataSummary}/>
      </div>
    </div>
  );
}

export default App;

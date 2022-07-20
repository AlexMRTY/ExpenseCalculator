import React from "react";

import Header from "./SubComponents/Header";

import styles from "./Filter.module.css";

const Filter = ({
  handleFilterButtonClick,
  selectedFilterYear,
  setFilterValue,
}) => {
  return (
    <div className={styles.background}>
      <div className={styles.filter_container}>
        <div className={styles.header}>
          <Header
            title="Filter"
            handleFilterButtonClick={handleFilterButtonClick}
          />
        </div>

        <div className={styles.inputs}>
          <select
            className={styles.date_selector}
            value={selectedFilterYear}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

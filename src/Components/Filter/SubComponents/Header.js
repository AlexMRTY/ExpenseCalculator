import React from "react";

import styles from "./Header.module.css";

// FontAwesome Icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Header = ({handleFilterButtonClick, title}) => {
    
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.filter_container} >
        <FontAwesomeIcon
          icon={faFilter}
          className={styles.filter_icon}
          onClick={handleFilterButtonClick}
        />
      </div>
    </div>
  );
};

export default Header;

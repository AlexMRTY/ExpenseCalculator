import styles from "./App.module.css";

import Expenses from "./Components/Expenses/Expenses";

// FontAwesome Icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Expenses</h1>
          <FontAwesomeIcon icon={faFilter}  className={styles.filter_icon} />
        </div>
      </div>
      <Expenses />
    </div>
  );
}

export default App;

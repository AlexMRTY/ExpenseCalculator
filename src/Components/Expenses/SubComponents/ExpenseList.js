import React from 'react';

import ExpenseListItem from './ExpenseListItem';

import styles from './ExpenseList.module.css';

const ExpenseList = (props) => {


    
    return (

        <div className={styles.container}>
            {
                props.filteredData.map(item => <ExpenseListItem 
                    dataPoint={item} 
                    count={props.paymentCount[item.category]}
                    price={props.costByCategory[item.category]}
                    percentage={props.percentage[item.category]}
                    />)
            }
            
        </div>
    );
}

export default ExpenseList
import React from 'react';

import Total from './SubComponents/Total'
import Tabs from './SubComponents/Tabs'
import ExpenseList from './SubComponents/ExpenseList'
import Card from '../UI/Card'

import styles from './Expenses.module.css'

const Expenses = (props) => {

    let dataSummary = {
        date: 'FEBRUARY 2022  .  14 PAYMENTS',
        total: 0
    }
    // Structuring data for the expense list component. 
    const paymentCount = {}
    const costByCategory = {}
    const percentage = {}
    const filteredData = [];
    props.dataPoints.forEach(item => {
        // Create clean duplicate free data ready to pass to expense list. 
        if(!(item.category in paymentCount)) {
            filteredData.push(item)
        }

        // Calculate duplicate count for each categories.
        paymentCount[item.category] = (paymentCount[item.category] || 0) + 1;

        // Add up prices which belong in the same category.
        costByCategory[item.category] = (costByCategory[item.category] || 0) + item.price;
        dataSummary.total += item.price;

    })

    props.dataPoints.forEach(item => {
        
        // Calculate percentage of total expenses for each category.
        percentage[item.category] = (((costByCategory[item.category] / dataSummary.total) || 0) * 100).toFixed(2)
    })



    

    return (
        <Card>
            <Total data={dataSummary} />
            <ExpenseList filteredData={filteredData} costByCategory={costByCategory} paymentCount={paymentCount} percentage={percentage}/>
        </Card>
    )
}

export default Expenses;
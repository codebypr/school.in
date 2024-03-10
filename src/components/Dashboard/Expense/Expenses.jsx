import React from 'react'
import AddExpenses from './AddExpenses'
import ViewExpenses from './ViewExpenses'

function Expenses() {
    return (
        <>
            <div className="container p-0">
                <div className="row ">
                    <div className="col-xl-3 p-0">
                        <AddExpenses />
                    </div>
                    <div className="col-xl-9">
                        <ViewExpenses />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Expenses
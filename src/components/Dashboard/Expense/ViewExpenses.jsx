import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';

function ViewExpenses() {
    const stateChange=useSelector(state=>state.redUpdatedState.updatedState)

    
    const [search,setSearch] = useState('');
    const [realData,setRealData] = useState([]);
    const [updatedData,setUpdatedData] = useState([]);


    useEffect(()=>{
        ;(async ()=>{
            const res = await axios.get('http://localhost:3000/readexpense')
            setRealData(res.data)
            setUpdatedData(res.data)
           
        })()  
    },[stateChange])

    const columns = [
        {
            name: 'S.NO',
            selector: row => row.expenseId
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Expense Head',
            selector: row => row.type,
             sortable: 'true'
        },
        {
            name: 'Date',
            selector: row => row.date
        },
        {
            name: 'Amount ($)',
            selector: row => row.amount,
             sortable: 'true'
        },
        {
            name: 'Description',
            selector: row => row.description
        },
        {
            name: 'Invoice No',
            selector: row => row.invoiceNumber,
             sortable: 'true'
        },
        
       
    ]


   useEffect( () => {
        setUpdatedData(realData);
        const result = realData.filter((data) => (
            data.name.toLowerCase().match(search.toLowerCase())
        ))
        setUpdatedData(result)
    },[search])
  return (
    <>
        <div className="conatiner border">
        <DataTable data={updatedData} columns={columns}
                    title='Expense List'
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='62vmin'
                    subHeader
                    subHeaderComponent={
                        <input type='text' placeholder='search fere' className='border border-0 border-bottom'style={{outline:'none'}}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    }
                    
                />
        </div>
    </>
  )
}

export default ViewExpenses
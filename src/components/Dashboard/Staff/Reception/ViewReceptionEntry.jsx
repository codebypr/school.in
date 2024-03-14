import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

function ViewReceptionEntry() {
    const [search,setSearch] = useState('');
    const [realData,setRealData] = useState([]);
    const [updatedData,setUpdatedData] = useState([]);


    useEffect(()=>{
        ;(async ()=>{
            const res = await axios.get('http://localhost:3000/readreceptionentry')
            setRealData(res.data)
            setUpdatedData(res.data)
        })()  
    },[])

    const columns = [
        {
            name: 'S.NO',
            selector: row => row.id,
            sortable: 'true'
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Purpose',
            selector: row => row.purpose,
        },
        {
            name: 'Date',
            selector: row => row.date
        },
        {
            name: 'Address',
            selector: row => row.address,
        },
        {
            name: 'Phone',
            selector: row => row.phone
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Message',
            selector: row => row.message,
        },
        
       
    ]


   useEffect( () => {
        setUpdatedData(realData);
        const result = realData.filter((data) => (
            data.purpose.toLowerCase().match(search.toLowerCase())
        ))
        setUpdatedData(result)
    },[search])
  return (
    <>
        <div className="conatiner shadow-lg me-4">
        <DataTable data={updatedData} columns={columns}
                    title='All Entries for users'
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='100vmin'
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


export default ViewReceptionEntry
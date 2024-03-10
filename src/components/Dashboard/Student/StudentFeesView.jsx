
import React from 'react'

function StudentFeesView({studentData,feesData}) {

    
  return (
    <>
        <table className="table table-danger">
            <thead className='table-secondary '>
                <tr >
                <th>Admission No</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Fine</th>
                <th>Payment Mode</th>
                <th>Recipt No</th>
                </tr>
            </thead>
            <tbody>
                { feesData.length!==0 ?
                    feesData.map((data,i)=>(
                        <tr key={i} >
                              <td>{data.studentId}</td>  
                              <td>{data.name}</td>  
                              <td>{data.date}</td>  
                              <td>{data.amount}</td>  
                              <td>{data.discount}</td>  
                              <td>{data.fine}</td>  
                              <td>{data.mode}</td>  
                              <td>{data.recipet}</td>  
                        </tr>
                    ))  :
                   (<tr key={'trow'}><td colspan="7" className='text-center' >No Data Found</td></tr>)
                }
            </tbody>
        </table>
    </>
  )
}

export default StudentFeesView
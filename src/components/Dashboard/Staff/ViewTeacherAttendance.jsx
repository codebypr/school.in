import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewTeacherAttendance({ data }) {
  const [AttData,setAttData] = useState([]);

  const dateArr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    ['Date', 'jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ]

  useEffect(()=>{
    ;(async()=>{
       const res= await axios.get('http://localhost:3000/readtecattendance')
        setAttData(res.data)
              
    })()
  },[])

  const getAttendance = () => {
    for (let i = 0; i < AttData.length; i++) {
        
      if ((AttData[i]).attendanceId == data.id) {
        let date = (AttData[i]).date
        let arr = date.split('-');

        let month = arr[1]
        if (month[0] == '0') {
          let m = month.split('0')
          month = m[1]
        }

        let day = arr[2]
        if (day[0] == '0') {
          let m = day.split('0')
          day = m[1]
        }

        const row = document.getElementsByName(day);
        row.forEach((a) => {

          let box = a.children[month];
          let finalAtt=(AttData[i]).attendance;
          box.innerText = finalAtt
        })


      }
    }
  }
 useEffect(()=>{
    getAttendance()
 },[AttData])
  
  return (
    <>
      
        <table className=" table text-center">
          
            <thead key='thead' className='table-secondary'>
                <tr>
                  
              {
                dateArr[1].map((ele,i) => (<th key={i}>{ele}</th>))
              }
                </tr>
            </thead>
            <tbody key='tbody'>
            {
              dateArr[0].map((ele,i) => (<tr name={ele} key={i}><td className='fw-bold'>{ele}</td>
                {dateArr[2].map((box,i) => (<td className='border ' id={box} key={i}>-</td>))}
              </tr>))
            }
          </tbody>
        </table>
      

    </>
  )
}

export default ViewTeacherAttendance

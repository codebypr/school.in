import React, { useEffect, useState } from 'react'
import Staffcard from './Staffcard'
import axios from 'axios';
import ViewTeacher from './ViewTeacher';

function AallStaff() {

  const [values, setValues] = useState([]);
  const [viewTeacher, setViewTeacher] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    ; (async () => {
      const result = await axios.get('http://localhost:3000/readteacherinfo')
      setValues(result.data);
    })()
  }, [])

  return (
    <>

            <div className="container">
        <div className="row">
          {
            values.map((data,i) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={i} >
                <Staffcard 
              name={data.firstName}
              role={data.role}
              date={data.doj}
              /></div>
            ))
          }
          </div>
      </div>
          

        

    </>
  )
}

export default AallStaff
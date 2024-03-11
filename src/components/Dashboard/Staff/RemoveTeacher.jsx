
import React, { useEffect, useState } from 'react'
 import user from '../../../MyImages/defaultUser.jpg'
 import { MdDelete } from "react-icons/md";
import DataTable from 'react-data-table-component';
import axios from 'axios';


function RemoveTeacher() {
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');
    const [myState,setMyState]= useState(false);
    const [realValues, setRealValues] = useState([]);
    const [values, setValues] = useState([]);
    
    useEffect(() => {
        ; (async () => {
          const result = await axios.get('http://localhost:3000/readteacherinfo')
          setValues(result.data);
          setRealValues(result.data);
        })()
      }, [myState])
    const columns = [
        {
            name: 'Date of Joining',
            selector: row => row.doj
        },
        {
            name: 'Photo',
            selector: row => <img src={user} style={{ width: '7vmin', height: '7vmin', objectFit: 'cover', borderRadius: '50%', padding: '5px' }} />
        },
        {
            name: 'Name',
            selector: row => row.firstName
        },
        
        {
            name: 'Role',
            selector: row => row.role
        },
        {
            name: 'City',
            selector: row => row.city
        },
        {
            name: 'Phone',
            selector: row => row.phone
        },
         {   
            name: 'Action',
            selector: row => <button className='stdEyeBtn' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setId(row.id)}> <MdDelete color='red' /> delete</button>
                },
    ]


   
    const deleteStudent=(id)=>{
        axios.delete('http://localhost:3000/deleteteacher/'+id)
        .then(res=>setMyState(true))
         .catch(err=>console.log(" Teacher not deleted ! "+err))
    }
   
    useEffect(() => {
        setValues(realValues);
        const result = realValues.filter((student) => (
            student.firstName.toLowerCase().match(search.toLowerCase())
        ))
        setValues(result)
    }, [search])


    return (
        <>

             
                    <DataTable data={values} columns={columns}
                    title='All Teacher'
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='65vmin'
                    subHeader
                    subHeaderComponent={
                        <input type='text' placeholder='search fere'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                />
                


{/*           Modal             */}

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Final Conformation !</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-footer">
                <button className='btn btn-success' data-bs-dismiss="modal"
                onClick={()=>deleteStudent(id)}
                >confirm</button>
                </div>
    </div>
  </div>
</div>

        </>
    )
}


export default RemoveTeacher
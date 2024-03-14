import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TeacherProfile from './TeacherProfile';
import ViewTeacherAttendance from './ViewTeacherAttendance';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import im from '../../../MyImages/principle.jpg';

function ViewTeacher({id}) {
  const [tab,setTab]=useState('');
  const [data,setData]=useState('');
  
  useEffect(()=>{
    axios.get('http://localhost:3000/readsingleteacherinfo/'+id)
    .then(res=>{setData(res.data[0])})
    .catch(err=>{console.log(err)})
 },[])

 const handleDownloadPDF = () => {
  const form = document.getElementById('ICard');

  html2canvas(form)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 90; // A4 width in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 60, 20, imgWidth, imgHeight);
      pdf.save('ID card.pdf');
    });
};

  return (
    <div className='container'>
        <div className="contaner ">
            <div className="row">
                <div className="col-xl-3 p-0 ">
            <button onClick={handleDownloadPDF} className="btn btn-primary btn-sm  mt-2">Download ID Card</button>
                  <form id="ICard" >
                <div className="card shadow-lg mb-5 " >
          <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor:'#000',height:'150px'}}>
            <div className="ms-4 mt-5 d-flex flex-column " style={{width:'100px'}}>
              <img src={im} className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width:'150px',zIndex:'3'}}/>
            </div>
            <div className="ms-3" style={{marginTop:'70px'}}>
              <h5 className='mb-0'>{data.firstName}</h5>
              <p>{data.city}</p>
            </div>
          </div>
          <div className="card-body p-4 text-black bg-white ">
          <table className="table">  
            <tbody>    
              <tr>
                <td>Staff ID</td>
                <td className='text-end'>{data.id}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td className='text-end'>{data.role}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td className='text-end'>{data.gender}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </form>
      </div>

                {/*  2nd */}
                <div className="col-xl-9 ">
               
              <ul className="nav nav-tabs">
                <li className="nav-item ">
                  <button className="nav-link text-black"
                    onClick={()=>setTab('profile')}
                  >Profile</button>
                  </li>
                                
                <li className="nav-item">
                  <button className="nav-link text-black "
                    onClick={()=>setTab('attendance')}
                  >Attendance</button>
                  </li>                
              </ul>

               
              
<div className='shadow-lg'>
               {
                  tab=='profile' && (<TeacherProfile data={data}/>)
                }
                {
                  tab=='attendance' && (<ViewTeacherAttendance data={data}/>)
                }
                
              
              </div>             
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ViewTeacher
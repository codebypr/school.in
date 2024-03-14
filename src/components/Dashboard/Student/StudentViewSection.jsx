import React, { useEffect, useState } from 'react'
import StudentProfile from './StudentProfile'
import StudentAttendanceView from './StudentAttendanceView';
import StudentFeesView from './StudentFeesView';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function StudentViewSection({id}) {
  const [tab,setTab]=useState('');
  const [feesData,setFeesData]=useState([]);
  const [data,setData]=useState([]);
  const [studentId,setStudentId] = useState('')


// getting fees data from backend..........
  useEffect(()=>{
   axios.get('http://localhost:3000/readfees/'+id)
   .then(res=>{setFeesData(res.data)})
   .catch(err=>{console.log(err)})
},[])

  useEffect(()=>{
   axios.get('http://localhost:3000/readsinglestudentinfo/'+id)
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
        <div className="contaner">
            <div className="row">
                <div className="col-xl-3 p-0">
                <button onClick={handleDownloadPDF} className="btn btn-primary btn-sm  mt-2">Download ID Card</button>
                <form id="ICard" >
                <div className="card shadow-lg mb-5">
          <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor:'#000',height:'150px'}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width:'100px'}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width:'150px',zIndex:'1'}}/>
            </div>
            <div className="ms-3" style={{marginTop:'70px'}}>
              <h5 className='mb-0'>{data.firstName}</h5>
              <p>{data.city}</p>
            </div>
          </div>
          <div className="p-4 text-black" style={{backgroundColor:'#f8f9fa'}}>
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h6">{data.id}</p>
                <p className="small text-muted mb-0">Admission No</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h6">{data.roll}</p>
                <p className="small text-muted mb-0">Roll No</p>
              </div>
             
            </div>
          </div>
          <div className="card-body p-4 text-black bg-white">
          <table className="table">  
            <tbody>    
              <tr>
                <td>Class</td>
                <td className='text-end'>{data.class}</td>
              </tr>
              <tr>
                <td>Section</td>
                <td className='text-end'>{data.section}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td className='text-end'>{data.gender}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div></form>
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
                  <button className="nav-link text-black" 
                    onClick={()=>setTab('fees')}
                  >Fees</button>
                </li>
                                
                <li className="nav-item">
                  <button className="nav-link text-black "
                    onClick={()=>setTab('attendance')}
                  >Attendance</button>
                  </li>                
              </ul>
             
      <div className='shadow-lg'>
               {
                  tab=='profile' && (<StudentProfile data={data}/>)
                }
                {
                  tab=='attendance' && (<StudentAttendanceView data={data}/>)
                }
                {
                  tab=='fees' && (<StudentFeesView studentData={data} feesData={feesData}/>)
                }
              
              </div>             
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default StudentViewSection
import React, { useEffect, useState } from 'react'
import {  FaHome } from "react-icons/fa"
import { IoMenu,IoReceipt ,IoPersonAdd,IoHandRightSharp} from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";

import StudentAdmission from './Student/StudentAdmission';
import StudentDetails from './Student/StudentDetails';
import StudentAttendance from './Student/StudentAttendance';
import { useDispatch } from 'react-redux';
import { readStudentData } from '../../store/StudentDataSlice';
import axios from 'axios';
import { sendAttToStore } from '../../store/StudentAttendanceSlice';


function MainPannel() {
  const dispatch=useDispatch(); 
    const [togglebtn,setToggleBtn]=useState(false);
    const [pannel,setPannel]=useState('');
    const [values,setValues]=useState([])
    const [attData,setAttData]=useState([])
    
    // student Data sending on Store............... 
   
    useEffect(()=>{
      axios.get('http://localhost:3000/readstudentinfo/')
      .then(data=>{dispatch(readStudentData(data.data))})
        .catch(err=>console.log(err))
    },[])

    // student Attendance sending on Store............... 
    
  useEffect(()=>{
    axios.get('http://localhost:3000/readattendance/')
      .then(data=>{dispatch(sendAttToStore(data.data)) })
      .catch(err=>console.log(err))
  },[])


    const togelSideBar=()=>{
        const sidebar=document.getElementById('sidebarMenu');
        if(togglebtn){
            sidebar.style.display='none';
            setToggleBtn(false)
        }else{
            sidebar.style.display='block';
            setToggleBtn(true)
        }
    }
    useEffect(()=>{
      const sidebar=document.getElementById('sidebarMenu');
      if(togglebtn){
          sidebar.style.display='block';
      }else{
          sidebar.style.display='none';
      }
    },[togglebtn])
  return (
    <>
            
<header>
  {/* <!-- Sidebar --> */}
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse " style={{backgroundColor:'#242426',width:'210px'}}>
    <div className="position-sticky">
      <div className="list-group list-group-flush mt-4 sideBtn ">        
        <button  className="text-start py-2  w-100" onClick={()=>setToggleBtn(false)}>
          <FaHome className="mx-3 " color='white' size={20}/><span>Main dashboard</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('student admission'); setToggleBtn(false)}}>
          <IoPersonAdd className="mx-3" color='white' size={20}/><span>Student Admission</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('student details'); setToggleBtn(false)}}>
          <BiSolidUserDetail className="mx-3" color='white' size={20}/><span>Student Details</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('collect fees'); setToggleBtn(false)}}>
          <IoReceipt className="mx-3" color='white' size={20}/><span>Collect Fees</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('attendance'); setToggleBtn(false)}}>
          <IoHandRightSharp className="mx-3" color='white' size={20}/><span>Student Attendance</span>
        </button>
      </div>
    </div>
  </nav>
  {/* <!-- Sidebar --> */}


  {/* <!-- Navbar --> */}
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg" style={{backgroundColor:'#242426'}}>
        
    <div className="container-fluid">
      <div className='navbar-toggler'>
     <IoMenu color='white' size={25} onClick={togelSideBar} style={{cursor:'pointer'}}/>  </div>
        <h4 className='text-white d-none d-lg-block'>Admin</h4>
      
      <div className="navbar-nav ms-auto d-flex flex-row">       
            <img src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"} className="rounded-circle"
              height="22" alt="Avatar" loading="lazy" />        
      </div>
    </div>
  </nav>
</header>



{/* <!--Main layout--> */}
<main style={{marginTop:'56px'}}>
  {
    pannel=='student admission' && (<StudentAdmission/>)
  }
  {
    pannel=='student details' && (<StudentDetails view={true}/>)
  }
  {
    pannel=='collect fees' && (<StudentDetails fees={true}/>)
  }
  {
    pannel=='attendance' && (<StudentAttendance/>)
  }
</main>

    </>
  )
}

export default MainPannel
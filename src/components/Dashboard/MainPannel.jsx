import React, { useEffect, useState } from 'react'
import {  FaHome,FaRupeeSign ,FaChalkboard ,FaUserCheck  } from "react-icons/fa"
import { IoMenu,IoReceipt ,IoPersonAdd,IoHandRightSharp} from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";

import StudentAdmission from './Student/StudentAdmission';
import StudentDetails from './Student/StudentDetails';
import StudentAttendance from './Student/StudentAttendance';
import { useDispatch } from 'react-redux';
import { readStudentData } from '../../store/StudentDataSlice';
import axios from 'axios';
import { sendAttToStore } from '../../store/StudentAttendanceSlice';
import Expenses from './Expense/Expenses';
import NoticeBoard from './Communicate/NoticeBoard';
import AddNewStaff from './Staff/AddNewStaff';
import StaffDetails from './Staff/StaffDetails';
import StaffAttendance from './Staff/StaffAttendance';


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
        <button  className="text-start py-2  w-100" onClick={()=>{setToggleBtn(false);setPannel('')}}>
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

        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('expenses'); setToggleBtn(false)}}>
          <FaRupeeSign className="mx-3" color='white' size={20}/><span>Expenses</span>
        </button>

        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('notice board'); setToggleBtn(false)}}>
          <FaChalkboard  className="mx-3" color='white' size={20}/><span>Notice Board</span>
        </button>
        <button className="text-start py-2 w-100" onClick={()=>{setPannel('all staff'); setToggleBtn(false)}}>
          <FaUsersViewfinder  className="mx-3" color='white' size={20}/><span>All Members</span>
        </button>
        <button className="text-start py-2 w-100" onClick={()=>{setPannel('add staff'); setToggleBtn(false)}}>
          <FaUserCheck   className="mx-3" color='white' size={20}/><span>Add New Member</span>
        </button>
        <button className="text-start py-2 w-100" onClick={()=>{setPannel('teacher attendance'); setToggleBtn(false)}}>
          <IoHandRightSharp   className="mx-3" color='white' size={20}/><span>Teacher Attendance</span>
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
    pannel=='' && (<>
    <div className="container text-center"><img src={'https://i.pinimg.com/474x/cb/6e/4d/cb6e4d9aaf52b49fd12173c5f8e36a67.jpg'} width={180}/></div>
    <h4>Current Notice</h4>
    <NoticeBoard hide={'hide'}/>
    </>)
  }
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
  {
    pannel=='expenses' && (<Expenses/>)
  }
  {
    pannel=='notice board' && (<NoticeBoard/>)
  }
  {
    pannel=='all staff' && (<StaffDetails/>)
  }
  {
    pannel=='add staff' && (<AddNewStaff/>)
  }
  {
    pannel=='teacher attendance' && (<StaffAttendance/>)
  }
</main>

    </>
  )
}

export default MainPannel
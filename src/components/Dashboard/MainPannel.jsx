import React, { useEffect, useState } from 'react'
import {  FaHome } from "react-icons/fa"
import { IoMenu } from "react-icons/io5";
import StudentAdmission from './Student/StudentAdmission';
import StudentDetails from './Student/StudentDetails';


function MainPannel() {
    const [togglebtn,setToggleBtn]=useState(false);
    const [pannel,setPannel]=useState('');

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
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse " style={{backgroundColor:'#242426'}}>
    <div className="position-sticky">
      <div className="list-group list-group-flush mt-4 sideBtn">        
        <button  className="text-start py-2  w-100" onClick={()=>setToggleBtn(false)}>
          <FaHome className="mx-3 " color='white' size={20}/><span>Main dashboard</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('student admission'); setToggleBtn(false)}}>
          <FaHome className="mx-3" color='white' size={20}/><span>Student Admission</span>
        </button>
        <button  className="text-start py-2 w-100" onClick={()=>{setPannel('student details'); setToggleBtn(false)}}>
          <FaHome className="mx-3" color='white' size={20}/><span>Student Details</span>
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
<main style={{marginTop:'58px'}}>
  {
    pannel=='student admission' && (<StudentAdmission/>)
  }
  {
    pannel=='student details' && (<StudentDetails/>)
  }
</main>

    </>
  )
}

export default MainPannel
import React, { useEffect, useState } from 'react'
import { FaHome, FaRupeeSign, FaChalkboard, FaUserCheck } from "react-icons/fa"
import { IoMenu, IoReceipt, IoPersonAdd, IoHandRightSharp } from "react-icons/io5";
import { BiSolidUserDetail, BiNoEntry, BiSolidNoEntry } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdDelete, MdAssignmentAdd } from "react-icons/md";
import { FcLeave } from "react-icons/fc";

import StudentAdmission from './Student/StudentAdmission';
import StudentDetails from './Student/StudentDetails';
import StudentAttendance from './Student/StudentAttendance';
import axios from 'axios';
import Expenses from './Expense/Expenses';
import NoticeBoard from './Communicate/NoticeBoard';
import AddNewStaff from './Staff/AddNewStaff';
import StaffDetails from './Staff/StaffDetails';
import StaffAttendance from './Staff/StaffAttendance';
import RemoveStudent from './Student/RemoveStudent';
import RemoveTeacher from './Staff/RemoveTeacher';
import Maincards from './Maincards';
import { useNavigate } from 'react-router-dom';
import StudentViewSection from './Student/StudentViewSection';
import ViewReceptionEntry from './Staff/Reception/ViewReceptionEntry';
import ReceptionForm from './Staff/Reception/ReceptionForm';
import ViewTeacher from './Staff/ViewTeacher';
import ViewNoticeBoard from './Communicate/ViewNoticeBoard';
import AssignClass from './Staff/AssignClass';
import Alert from '../Alert';
import LeaveSection from './Staff/LeaveSection';
import AcceptLeave from './Staff/AcceptLeave';



function MainPannel() {
  const navigate = useNavigate();
  const [togglebtn, setToggleBtn] = useState(false);
  const [pwdConfirm, setPWDConfirm] = useState(false);
  const [pannel, setPannel] = useState('');
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [userPWD, setUserPWD] = useState('');
  const [password, setPassword] = useState({
    password1:'',
    password2:'',
  });
  const [userId, setUserId] = useState('Pritam')

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => {
        if (res.data.Status == 'success') {
          setUserId(res.data.id)
          setUserPWD(res.data.password)
          setUserName(res.data.firstName)
          setUserType(res.data.role ? res.data.role : 'Student');
        } else {
          alert(res.data.Message)
        }
      })
  }, [setPWDConfirm])


  //      Functions ....................

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (userType=='Student') {
      axios.put('http://localhost:3000/editstudentpwd/'+userId,password)
      .then(()=>setPWDConfirm(true))
      .catch((err)=>console.log(err))
    }else{
      axios.put('http://localhost:3000/editteacherpwd/'+userId,password)
      .then(()=>setPWDConfirm(true))
      .catch((err)=>console.log(err))
    }
    setTimeout(()=>{
      setPWDConfirm(false)
      setPassword({
        password1:'',
        password2:''
      })
    },2000)
  }

  const togelSideBar = () => {
    const sidebar = document.getElementById('sidebarMenu');
    if (togglebtn) {
      sidebar.style.display = 'none';
      setToggleBtn(false)
    } else {
      sidebar.style.display = 'block';
      setToggleBtn(true)
    }
  }

  const logoutStudent = () => {
    axios.get('http://localhost:3000/logoutstudent')
      .then(res => {
        if (res.data.Status == 'success') {
          navigate('/login')
        } else {
          alert("some err")
        }
      })
  }

  useEffect(() => {
    const sidebar = document.getElementById('sidebarMenu');
    if (togglebtn) {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  }, [togglebtn])
  return (
    <>

      <header>
        {/* <!-- Sidebar --> */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse " style={{ backgroundColor: '#242426', width: '230px', overflow: 'auto' }} >
          <div className="position-sticky" >
            <div className="list-group list-group-flush mt-2 sideBtn ">

              <button className="text-start py-2  w-100" onClick={() => { setToggleBtn(false); setPannel('') }}>
                <FaHome className="mx-3 " color='brown' size={20} /><span>Main dashboard</span>
              </button>

              {
                userType == 'Admin' &&
                <button className="text-start py-2 w-100" onClick={() => { setPannel('student admission'); setToggleBtn(false) }}>
                  <IoPersonAdd className="mx-3" color='yellow' size={20} /><span>Student Admission</span>
                </button>
              }


              {
                (userType == 'Teacher' || userType == 'Admin') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('student details'); setToggleBtn(false) }}>
                  <BiSolidUserDetail className="mx-3" color='orange' size={20} /><span>Student Details</span>
                </button>
              }

              {userType == 'Student' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('student view'); setToggleBtn(false) }}>
                  <FaUserCheck className="mx-3" color='pink' size={20} /><span>Student</span>
                </button>
              }

              {(userType == 'Teacher' || userType == 'Accountant' || userType=='Receptionist') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('teacher view'); setToggleBtn(false) }}>
                  <FaUserCheck className="mx-3" color='pink' size={20} /><span>Teacher</span>
                </button>
              }
              {(userType == 'Teacher' || userType == 'Accountant' || userType=='Receptionist') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('leave'); setToggleBtn(false) }}>
                  <FcLeave className="mx-3"  size={20} /><span>Leave</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('remove student'); setToggleBtn(false) }}>
                  <MdDelete className="mx-3" color='red' size={20} /><span>Remove Student</span>
                </button>
              }

              {
                (userType == 'Admin' || userType == 'Accountant') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('collect fees'); setToggleBtn(false) }}>
                  <IoReceipt className="mx-3" color='orange' size={20} /><span>Collect Fees</span>
                </button>
              }


              {
                (userType == 'Teacher' || userType == 'Admin') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('attendance'); setToggleBtn(false) }}>
                  <IoHandRightSharp className="mx-3" color='green' size={20} /><span>Student Attendance</span>
                </button>
              }

              {
                (userType == 'Teacher' || userType == 'Admin') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('expenses'); setToggleBtn(false) }}>
                  <FaRupeeSign className="mx-3" color='orange' size={20} /><span>Expenses</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('notice board'); setToggleBtn(false) }}>
                  <FaChalkboard className="mx-3" color='orange' size={20} /><span>Notice Board</span>
                </button>
              }
              {
                userType !== 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('view noticeboard'); setToggleBtn(false) }}>
                  <FaChalkboard className="mx-3" color='orange' size={20} /><span>Notice Board</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('all staff'); setToggleBtn(false) }}>
                  <FaUsersViewfinder className="mx-3" color='orange' size={20} /><span>All Members</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('remove teacher'); setToggleBtn(false) }}>
                  <MdDelete className="mx-3" color='red' size={20} /><span>Remove Teacher</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('assign class'); setToggleBtn(false) }}>
                  <MdAssignmentAdd className="mx-3" color='pink' size={20} /><span>Assign Class</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('add staff'); setToggleBtn(false) }}>
                  <FaUserCheck className="mx-3" color='yellow' size={20} /><span>Add New Member</span>
                </button>
              }

              {
                userType == 'Admin' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('teacher attendance'); setToggleBtn(false) }}>
                  <IoHandRightSharp className="mx-3" color='green' size={20} /><span>Teacher Attendance</span>
                </button>
              }

              {
                userType == 'Receptionist' &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('entry form'); setToggleBtn(false) }}>
                  <BiSolidNoEntry className="mx-3" color='pink' size={20} /><span>Entry Form</span>
                </button>
              }
              {
                (userType == 'Admin' || userType == 'Receptionist') &&

                <button className="text-start py-2 w-100" onClick={() => { setPannel('view entry'); setToggleBtn(false) }}>
                  <BiNoEntry className="mx-3" color='green' size={20} /><span>View All Entry</span>
                </button>
              }


            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}


        {/* <!-- Navbar --> */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg" style={{ backgroundColor: '#242426' }}>

          <div className="container-fluid">
            <div className='navbar-toggler'>
              <IoMenu color='white' size={25} onClick={togelSideBar} style={{ cursor: 'pointer' }} />  </div>
            <h4 className='text-white d-none d-lg-block'>{userType}</h4>
            <div className="navbar-nav ms-auto   d-flex  ">
              
              <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                <img src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"} className="rounded-circle"
                height="22" alt="Avatar" loading="lazy" />
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {userName}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <li>
                      <button className="dropdown-item btn btn-dark btn-sm "
                        data-bs-toggle="modal" data-bs-target="#changePWD"
                      >Change Password</button>
                    </li>
                    <li>
                      <button className="dropdown-item btn btn-dark btn-sm "
                        onClick={logoutStudent}>Logout</button>
                    </li>
                  </ul>
                </li>
              </ul>


            </div>
          </div>
        </nav>
      </header>



      {/* <!--Main layout--> */}
      <main style={{ marginTop: '56px' }}>
              {userType=='Admin' && <AcceptLeave/>}
        {
          pannel == '' && (<Maincards />)
        }
        {
          pannel == 'student admission' && (<StudentAdmission />)
        }
        {
          pannel == 'student details' && (<StudentDetails view={true} />)
        }
        {
          pannel == 'collect fees' && (<StudentDetails fees={true} />)
        }
        {
          pannel == 'attendance' && (<StudentAttendance userType={userType} userId={userId} />)
        }
        {
          pannel == 'expenses' && (<Expenses />)
        }
        {
          pannel == 'notice board' && (<NoticeBoard />)
        }
        {
          pannel == 'view noticeboard' && (<ViewNoticeBoard type={userType} />)
        }
        {
          pannel == 'all staff' && (<StaffDetails />)
        }
        {
          pannel == 'assign class' && (<AssignClass />)
        }
        {
          pannel == 'add staff' && (<AddNewStaff />)
        }
        {
          pannel == 'teacher attendance' && (<StaffAttendance />)
        }
        {
          pannel == 'remove student' && (<RemoveStudent />)
        }
        {
          pannel == 'remove teacher' && (<RemoveTeacher />)
        }
        {
          pannel == 'student view' && (<StudentViewSection id={userId} />)
        }
        {
          pannel == 'teacher view' && (<ViewTeacher id={userId} />)
        }
        {
          pannel == 'leave' && (<LeaveSection id={userId} userName={userName} userType={userType} />)
        }
        {
          pannel == 'entry form' && (<ReceptionForm />)
        }
        {
          pannel == 'view entry' && (<ViewReceptionEntry />)
        }
      </main>







      <div className="modal fade" id="changePWD" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
        {
              pwdConfirm && <Alert type={'primary'} msg={'Password is successfully updated please login again .'}/>
            }
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Change Password</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div >
                <input type="text" className="form-control ps-2 p-0" placeholder={`Your Current Password is : ${userPWD}`} disabled/>
              </div>
              <div className='mt-2'>
                <label >New Password</label>
                <input type="password" className="form-control ps-2 "
                  value={password.password1}
                  onChange={(e) => setPassword({ ...password, password1: e.target.value })}
                  required />
              </div>
              <div className='mt-2'>
                <label >Confirm Password</label>
                <input type="password" className="form-control ps-2 "
                  value={password.password2}
                  onChange={(e) => setPassword({ ...password, password2: e.target.value })}
                  required />
              </div>
             
            </div>
            <div className="modal-footer">
           
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
              <button type="submit" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default MainPannel
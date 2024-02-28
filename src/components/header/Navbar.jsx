import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../MyImages/logo.jpg'
import '../../Custom_Css/header.css'

function Navbar() {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top bg-white">
                <div className="container-fluid d-lg-block p-0">
                  
                    <NavLink className="px-lg-5 navbar-brand d-flex justify-content-between flex-column flex-lg-row ">
                        <img  src={logo} width={330}/>
                        <span className="text-end ">                        
                        <button className='btn  me-4 text-white p-2' style={{width:'100px',borderRadius:'47%',backgroundColor:'#881e1e'}}>Login</button>
                        </span>
                      </NavLink>
                  
                
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mt-2 d-flex justify-content-evenly  w-100  border-top border-black shadow-lg">
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/online-course'}>Online Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/online-admission'}>Online Admission</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/exam-result'}>Exam Result</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/about'}>About Us</NavLink>
                            </li>

                            <li className="nav-item dropdown rounded-3">
                            <NavLink className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={'smart-class'}>Smart Classroom</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={'computer-lab'}>Computer Lab</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={'library'}>Liberary</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={'music-lab'}>Music & Dance</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to={'sports'}>Sports</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/gallery'}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/news'}>News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/contact'}>Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
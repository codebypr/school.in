import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../MyImages/logo.jpg'
import { MdAddIcCall } from "react-icons/md"
function Navbar() {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top bg-white">
                <div className="container-fluid d-lg-block p-0">
                 
                    
                        <img className='navbar-brand ms-2 headerLogo ' src={logo} />
                       
                        {/* <button className='btn text-white px-2 d-none d-lg-block' style={{width:'100px',borderRadius:'47%',backgroundColor:'#881e1e'}}>Login</button> */}
                        {/* <span className='d-none d-lg-block fs-6'><MdAddIcCall color='green'/> 1234567890</span> */}
                       
                        
                     
                
                    <button className="navbar-toggler float-right"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                   
                    <div className="collapse navbar-collapse container-fluid border-top border-black shadow" id="navbarSupportedContent">
                        <ul className="navbar-nav container-fluid navbarul">
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/'}>Home</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/about'}>About Us</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/online-admission'}>Online Admission</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/exam-result'}>Exam Result</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/academic'}>Academics</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                            <NavLink className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Facilities</NavLink>
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
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/contact'}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>`nav-link active  ${isActive && `activeNav`}`} to={'/login'}>Login</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
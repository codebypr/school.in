import React from 'react'
import { MdAddIcCall } from "react-icons/md"

function HeaderSection() {
  return (
    <>
      <div className="container-fluid p-0 header">
        <div className='box1 d-flex pe-lg-5'>
          <span className='ms-5 b1'>News</span>

          <marquee behavior="scroll" direction="left" >
        <ul className=" headerUl">

          <li > <strong>12 February 2024</strong> Annual Day Function  </li>         
          <li > <strong>01 February 2024 </strong> ADMISSION NOTICE FOR NURSERY 2024-2025 </li>         
          <li > <strong>05 February 2024 </strong> Final Exam Preparation </li>         
          <li > <strong>11 December 2023</strong> Half Yearly Examination </li>         
                                                              
        </ul>
      </marquee>

        </div>
        <div className='box2 '>mountcarmelmailtest@gmail.com
        <span className='float-end pe-2 '><MdAddIcCall color='yellow'/> 1234567890</span></div>
      </div>


      
    </>
  )
}

export default HeaderSection
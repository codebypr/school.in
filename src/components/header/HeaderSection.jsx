import React from 'react'
import '../../Css/style.css'

function HeaderSection() {
  return (
    <>
      <div className="container-fluid headerbox">
  
          <span className=' news z-1 px-2'>News</span>
          <marquee behavior="scroll" direction="left" >
            <ul className=" headerUl">
              <li > <strong>12 February 2024</strong> Annual Day Function  </li>
              <li > <strong>01 February 2024 </strong> ADMISSION NOTICE FOR NURSERY 2024-2025 </li>
              <li > <strong>05 February 2024 </strong> Final Exam Preparation </li>
              <li > <strong>11 December 2023</strong> Half Yearly Examination </li>
            </ul>
          </marquee>

        </div>
      
    </>
  )
}

export default HeaderSection
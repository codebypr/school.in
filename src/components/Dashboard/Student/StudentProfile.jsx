import React from 'react'

function StudentProfile({data}) {
  return (
    <>
            <table className="table table-hover">  
            <tbody className='border border-top-0'>    
              <tr>
                <td>Admission Date</td>
                <td >{data.admissionDate}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td >{data.dob}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{data.category}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td >{data.email}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td >{data.phone}</td>
              </tr>
              <tr>
                <td>Caste</td>
                <td >{data.caste}</td>
              </tr>
              <tr>
                <td>Religion</td>
                <td>{data.religion}</td>
              </tr>
              
              <tr>
                <td>Note</td>
                <td>he dear todat is Off</td>
              </tr>
              
              <tr>
                <td className='bg-secondary-subtle '><b>Address</b></td>
                <td className=' bg-secondary-subtle '></td>
              </tr>
              <tr>
                <td>State</td>
                <td>{data.state}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{data.city}</td>
              </tr>
              <tr>
                <td>Current Address</td>
                <td>{data.address}</td>
              </tr>
              
              <tr>
                <td className='bg-secondary-subtle '><b>Parent Guardian Detail</b></td>
                <td className=' bg-secondary-subtle '></td>
              </tr>
              <tr>
                <td>Father Name</td>
                <td>{data.fatherName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.fatherPhone}</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>{data.fatherOcc}</td>
              </tr>
              <tr>
                <td>Mother Name</td>
                <td>{data.motherName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.motherPhone}</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>{data.motherOcc}</td>
              </tr>
            </tbody>
          </table>
    </>
  )
}

export default StudentProfile

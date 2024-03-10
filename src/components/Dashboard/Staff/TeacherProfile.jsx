import React from 'react'

function TeacherProfile({data}) {
  return (
    <>
    <table className="table table-hover">  
    <tbody className='border border-top-0'>    
    <tr>
        <td>Date Of Joininf</td>
        <td>{data.doj}</td>
      </tr>
      <tr>
        <td>First Name</td>
        <td >{data.firstName}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td >{data.lastName}</td>
      </tr>
      <tr>
        <td>Role</td>
        <td>{data.role}</td>
      </tr>
      <tr>
        <td>Date Of Birth</td>
        <td>{data.dob}</td>
      </tr>
      <tr>
        <td>Married Status</td>
        <td>{data.status}</td>
      </tr>
      <tr>
        <td>Father Name</td>
        <td >{data.fatherName}</td>
      </tr>
      <tr>
        <td>Mother Name</td>
        <td >{data.motherName}</td>
      </tr>
      <tr>
        <td>Mobile Number</td>
        <td >{data.phone}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{data.email}</td>
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
        <td className='bg-secondary-subtle '><b>Qualification & Experience</b></td>
        <td className=' bg-secondary-subtle '></td>
      </tr>
      <tr>
        <td>Qualification</td>
        <td>{data.qualification}</td>
      </tr>
      <tr>
        <td>Experince</td>
        <td>{data.experiecne}</td>
      </tr>
    </tbody>
  </table>
</>
  )
}

export default TeacherProfile
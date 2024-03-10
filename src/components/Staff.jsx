import React from 'react'
import AallStaff from './Dashboard/Staff/AallStaff'
import BreadGrumb from './BreadGrumb'

function Staff() {
  return (
    <>
            <BreadGrumb pic={'https://storage.googleapis.com/assets.thehindustep.in/img%2Fproducts%2Fback_img%2F450.png'} title={'ALL STAFF MEMBERS'}/>
            <div className='mt-5'>
              
            <AallStaff/>
            </div>
    </>
  )
}

export default Staff
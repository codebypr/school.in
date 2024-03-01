import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ShowAndHideComponent({children}) {
    const [showItem,setShowItem]=useState(true);
    const location=useLocation();
    useEffect(()=>{
        location.pathname==='/dashboard'? setShowItem(false) : setShowItem(true)
    },[location])
  return (
    <div>{showItem && children}</div>
  )
}

export default ShowAndHideComponent
import React from 'react'

function BreadGrumb(props) {
  return (
    <>
        <div className="breadgrumb" style={{height:'60vh',position:'relative'}}>
        <div className="mask"style={{height:'60vh'}} >
        <img className="into-img" src={props.pic} alt="" style={{height:'60vh'}} />
        </div> 
        <div className="text text-white" >
            <h1>{props.title}</h1>
            <p>{props.para}</p>
          
        </div>
        </div>
    </>
  )
}

export default BreadGrumb
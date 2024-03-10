import React from 'react'
import { MdAddCall } from "react-icons/md";

function Staffcard({name,role,date}) {
    return (
        <>
            
                <div className="card shadow-lg mb-5 ">
                    <div className=" text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '120px' }}>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '100px' }}>
                            <img src="https://st4.depositphotos.com/13194036/22902/i/450/depositphotos_229023724-stock-photo-female-teacher-pointing-finger-mathematical.jpg"
                                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                style={{ width: '150px', zIndex: '1' }} />
                        </div>
                        <div className="ms-3" style={{ marginTop: '70px' }}>
                            <h5 className='mb-0'>{name}</h5>
                            <p>{role}</p>
                        </div>
                    </div>
                    <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="text-end  pt-1">
                        <p className="mb-1 h6"><MdAddCall/> 125463587</p>
                        <p className="small text-muted mb-0 px-2 ">Join by {date}</p>
                        </div>
                    </div> 
                </div>
           
        </>
    )
}

export default Staffcard
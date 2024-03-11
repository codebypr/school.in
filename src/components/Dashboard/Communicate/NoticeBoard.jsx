import React, { useEffect, useState } from 'react'
import AddPost from './AddPost'
import axios from 'axios';

function NoticeBoard({hide}) {
  const [notices,setNotices] = useState([])
  const [notice,setNotice] = useState({})
  const [myState,setMyState] = useState({})
  const [viewPostSection,setViewPostSection] = useState(false);

    useEffect(()=>{
      ;(async()=>{
        const result = await axios.get('http://localhost:3000/readnotice');
       setNotices(result.data);
      })()
    },[myState])

  const deleteNotice = (id)=>{
    axios.delete('http://localhost:3000/deletenotice/'+id)
    .then(res=>setMyState(true))
     .catch(err=>console.log(" Teacher not deleted ! "+err))
  }
  return (
    <>
    {hide!=='hide' && <div className="container text-end">
        { viewPostSection==false ?
            <button className='btn btn-warning my-3' onClick={()=>setViewPostSection(true)}>Add New Post</button>:
            <button className='btn btn-warning my-3' onClick={()=>setViewPostSection(false)}>Back</button>
        }
    </div>}

    { viewPostSection && <AddPost/> }       
        
   { !viewPostSection &&
    <div className='list-group '>
        {
          notices.map((data,i)=>(
            <div className="list-group-item list-group-item-action px-3 border-0 shadow my-3 d-flex  justify-content-between" key={i}
            >
              <button className='w-100 btn btn-light'
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
              onClick={()=>{setNotice(data)}}
              >{data.title} </button>
              <button className="btn btn-danger btn-sm z-1"
              onClick={()=>deleteNotice(data.id)}
              >delete</button>
              </div>
          ))
        }
    </div>   
   }

<div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body bg-secondary">
    <div className="container  py-5 ">
    <div className="row d-flex justify-content-center">      
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-start align-items-center">
              <img className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 className="fw-bold text-primary mb-1">
                  Admin Name
                </h6>
                <p className="text-muted small mb-0">
                  Shared publicly - {notice.publishDate}
                </p>
              </div>
            </div>

            <p className="mt-3 mb-4 pb-2">
             {notice.notice}
            </p>

          </div> 
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default NoticeBoard
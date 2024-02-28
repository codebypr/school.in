import React from 'react'
import computerLab from '../MyImages/computerLab.jpg'
import computerLab2 from '../MyImages/computerLab2.jpg'

function ComputerLab() {
  return (
    <>
            <div className="container my-5 ">
                <h2 className="text-danger">COMPUTER LAB:</h2>
                <p>The school has a <b> computer laboratory with Broadband Internet connection and sophisticated multimedia facilities and resources. Equipped with the latest hardware and software,</b> our computer laboratories provide an excellent ambience and opportunity to learn and master ICT skills from the basic to the advanced levels. Students design websites and create software programs in keeping with international requirements.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-2">
                            <img src={computerLab} alt="" width={'100%'} />
                        </div>
                        <div className="col-md-6 my-2">
                            <img src={computerLab2} alt="" width={'100%'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ComputerLab
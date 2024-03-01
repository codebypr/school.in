import React from 'react'
import acadmic1 from '../MyImages/academic1.jpg'
import acadmic2 from '../MyImages/academic2.jpg'
import acadmic3 from '../MyImages/academic3.jpg'
import acadmicBread from '../MyImages/academicbread.jpg'
import BreadGrumb from './BreadGrumb'

function Academic() {
  return (
    <>
        <BreadGrumb pic={acadmicBread} title={'Academic Support'}/>
        <div className="container text-center my-5 pt-2">
        </div>
            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                    
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Thriving all round development of a child through co-curricular activities</h3>
                            <p className="card-text">Merely having knowledge about a few academic concepts doesn’t enrich one’s personality. A person must need `think beyond academics. Striking a right balance between curriculum, syllabus, books and co-curricular activities is must. Co-curricular activities give a unique experience, i.e. outside the typical pen and pencil classroom experience. These activities allow kids to develop particular skills and exhibit their non – academic abilities.</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={acadmic1} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>
            
            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                    
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Technology</h3>
                            <p className="card-text">Technology has the ability to enhance relationships between teachers and students. When teachers effectively integrate technology into subject areas, teachers grow into roles of adviser, content expert, and coach. Technology helps make teaching and learning more meaningful and fun. Lotus Veda being one of the best preschool in Ashok Vihar provides its children with the opportunity to use and interact with this technology at different levels.</p>
                  
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={acadmic3} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="container card mb-3 pt-5  border border-0" style={{ height: '80vh' }} >
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Our Methodology</h3>
                            <p className="card-text">We at Lotus Veda, one of the best play school in Ashok Vihar completely discard the practice of copying answers from the board. Hence, we start working on English from an early age. The students frame and write their own answers in their notebooks/ workbooks and in the worksheets. As a result, the students of this school never face the challenge of cramming information.</p>

                            <a type="button" className="btn btn-light w-100 d-flex align-items-center"
                            data-bs-toggle="collapse" href="#second" aria-controls="collapseExample"
                            ><h1> &#10133;</h1> Exposure to new activities</a>
                            <div className="collapse" id="second">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                            <a type="button" className="btn btn-light w-100 d-flex align-items-center"
                            data-bs-toggle="collapse" href="#collapseExample" aria-controls="collapseExample"
                            ><h1> &#10133;</h1>  Assessment: An ongoing process</a>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={acadmic2} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Academic
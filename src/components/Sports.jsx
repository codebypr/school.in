import React from 'react'
import sport1 from '../MyImages/sport1.jpg'
import sport2 from '../MyImages/sport2.jpg'
import sport3 from '../MyImages/sport3.jpg'

function Sports() {
  return (
   <>
             <div  className="container-fluid my-5">
                <div className="container text-center mb-5 mt-3">
                    <p>OUR EKIT SCHOOL COURSES</p>
                    <h2>News Events</h2>
                </div>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                      
                    <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={sport1} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Your Complete Guide to Photography</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={sport2} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Learn Python – Interactive Python</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={sport3} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Introduction to Edu_Learn LMS Plugin</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
   </>
  )
}

export default Sports
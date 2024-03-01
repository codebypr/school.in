import React from 'react'
import { CgMail } from "react-icons/cg";
import { MdAddIcCall } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6";
import BreadGrumb from './BreadGrumb';

function Contact() {
    return (
        <>
            <BreadGrumb pic={'https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg'} title={'Send In Your Query'} para={'Do you have any questions? Please do not hesitate to contact us directly.Our team will come back to you within a matter of hours to help you.'}/>
            <div className="container">
                

                      
            <section className="my-4">
                    <div className="row">

                        <div className="col-md-9 mb-md-0 mb-5  p-3 border rounded">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="md-form mb-3">
                                            <input type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name" className="">Your name</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-3">
                                            <input type="text" id="email" name="email" className="form-control" />
                                            <label htmlFor="email" className="">Your email</label>
                                        </div>
                                    </div>


                                </div>



                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-3">
                                            <input type="text" id="subject" name="subject" className="form-control" />
                                            <label htmlFor="subject" className="">Subject</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">


                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label htmlFor="message">Your message</label>
                                        </div>

                                    </div>
                                </div>


                            </form>

                            <div className="text-center  my-3">
                                <a className="btn btn-primary" >Send</a>
                            </div>
                        </div>

                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li className=' py-2 mb-3 rounded shadow-lg'><FaLocationDot size={40} />
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>

                                <li className=' py-2 my-3 rounded shadow-lg'><MdAddIcCall size={40} />
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li className=' py-2 my-3 rounded shadow-lg'><CgMail size={40} />
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>
            </div>

        </>
    )
}

export default Contact
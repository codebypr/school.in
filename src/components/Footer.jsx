import React from 'react'
import { FaFacebookF, FaHome } from "react-icons/fa"
import { FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { MdAddIcCall } from "react-icons/md"

function Footer() {
    return (
        <>

            <footer className="text-center text-white mt-5" style={{backgroundColor:'#171533'}}>

                <div className="container p-4">

                    <section className="mb-4">
                    <button className='btn btn-outline btn-floating m-1'><FaFacebookF color='yellow'/></button>
                    <button className='btn btn-outline btn-floating m-1'><FaGoogle color='yellow'/></button>
                    <button className='btn btn-outline btn-floating m-1'><FaTwitter color='yellow'/></button>
                    <button className='btn btn-outline btn-floating m-1'><FaInstagram color='yellow'/></button>
                    </section>


                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
                            harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>

                    <section className="container ">

                        <div className="row ">

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                                <h5 className="text-uppercase">Links</h5>

                                   <p >Home</p>                                   
                                   <p>About</p>                                    
                                   <p >Contact</p>
                                    
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                                <h5 className="text-uppercase">Links</h5>

                                   <p >Home</p>                                   
                                   <p>About</p>                                    
                                   <p >Contact</p>
                                    
                            </div>
                                                        
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Contacts</h5>
                                <p><FaHome color='yellow' size={20}/> New York, NY 10012, US</p>
                                <p><CgMail color='yellow' size={20}/> info@example.com </p>
                                <p><MdAddIcCall color='yellow' size={20}/> 01 234 567 88</p>
                            </div>

                        </div>

                    </section>

                </div>



                <div className="text-center p-3 text-white" style={{ backgroundColor: '#881e1e' }}>
                © Mount Carmel School 2023 All rights reserved
                </div>

            </footer>

        </>
    )
}

export default Footer
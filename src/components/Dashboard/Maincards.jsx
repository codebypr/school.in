import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { FaRegHeart, FaWallet  } from "react-icons/fa";


export default function Maincards() {
  return (
    <>
    <div className="px-2">
  <section>
      <div className="text-center"><img src={'https://i.pinimg.com/474x/cb/6e/4d/cb6e4d9aaf52b49fd12173c5f8e36a67.jpg'} width={180}/></div> 
    <div className="row">
      <div className="col-xl-6 col-md-12 mb-4">
        <div className="card">
          <div className="card-body shadow">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <GiTeacher className="fas fa-pencil-alt text-info fa-3x me-4" size={60}/>
                </div>
                <div>
                  <h4>Total Teachers</h4>
                  <p className="mb-0">All staff members in our School</p>
                </div>
              </div>
              <div className="align-self-center">
                <h2 className="h1 mb-0">30</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-12 mb-4">
        <div className="card">
          <div className="card-body shadow">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <PiStudentBold className="far fa-comment-alt text-warning fa-3x me-4" size={60}/>
                </div>
                <div>
                  <h4>Total Students</h4>
                  <p className="mb-0">Currently avalilable students</p>
                </div>
              </div>
              <div className="align-self-center">
                <h2 className="h1 mb-0">84,695</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6 col-md-12 mb-4">
        <div className="card">
          <div className="card-body shadow">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <h2 className="h1 mb-0 me-4">$76,456.00</h2>
                </div>
                <div>
                  <h4>Total Sales</h4>
                  <p className="mb-0">Monthly Sales Amount</p>
                </div>
              </div>
              <div className="align-self-center">
                <FaRegHeart className="far fa-heart text-danger fa-3x" size={60}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-12 mb-4">
        <div className="card">
          <div className="card-body shadow">
            <div className="d-flex justify-content-between p-md-1">
              <div className="d-flex flex-row">
                <div className="align-self-center">
                  <h2 className="h1 mb-0 me-4">$36,000.00</h2>
                </div>
                <div>
                  <h4>Total Cost</h4>
                  <p className="mb-0">Monthly Cost</p>
                </div>
              </div>
              <div className="align-self-center">
                <FaWallet  className="fas fa-wallet text-success fa-3x" size={60}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 mt-3 mb-0">
        <h5 className="text-uppercase">Write Title your School.</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, nihil sunt! Veritatis tenetur quidem eius? Rem necessitatibus nihil dolor, deleniti fugiat voluptatum dolore dolorum commodi sed neque alias eum cumque.</p>
        </div>
  </section>
</div>

    </>
  )
}

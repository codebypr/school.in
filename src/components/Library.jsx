import React from 'react'
import computerLab from '../MyImages/computerLab.jpg'
import computerLab2 from '../MyImages/computerLab2.jpg'

function Library() {
  return (
    <>
            <div className="container my-5 pt-5">
                <h2 className="text-danger">LIBRARY:</h2>
                <p>The serene ambience inspires a love for reading. Information at the click of a fingertip invites the young users to delve into the magical world of words and the wealth of research material available. The school has a well-equipped library for, the Junior School ,the Middle School and the Senior School . Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills.</p>
                <p>The reference library, which is fully computerized and houses a huge collection of books, is a treasure trove of information that has been built assiduously over years and continues to grow each year</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-2">
                            <img src={computerLab} alt="" width={'100%'} height={'200'} />
                        </div>
                        <div className="col-md-4 my-2">
                            <img src={computerLab} alt="" width={'100%'} height={'200'}/>
                        </div>
                        <div className="col-md-4 my-2">
                            <img src={computerLab2} alt="" width={'100%'} height={'200'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Library
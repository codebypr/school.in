import React from 'react'
import music1 from '../MyImages/music1.jpg'
import music2 from '../MyImages/music2.jpg'
import music3 from '../MyImages/music3.jpg'
import music4 from '../MyImages/music4.jpg'
import BreadGrumb from './BreadGrumb'

function MusicDance() {
  return (
    <>
        <BreadGrumb pic={'https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-hyun-dance-background-image-download-image_263846.jpg'} title={'MUSIC LAB'}/>
    <div className="container my-5 text-center">
       
        <p>The school has a <b> computer laboratory with Broadband Internet connection and sophisticated multimedia facilities and resources. Equipped with the latest hardware and software,</b> our computer laboratories provide an excellent ambience and opportunity to learn and master ICT skills from the basic to the advanced levels. Students design websites and create software programs in keeping with international requirements.</p>
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-2">
                    <img src={music1} alt="" width={'100%'} height={'100%'} />
                </div>
                <div className="col-md-6 my-2">
                    <img src={music4} alt="" width={'100%'} height={'100%'}/>
                </div>
                <div className="col-md-6 my-2">
                    <img src={music3} alt="" width={'100%'} height={'100%'}/>
                </div>
                <div className="col-md-6 my-2">
                    <img src={music2} alt="" width={'100%'} height={'100%'}/>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default MusicDance
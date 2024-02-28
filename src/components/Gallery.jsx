import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import {Captions,Fullscreen,Thumbnails }from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Gallery() {
    const [index, setIndex] = React.useState(-1);
    let slides=[
        {
            src:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
        {
            src:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
        {
            src:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
        
        {
            src:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
        {
            src:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
        {
            src:'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896',
            title:'Slide Title one',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam maxime velit architecto sapiente consequatur'
        },
    ]

    const handleClick=(i)=>{
        console.log(i);
            setIndex(i);
    }
  return (
<>

<div className="container mb-5">
                <div className="container text-center ">
                    <h2 className='mb-5'>Gallery</h2>
                    <div className="row ">
                        {
                            slides.map((image,i)=>(
                                <div className="col-lg-4 col-md-12 mb-4 mb-2"
                                onClick={()=>handleClick(i)}  key={i}
                                >
                                    <img src={image.src} className="w-100 h-100 " />
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

      <Lightbox
        index={index}
        open={index>=0}
        close={() => setIndex(-1)}
        plugins={[Captions,Fullscreen,Thumbnails]}
        slides={slides}
      />
    </>
  )
}

export default Gallery
import '../Custom_Css/style.css';

import news1 from '../MyImages/news1.jpg';
import news2 from '../MyImages/news2.jpeg';
import news3 from '../MyImages/news3.jpeg';
import feedback from '../MyImages/user.jpg'
import welcome from '../MyImages/welcome.jpg'
import group from '../MyImages/group.jpg'

import { BiDoorOpen , BiBuilding , BiArch ,BiBulb} from "react-icons/bi";
import { FaStar  } from "react-icons/fa";
import Card from './Card';



const Home=()=> {

   
    return (
        <>
            
             
             <div className='responsive-bg container-fluid pt-5 mb-5 '>
             </div>

                                {/* section ----- 1 */} 

             <div className="container text-center my-5">
                <h2>Mount Carmel Residential School</h2>
                <p>Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                <div className="container row d-flex justify-content-center">
                                           
                     <div className="col-lg-8  " >
                         <img src={group} className="w-100  " />
                      </div>
                    
                </div>
             </div>

                                {/* section ----- 2 */} 


            <div className="container card my-5 border border-0" >
                <div className="text-center mb-5">
                <h2>ABOUT US</h2>
                <p>Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo</p>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6">
                        <img src={welcome} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">WELCOME TO MOUNT CARMEL</h5>
                            <p className="card-text">Established in 1991 under the leadership of Mr. S Shyam, Triveni School has consistently delivered high-quality education. Guided by our core principle - "To provide exceptional education to all, regardless of their background, and to nurture the potential within each individual," we remain driven and dedicated day after day. Our commitment to quality education is further reflected in the various scholarships awarded to students who excel in academics, sports, and diverse fields.</p>

                            <h5 className="card-title">Where Ambitions Soar</h5>
                            <p className="card-text">
                                Our institution boasts exceptional infrastructure that supports comprehensive growth. From modern classrooms to advanced facilities, we provide an environment conducive to nurturing academic, physical, and personal development.</p>
                        </div>
                    </div>
                </div>
            </div>

                                 {/* section ----- 3 */}

            <div className="container-fluid my-5">
                <div className="container text-center mb-5">
                    <h2>Why Choose This School</h2>
                    <p>Educating Since 1991</p>
                </div>
                <div className="container pt-3">
                    <div className=" row">
                        <div className="col-lg-3">
                    <Card para={`Discover our school's exceptional, globally recognized infrastructure, fostering unparalleled educational experiences that inspire growth, curiosity, and success in every student.`} 
                    title={`World-Class Infra`} 
                    img={<BiArch className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Ranking No.1, our school's unmatched excellence shines through outstanding academic achievements and accolades, showcasing our commitment to unparalleled educational standards and holistic development.`} 
                    title={`TOP Ranking`} 
                    img={<BiBuilding className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Nurturing and empowering students to become visionary leaders equipped with skills, knowledge, and values that inspire positive change in their communities and beyond.`} 
                    title={`Making Leaders`} 
                    img={<BiDoorOpen className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Our comprehensive facilities, encompassing state-of-the-art language and science laboratories enhance students' practical learning experiences, fostering curiosity and academic excellence.`} 
                    title={`Hands-on Learning`} 
                    img={<BiBulb className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    </div>
                </div>
            </div>

                                {/* section ----- 4 */}  

            <div  className="container-fluid my-5">
                <div className="container text-center mb-5 mt-3">
                    <p>OUR EKIT SCHOOL COURSES</p>
                    <h2>News Events</h2>
                </div>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                      
                    <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news1} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Your Complete Guide to Photography</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news2} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Learn Python – Interactive Python</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news3} className="card-img-top rounded-0" alt="..." />
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
                
                                

                                 {/* section ----- 5 */} 

            <div className="container mb-5">
                <div className="container text-center">
                    <b>OUR HOLISTIC & TECHNICAL APPROACH TO EDUCATION HAS WON HEARTS!</b>
                    <h2>Hear What Parents have to Say</h2>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card ">
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>
                                    <h5 className="card-title">
                                    <img src={feedback} width={30} className='me-2' />
                                        Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" >
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>
                                    <h5 className="card-title">
                                    <img src={feedback} width={30} className='me-2' />
                                        Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" >
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>

                                    <h5 className="card-title">
                                        <img src={feedback} width={30} className='me-2' />
                                         Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

           
        </>
    );
}
export default Home;


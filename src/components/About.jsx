import React from 'react'
import principle from '../MyImages/principle.jpg'
import { BiDoorOpen , BiBuilding , BiArch ,BiBulb} from "react-icons/bi";
import Card from './Card';
import BreadGrumb from './BreadGrumb';

function About() {
  return (
    <>
                <BreadGrumb pic={'https://www.cystronpharma.com/img/ab.jpg'} />
            <div className="container card mb-5 pt-5 border border-0" >
                <div className="row g-0">
                    
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Principal</h3>
                            <p className="card-text">We believe that life in itself is a school. Here at Lotus Veda we want to lay the foundation for Lifetime learning and give every student a platform to live life with true wisdom and maturity. Education up to now has been goal oriented: what you are learning is not important; what is important is the examination that will come a year later. We strongly believe that any kind of competition is unhealthy deep down and creates humanoids but not human beings. So here at Lotus Veda, students get every opportunity to express themselves psychologically, emotionally and academically. Lotus Veda aims at creating independent beings who work hand in hand with each other and understand from the core of their hearts that only interdependence can lead to an independent Life. This is achieved when the aim of education is not only to know but also to share what you know. Knowledge is, however, borrowed information and hence does not lead to transformational growth. So Lotus Veda focuses more on the process of knowing through their scales of imagination and creativity. This way they expand their pool of learning till infinity</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={principle} className="img-fluid rounded-start w-100" alt="..." />
                        <h2>Ms. Shikha Sawhney</h2>
                    </div>
                    <p>Shikha Sawhney is an educationist, entrepreneur, and a mother who is dynamic, charismatic, and an education industry veteran with old-world learnings and new-age thinking, inspired by traditions, is in a continuous quest at giving manifestation to the hues of the ethereal energy that brings balance to this world through Meditation. Prominent works from her elaborate portfolio include being a Founder Director of Lotus Veda Group of Schools in Delhi, A Parenting Website, Babanod, A student collaboration and engagement portal called Me! Pages and many more. Being the State President (WICCI) she champions and Facilitates Inclusion, Diversity, Gender Equality, and Global Citizenship in all recommendations and representations for respective government bodies and institutions, toward enabling policy changes and incentives toward improving economic and social ecosystems for women to thrive, through enabling fundamental changes in governmental policies, laws, and incentives and influence decision making at all levels with a view to robustly encourage and empower women in business, professions, industry, and commerce. WICCI is a national business chamber for women , women’s lndian chamber for commerce and industry, WICCI boots and bills women’s entrepreneurship and business through greater engagements with government , institutions, global trade and networks.She is on a mission to develop collaboration with other chambers and institutions and plan delegation visits to various public platforms and industry forums to promote trade, commerce, and investment for women entrepreneurs and businesswomen and those in services to develop community outreach in the spirit of sharing inspiration and knowledge. She is fairly well networked in the education space and understands how to work with well-established and startups. Besides this, her other interests include work in Self-Empowerment, Holistic Wellness and Sustainability, and Parenting space and also shares insights with a lot of parents. She is an advocate and practitioner of Self-work and Healing Modalities and is well entrenched in the space of Child Psychology and Parenting and coaches others on it. ‘It’s never too late to be what you might’ve been.” – George Eliot.</p>
                </div>
            </div>


            <div className="container-fluid my-5">
                <div className="container text-center mb-5">
                    <h2>Why Choose Our Institution</h2>
                    <p>Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
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
    </>
  )
}

export default About
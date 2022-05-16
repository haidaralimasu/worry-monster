import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
    return (
        <section id='Team'>
            <div className="container">
                <div className="p-5">
                    <div className="d-flex align-items-center justify-content-center izc">
                        <div className="left text-start flex-wrap izp px-0 px-lg- px-md-4 mx-0 mx-lg-4 mx-md-4" data-aos="fade-down">
                            <h2 style={{ fontSize: '22px' }} className="fw-normal"> <img src="images/dot.jpg" className="pl-3" width="10px" height="10px" alt="" />&nbsp;Worry Monsters Founder</h2>
                            <p style={{ fontSize: '15px', lineHeight: '22px' }} className="w-100 pt-2 fw-light">
                                Artist, Director and University Acting Teacher with a background in Cognitive Behavioural Therapy and interactive game design. Stephen has decades of experience teaching creativity in emotionally-rich, trauma-informed learning environments, fostering personal growth and transformation.
                                <br />
                                <br />
                                To me, the most important step of any path to improvement is confidence and agency. You have to feel that you can do something before you can talk yourself into trying it.
                                <br />
                                <br />
                                <b style={{ fontWeight: "bolder", color: "black", fontStyle: "italic" }}>“Worrying does not take away tomorrow's troubles. It takes away today's peace.” </b>
                            </p>
                        </div>
                    </div>

                    <div className="right d-flex justify-content-between align-items-center flex-wrap my-1 izi my-5" data-aos="flip-right">
                        <div className='team_mem'>
                            <img className="my-2 card p-1" src="images/img5.jpg" width="130px" alt="" />
                            <div className='text-center'>
                                <p className='fw-bold text-white mb-1'>Marco Deterfanis</p>
                                <p className='text-white'>3d Artist</p>
                            </div>
                        </div>
                        <div className='team_mem'>
                            <img className="my-2 card p-1" src="images/img3.jpg" width="130px" alt="" />
                            <div className='text-center'>
                                <p className='fw-bold text-white mb-1'>Lenneys Castillo</p>
                                <p className='text-white'>Digital Artist</p>
                            </div>
                        </div>
                        <div className='team_mem'>
                            <img className="my-2 card p-1" src="images/img.png" width="130px" alt="" />
                            <div className='text-center'>
                                <p className='fw-bold text-white mb-1'>Jullan Macias</p>
                                <p className='text-white'>Web Developer</p>
                            </div>
                        </div>
                        <div className='team_mem'>
                            <img className="my-2 card p-1" src="images/img4.jpg" width="130px" alt="" />
                            <div className='text-center'>
                                <p className='fw-bold text-white mb-1'>Jullan Macias</p>
                                <p className='text-white'>Web Developer</p>
                            </div>
                        </div>
                        <div className='team_mem'>
                            <img className="my-2 card p-1 bg-white" src="images/img2.jpg" width="130px" alt="" />
                            <div className='text-center'>
                                <p className='fw-bold text-white mb-1'>Umaima K</p>
                                <p className='text-white'>Block chain Dev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
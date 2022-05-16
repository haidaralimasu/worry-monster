import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
    // AOS.init({
    //     duration: 3000,
    //     delay: 1000,
    //     // useClassNames: true,
    // });
    return (
        <div>
            <section id='Roadmap' className='roadmap'>
                <h1 className='text-center'>Roadmap</h1>
                <div className="container">
                    <div className=" row mx-0">
                        {/* first */}
                        <div className="text-dark col-lg-6 my-5 mb-0 px-0 col-12 d-flex align-items-center card" data-aos="flip-up"><span />
                            <div className=" d1" style={{ borderBottomRightRadius: '0px' }}>
                                <div className="d-flex p-5 flex-column align-items-end  ">
                                    <h4 className="  text-start  h23 ">$Torch is lit, 1.5 ETH Funded</h4>
                                    <p className=" text- small text-end text-dark pl-5">When 2,000 Cultists have been minted, the $Torch is lit. This creates a utility token exclusive to owners of Cultists, and 1.5 ETH is added to the Commission Pool.</p>
                                </div>
                                <div className="d-flex justify-content-between w-100"><span className="side_di h01 ">01</span>
                                    <a href="#" className="text-end h234  ansab align-items-center  ">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-start "> <img src="images/Path 5.png" className="col-7 p-4" alt="" />
                        </div>
                        {/* second */}
                        <div className="text-dark col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-end  " data-aos="flip-down"> <img src="images/Path 7.png" className="col-7 p-4" alt="" /> </div>
                        <div className="col-lg-6 mt-lg-0 mt-3 px-0 col-12 px-0 d-flex align-items-center card2" data-aos="flip-up">
                            <div className=" d1" style={{}}>
                                <div className=" d-flex p-5 flex-column align-items-start  text-start  ">
                                    <h4 className="  fw-800   text-start h23  ">+2 ETH Funded</h4>
                                    <p className=" text- small text-dark ">When the number of minted Cultists reaches 3,000, an additional 2 ETH is added to the Commission Pool.</p>
                                </div>
                                <div className="d-flex justify-content-between w-100"><a className="h234  ansab ps-5">Read more
                                </a>
                                    <span className="side_di_2 h01 ">02</span>
                                </div>
                            </div>
                        </div>
                        {/* third */}
                        <div className="text-dark col-lg-6  mb-0 px-0 col-12 d-flex align-items-center card" data-aos="flip-up"><span />
                            <div className=" d1" style={{ borderBottomRightRadius: '0px' }}>
                                <div className="d-flex p-5 flex-column align-items-end  ">
                                    <h4 className="   text-start h23   ">+2.5 ETH Funded</h4>
                                    <p className=" text- small text-end text-dark">When 4,500 Cultists have been minted, an additional 2.5 ETH is added to the Commission Pool.</p>
                                </div>
                                <div className="d-flex justify-content-between w-100"><span className="side_di h01 ">03</span>
                                    <a href="#" className="text-end h234  ansab align-items-center ">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-start "> <img src="images/Path 5.png" className="col-7 p-4" alt="" />
                        </div>
                        {/* fourth */}
                        <div className="text-dark col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-end " data-aos="flip-down"> <img src="images/Path 7.png" className="col-7 p-4" alt="" /> </div>
                        <div className="col-lg-6 mt-lg-0 mt-3 px-0 col-12 px-0 d-flex align-items-center card2"  data-aos="flip-down">
                            <div className=" d1" style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}>
                                <div className=" d-flex p-5 flex-column align-items-start  text-start  ">
                                    <h4 className="  fw-800   text-start h23  ">+3 ETH Funded</h4>
                                    <p className=" text- small text-dark">Once all 6,000 Cultists have been minted. An additional 3 ETH is added to the Commission Pool.</p>
                                </div>
                                <div className="d-flex justify-content-between w-100"><a className="h234  ansab ps-5">Read more
                                </a>
                                    <span className="side_di_2 h01">04</span>
                                </div>
                            </div>
                        </div>
                        {/* fiveth */}
                        <div className="text-dark col-lg-6  mb-0 px-0 col-12 d-flex align-items-center card" data-aos="flip-up"><span />
                            <div className=" d1" style={{ borderBottomRightRadius: '0px' }}>
                                <div className="d-flex p-5 flex-column align-items-end  ">
                                    <h4 className="   text-start h23   ">$Torch is lit, 1.5 ETH Funded</h4>
                                    <p className=" text- small text-end text-dark">When 2,000 Cultists have been minted, the $Torch is lit. This creates a utility token exclusive to owners of Cultists, and 1.5 ETH is added to the Commission Pool.</p>
                                </div>
                                <div className="d-flex justify-content-between w-100"><span className="side_di
                            side_di h01 ">05</span>
                                    <a href="#" className="text-end h234  ansab align-items-center ">Read more</a>
                                </div>
                            </div>
                        </div></div></div></section>
        </div>
    )
}

export default Roadmap
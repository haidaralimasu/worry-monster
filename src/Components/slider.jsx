import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
    // AOS.init({
    //     duration: 3000,
    //     delay: 300,
    //     // useClassNames: true,
    // });
    return (
        <div id='Cultists' className='slider'>
            <div className='decore'>
                <img src="./images/slider_right_decore.png" alt="" />
            </div>
            <div className='container d-flex justify-content-center flex-wrap'>
                <img className='mx-2 my-2 my-md-2 my-lg-0' width="200px" src="./images/monster1.jpg" alt="" style={{borderRadius: "12px"}} data-aos="flip-left"/>
                <img className='mx-2 my-2 my-md-2 my-lg-0' width="200px" src="./images/monster2.jpg" alt="" style={{borderRadius: "12px"}} data-aos="flip-left"/>
                <img className='mx-2 my-2 my-md-2 my-lg-0' width="200px" src="./images/monster3.jpg" alt="" style={{borderRadius: "12px"}} data-aos="flip-left"/>
                <img className='mx-2 my-2 my-md-2 my-lg-0' width="200px" src="./images/monster4.jpg" alt="" style={{borderRadius: "12px"}} data-aos="flip-left"/>
                <img className='mx-2 my-2 my-md-2 my-lg-0' width="200px" src="./images/monster5.jpg" alt="" style={{borderRadius: "12px"}} data-aos="flip-left"/>
            </div>
            <div className='decore2'>
                <img src="./images/slider_left_decore.png" alt="" />
            </div>

        </div>
    )
}

export default Slider
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Monsters = () => {
    // AOS.init({
    //     duration: 1000
    // });



    return (
        <div id='Projects' className='monster_parent'>
            <div className='monsters' data-aos="zoom-in">
                <img className='monster_circle' src="./images/monsters.png" width="100%" alt="" />
                <img className='circl' src="./images/circle.png" width="100%" alt="" />
            </div>
            <div className='monster_content'>
                <p className='fs-2 fw-bold' style={{ width: "250px" }}>ROAD AHEAD</p>
                <p className='' style={{ width: "320px", fontWeight: "lighter" }}>There is ONE completely one-of-a-kind "Pa-Ma Monster." They're the non-binary parent of all Worry Monsters!</p>
                <button className='read_more text-white' style={{ width: "150px", border: "1px solid white" }}>Read More</button>
            </div>
        </div>
    )
}

export default Monsters
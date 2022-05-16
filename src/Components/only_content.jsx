import React from 'react'
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Only_content = () => {
    // AOS.init({
    //     duration: 2000,
    //     delay: 500,
    //     useClassNames: true,
    // });
    return (
        <div data-aos="fade-up">
            <div className='only_content container px-0 px-lg-5 px-md-5 text-center mt-5 mt-lg-0 mt-md-0'>
                <div className='container '>
                    <h2 className='mb-4' data-aos="zoom-out-down">What Worry Monsters can do for YOU</h2>
                    <p data-aos="fade-up">Research shows that reinforcing positive emotions, especially before going to sleep, helps you externalize and regulate your anxiety, and have higher quality sleep. The adorable fiendishness of the Worry Monster tells you that you have a cute little ally to menace your troubles while you sleep. Unlockable content gives you one of over 60 small practices to help you improve.</p>
                </div>
            </div>
            <div className="decore3">
                <img src='./images/only_content_right.png' alt="" />
            </div>
        </div>
    )
}

export default Only_content
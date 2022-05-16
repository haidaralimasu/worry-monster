import React from 'react';

const Footer = () => {
    return (
        <div className='container mt-5'>
            <img height="8px" width="100%" src="./images/footer_line.png" alt="" />
            <div className='footer'>
                <img width="50px" src="./images/logo.png" alt="" />
                <div className='d-flex ms-2 ms-lg-0'>
                    <p className='mx-0 mx-lg-3' style={{fontSize: "12px"}}>front page</p>
                    <p className='mx-0 mx-lg-3' style={{fontSize: "12px"}}>that's how it works</p>
                    <p className='mx-0 mx-lg-3' style={{fontSize: "12px"}}>About the project</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
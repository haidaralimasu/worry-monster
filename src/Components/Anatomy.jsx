import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Anatomy = () => {
  // AOS.init({
  //     duration: 1000,
  //     delay: 500,
  //     useClassNames: true,
  // });
  return (
    <div id="Torch" className="container about">
      <div className="col-12 col-md-6 col-lg-6" data-aos="fade-down">
        <img src="./images/book.png" width="100%" alt="" />
      </div>

      <div
        className="col-12 col-md-6 col-lg-6 ps-3 mt-5 mt-md-5 mt-lg-0"
        data-aos="flip-left"
      >
        <h4 className="main_head mb-4 d-flex align-items-center">
          <img width="15px" className="me-2" src="./images/dot.png" alt="" />{" "}
          The Legend of the Thinky Blinky Monsters
        </h4>
        <p className="support_para ms-2" style={{ fontSize: "14px" }}>
          Long ago, at the dawn of consciousness, an extra-dimensional space was
          created from people's worries.
          <br />
          the dimension grows and becomes more like a confusing maze of worried
          thought.
          <br />
          Luckily, every time a new worry grows , new monsters are born. They're
          as unique as each person's worry. The monsters' mission is to help
          people feel better.
          <br />
        </p>
        <hr
          style={{
            width: "50%",
            color: "green",
            height: "5px",
            borderRadius: "15px",
          }}
        />
        <p className="support_para ms-2" style={{ fontSize: "14px" }}>
          Thinky Blinky Monsters are cute and a little mean, but they'll always
          do their best. All you need to do is tell them what's troubling you.
        </p>
      </div>
    </div>
  );
};

export default Anatomy;

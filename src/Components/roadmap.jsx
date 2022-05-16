import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  // AOS.init({
  //     duration: 3000,
  //     delay: 1000,
  //     // useClassNames: true,
  // });
  return (
    <div>
      <section id="Roadmap" className="roadmap">
        <h1 className="text-center">Roadmap</h1>
        <div className="container">
          <div className=" row mx-0">
            {/* first */}
            <div
              className="text-dark col-lg-6 my-5 mb-0 px-0 col-12 d-flex align-items-center card"
              data-aos="flip-up"
            >
              <span />
              <div className=" d1" style={{ borderBottomRightRadius: "0px" }}>
                <div className="d-flex p-5 flex-column align-items-end  ">
                  <h4 className="  text-start  h23 ">
                    {/* $Torch is lit, 1.5 ETH Funded */}
                    Parent to All Monsters Giveaway
                  </h4>
                  <p className=" text- small text-end text-dark pl-5">
                    20,000 unique monsters will be released. One completely
                    unique 1/1 “Parent to All Monsters” is held back and raffled
                    for free to one lucky owner.
                  </p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <span className="side_di h01 ">01</span>
                  <a
                    href="#"
                    className="text-end h234  ansab align-items-center  "
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-start ">
              {" "}
              <img src="images/Path 5.png" className="col-7 p-4" alt="" />
            </div>
            {/* second */}
            <div
              className="text-dark col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-end  "
              data-aos="flip-down"
            >
              {" "}
              <img src="images/Path 7.png" className="col-7 p-4" alt="" />{" "}
            </div>
            <div
              className="col-lg-6 mt-lg-0 mt-3 px-0 col-12 px-0 d-flex align-items-center card2"
              data-aos="flip-up"
            >
              <div className=" d1" style={{}}>
                <div className=" d-flex p-5 flex-column align-items-start  text-start  ">
                  <h4 className="  fw-800   text-start h23  ">
                    25 ETH will be set aside for the community
                  </h4>
                  <p className=" text- small text-dark ">
                    Once 5,000 Monsters are minted at 0.025 ETH each 25 ETH will
                    be set aside for the community funds and 25 lucky owners
                    will be chosen by lottery to have their monster made into a
                    custom 1/1 figurine.
                  </p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <a className="h234  ansab ps-5">Read more</a>
                  <span className="side_di_2 h01 ">02</span>
                </div>
              </div>
            </div>
            {/* third */}
            <div
              className="text-dark col-lg-6  mb-0 px-0 col-12 d-flex align-items-center card"
              data-aos="flip-up"
            >
              <span />
              <div className=" d1" style={{ borderBottomRightRadius: "0px" }}>
                <div className="d-flex p-5 flex-column align-items-end  ">
                  <h4 className="   text-start h23   ">Custom 1/1 figurine</h4>
                  <p className=" text- small text-end text-dark">
                    Once 10,000 Monsters are minted at 0.025 ETH each: Another
                    25 ETH will be set aside for the community funds and another
                    25 lucky owners will be chosen by lottery to have their
                    monster made into a custom 1/1 figurine.
                  </p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <span className="side_di h01 ">03</span>
                  <a
                    href="#"
                    className="text-end h234  ansab align-items-center "
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-start ">
              {" "}
              <img src="images/Path 5.png" className="col-7 p-4" alt="" />
            </div>
            {/* fourth */}
            <div
              className="text-dark col-lg-6 col-12 px-0 d-lg-flex d-none align-items-end justify-content-end "
              data-aos="flip-down"
            >
              {" "}
              <img src="images/Path 7.png" className="col-7 p-4" alt="" />{" "}
            </div>
            <div
              className="col-lg-6 mt-lg-0 mt-3 px-0 col-12 px-0 d-flex align-items-center card2"
              data-aos="flip-down"
            >
              <div
                className=" d1"
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <div className=" d-flex p-5 flex-column align-items-start  text-start  ">
                  <h4 className="  fw-800   text-start h23  ">Lucky Draw</h4>
                  <p className=" text- small text-dark">
                    Once 15,000 Monsters are minted at 0.025 ETH each: Same as
                    above. Another 25 ETH will be set aside for the community
                    funds and another 25 lucky owners will be chosen by lottery
                    to have their monster made into a custom 1/1 figurine.
                  </p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <a className="h234  ansab ps-5">Read more</a>
                  <span className="side_di_2 h01">04</span>
                </div>
              </div>
            </div>
            {/* fiveth */}
            <div
              className="text-dark col-lg-6  mb-0 px-0 col-12 d-flex align-items-center card"
              data-aos="flip-up"
            >
              <span />
              <div className=" d1" style={{ borderBottomRightRadius: "0px" }}>
                <div className="d-flex p-5 flex-column align-items-end  ">
                  <h4 className="   text-start h23   ">Last Lap</h4>
                  <p className=" text- small text-end text-dark">
                    The Last Lap! Once all 20,000 Monsters are minted at 0.025
                    ETH each: The final installment of 25 ETH will be set aside
                    for the community funds and only one lucky owner will be
                    chosen by lottery to own the mysterious, unique, 1/1 Pa-Ma
                    Monster, the parent of all monsters NFT.
                  </p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <span
                    className="side_di
                            side_di h01 "
                  >
                    05
                  </span>
                  <a
                    href="#"
                    className="text-end h234  ansab align-items-center "
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Only_content = () => {
  // AOS.init({
  //     duration: 2000,
  //     delay: 500,
  //     useClassNames: true,
  // });
  return (
    <div data-aos="fade-up">
      <div className="only_content container px-0 px-lg-5 px-md-5 text-center mt-5 mt-lg-0 mt-md-0">
        <div className="container ">
          <h2 className="mb-4" data-aos="zoom-out-down">
            What Worry Monsters can do for YOU
          </h2>
          <p data-aos="fade-up">
            <p>
              The Right to Commercial Reproduction. You can print your NFT or
              re-draw it with the same features and attributes for commercial
              use.
            </p>
            <p>
              Community ETH 20% of the ETH invested goes back into a community
              pot for raffles, events and giveaways.
            </p>
            <p>
              Freebies We will be releasing smaller, special collections of
              NFTs. Owners of Thinky Blinky Monsters will get free ones. These
              will include Thinky Blinky Monsters: Dark Edition. These will have
              a dark, rich color scheme. Here is a sample.{" "}
            </p>
          </p>
        </div>
      </div>
      <div className="decore3">
        <img src="./images/only_content_right.png" alt="" />
      </div>
    </div>
  );
};

export default Only_content;

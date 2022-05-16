import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import punk1 from "../punk1.png";
import punk2 from "../punk2.png";
import punk3 from "../punk3.png";
import punk4 from "../punk4.png";

const Team = () => {
  return (
    <section id="Team">
      <div className="container">
        <div className="p-5">
          <div className="d-flex align-items-center justify-content-center izc">
            <div
              className="left text-start flex-wrap izp px-0 px-lg- px-md-4 mx-0 mx-lg-4 mx-md-4"
              data-aos="fade-down"
            >
              <h2 style={{ fontSize: "22px" }} className="fw-normal">
                {" "}
                <img
                  src="images/dot.jpg"
                  className="pl-3"
                  width="10px"
                  height="10px"
                  alt=""
                />
                &nbsp;Worry Monsters Founder
              </h2>
              <p
                style={{ fontSize: "15px", lineHeight: "22px" }}
                className="w-100 pt-2 fw-light"
              >
                Artist, Director and University Acting Teacher with a background
                in Cognitive Behavioural Therapy and interactive game design.
                Stephen has decades of experience teaching creativity in
                emotionally-rich, trauma-informed learning environments,
                fostering personal growth and transformation.
                <br />
                <br />
                To me, the most important step of any path to improvement is
                confidence and agency. You have to feel that you can do
                something before you can talk yourself into trying it.
                <br />
                <br />
                <b
                  style={{
                    fontWeight: "bolder",
                    color: "black",
                    fontStyle: "italic",
                  }}
                >
                  “Worrying does not take away tomorrow's troubles. It takes
                  away today's peace.”{" "}
                </b>
              </p>
            </div>
          </div>

          <div
            className="right d-flex justify-content-between align-items-center flex-wrap my-1 izi my-5"
            data-aos="flip-right"
          >
            <div className="team_mem">
              <img className="my-2 card p-1" src={punk1} width="130px" alt="" />
              <div className="text-center">
                <p className="fw-bold text-white mb-1">Marco Deterfanis</p>
                <p className="text-white">3d Artist</p>
              </div>
            </div>
            <div className="team_mem">
              <img className="my-2 card p-1" src={punk2} width="130px" alt="" />
              <div className="text-center">
                <p className="fw-bold text-white mb-1">Dr. Green, PhD</p>
                <p style={{ textWrap: "wrap" }} className="text-white">
                  multimedia artist
                </p>
              </div>
            </div>
            <div className="team_mem">
              <img className="my-2 card p-1" src={punk3} width="130px" alt="" />
              <div className="text-center">
                <p className="fw-bold text-white mb-1">Purple</p>
                <p className="text-white">Performance artist</p>
              </div>
            </div>
            <div className="team_mem">
              <img className="my-2 card p-1" src={punk4} width="130px" alt="" />
              <div className="text-center">
                <p className="fw-bold text-white mb-1">Pink</p>
                <p className="text-white">Music composer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

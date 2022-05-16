import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEthers } from "@usedapp/core";
import { notifyNetwork } from "../toast";

const Navbar = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const onError = () => {
    notifyNetwork();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-aos="flip-up">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img width="100px" src="./images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fs-1" style={{ color: "black" }}></i>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex justify-content-center align-items-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link ms-0 ms-lg-5"
                  aria-current="page"
                  href="#Cultists"
                >
                  Cultists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#Torch">
                  $Torch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2"
                  aria-current="page"
                  href="#Roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2"
                  aria-current="page"
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#Team">
                  Our Team
                </a>
              </li>
            </ul>

            <ul className="navbar-nav d-flex justify-content-center align-items-center ms-auto mb-2 mb-lg-0">
              {account ? (
                <button onClick={deactivate} className="connect_wallet">
                  Disconnect Wallet
                </button>
              ) : (
                <button
                  onClick={() => activateBrowserWallet(onError)}
                  className="connect_wallet"
                >
                  Connect Wallet
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

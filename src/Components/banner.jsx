import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { notifyMintSuccess, notifyError, notifyNetwork } from "../toast";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import { address } from "../contracts";
import nftabi from "../contracts/NFT.json";
import { useMaxSupply, useTotalSupply, useWeiCost, useCost } from "../hooks";

const Banner = () => {
  const [error, setError] = useState("");
  const { account } = useEthers();
  const maxSupply = useMaxSupply();
  const totalSupply = useTotalSupply();
  const cost = useCost();
  const weiCost = useWeiCost();

  const [minting, setMinting] = useState(false);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const nftInterface = new ethers.utils.Interface(nftabi);

  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const txCost = Number(weiCost) * amount;
      let nftcontract = new ethers.Contract(address, nftInterface, signer);
      let transaction = await nftcontract.mint(amount, {
        value: txCost.toString(),
      });
      await transaction.wait();
      setMinting(false);
      setAmount(1);
      notifyMintSuccess();
    } catch (error) {
      setAmount(1);
      if (error.code == 4001) {
        notifyError(error.message);
      } else {
        notifyError(error.error.message.replace("execution reverted:", ""));
      }

      console.log(error);
      setError(error.message);
      setMinting(false);
    }
  }

  console.log(error);

  return (
    <div>
      <section className="main container">
        <div className="child col-12 col-md-5 col-lg-5 px-3 mt-0">
          <h1 className="main_head mb-4" data-aos="fade-down">
            The Thinky Blinky Monster Project
            <br />
            {totalSupply}/{maxSupply}
          </h1>
          <p className="support_para" data-aos="fade-left">
            The Thinky Blinky Monsters are a series of randomly generated NFTs
            on the Ethereum blockchain. The first edition is made up of 20,000
            monsters with approximately 350 attributes; each one having to do
            with their specialty and how they help you. The potential number of
            unique combinations exceeds 6 billion in total. There is also a
            single, entirely different "Pa-Ma Monster" who is the parent of all
            the Thinky Blinky Monsters.
          </p>
          {account ? (
            <div className="banner_btns mt-3 mb-4" data-aos="flip-left">
              <button
                onClick={() => decrease()}
                className="read_more ms-0 ms-lg-3 ms-md-3 mt-2 mt-lg-0"
              >
                -
              </button>
              <button
                onClick={() => handleMint()}
                style={{ marginLeft: "30px" }}
                className="start_now me-0 me-lg-3 me-md-3 mb-2 mb-lg-0"
              >
                Mint {amount} for {(cost * amount).toFixed(3)}
              </button>
              {/* <p className="mb-0 fs-5" style={{ color: "black" }}>
                      or
                    </p> */}
              <button
                onClick={() => increase()}
                className="read_more ms-0 ms-lg-3 ms-md-3 mt-2 mt-lg-0"
              >
                +
              </button>
            </div>
          ) : (
            <div className="banner_btns mt-3 mb-4" data-aos="flip-left">
              <button
                style={{ marginLeft: "30px" }}
                className="start_now me-0 me-lg-3 me-md-3 mb-2 mb-lg-0"
              >
                Please Connect To Mint
              </button>
              {/* <p className="mb-0 fs-5" style={{ color: "black" }}>
            or
          </p> */}
            </div>
          )}
        </div>
        <div className="col-12 col-md-7 col-lg-7" data-aos="fade-down-left">
          <img src="./images/banner.png" width="100%" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Banner;

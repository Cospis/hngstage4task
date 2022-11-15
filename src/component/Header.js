import React, { useState } from "react";
import logo from "../component/img/logo.svg";
import Popup from "./Popup";
import arrow from "../component/img/arrow.png";
import metamusk from "../component/img/metamusk.png";
import Walletconnect from "../component/img/walletconnect.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <body>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Metabnb</h1>
        </div>
        <nav>
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/place">Place to stay</a>
            </li>
            <li> NFTs</li>
            <li> Community</li>
          </ul>
        </nav>
        <button onClick={togglePopup} id="connect">
          {" "}
          Connect wallets
        </button>
      </header>
      {isOpen && (
        <Popup
          content={
            <div className="wallet">
              <div className="choose">
                <p>Choose your prefered wallet:</p>
                <div className="metamusk">
                  <img src={metamusk} alt="metamusk" />
                  <p>Metamusk</p>
                  <img src={arrow} id="musk" alt="arrow" />
                </div>
                <div className="Walletconnect">
                  <img src={Walletconnect} alt="arrow" />
                  <p>Wallet Connect</p>
                  <img src={arrow} id="wallet" alt="arrow" />
                </div>
              </div>
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </body>
  );
};

export default Header;

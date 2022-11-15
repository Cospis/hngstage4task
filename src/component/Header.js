import React, { useState } from "react";
import logo from "../component/img/logo.svg";
import Popup from "./Popup";
import arrow from "../component/img/arrow.png";
import metamusk from "../component/img/metamusk.png";
import Walletconnect from "../component/img/walletconnect.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuisOpen, setmenuIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const togglemenuPopup = () => {
    setmenuIsOpen(!menuisOpen);
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
        <div className="view">
          <button onClick={togglePopup} id="connect">
            {" "}
            Connect wallets
          </button>
          <div className="menu">
            {!menuisOpen && (
              <AiOutlineMenu size={25} onClick={togglemenuPopup} />
            )}
            {menuisOpen && (
              <AiOutlineClose size={25} onClick={togglemenuPopup} />
            )}

            {menuisOpen && (
              <Menu
                content={
                  <>
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
                  </>
                }
                handleClose={togglemenuPopup}
              />
            )}
          </div>
        </div>
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

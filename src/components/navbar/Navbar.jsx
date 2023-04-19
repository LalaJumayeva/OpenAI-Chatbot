import React, { useState } from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import mainlogo from '../../assets/mainlogo.png';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <a href="/#whatgpt">What is ChatGPT?</a>
      <a href="/#possibility">Open AI</a>
      <a href="/#blog">Case Studies</a>
      <a href="/#footer">Library</a>
      <Link to="/chatting">Chat with AI</Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt_navbar">
      <div className="navbar_links">
        <div className="navbar_links_logo">
          <img id="mainlogo" src={mainlogo} alt="logo" />
        </div>
        <div className="navbar_links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar_sign">
        <a href="#signin">Sign in</a>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="fff" size={27} onClick={() => { setToggleMenu(false) }} />
          : <RiMenu3Line color="fff" size={27} onClick={() => { setToggleMenu(true) }} />}
        {toggleMenu && (
          <div className="navbar_menu_container scale-up-center">
            <div className="navbar_menu_container_links">
              <Menu />
              <div className="navbar_menu-sign">
                <a href="#signin">Sign in</a>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Navbar
 
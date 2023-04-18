import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.png"

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <div className="footer section_padding" id="footer">
      <div className="footer_heading">
        <h1 className='gradient_text'>Join us in leaping ahead into the future!</h1>
      </div>
      <div className="footer_btn">
        <button type="button">Let's Get Started</button>
      </div>
      <div className="footer_links">
        <div className="footer_links_logo">
          <img src={logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis est.</p>
        </div>
        <div className="footer_links_div">
          <h3>About Company</h3>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer_links_div">
          <h3>Get In Touch</h3>
          <p>Houston,TX,US</p>
          <p>425-569-1537</p>
          <p>info@lala.com</p>
        </div>
        <div className="footer_links_div">
          <h3>Links</h3>
          <p>Facebook</p>
          <p>Telegram</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        </div>
        <div className="footer_copyright">
          <p>© {date} AI by Lala Jumayeva. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer

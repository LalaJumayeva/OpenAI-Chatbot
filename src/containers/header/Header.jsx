import React from 'react';
import "./header.css";
import people from "../../assets/people.png"
import AI from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="header section_padding" id="home">
      <div className="header_content">
        <h1 className='gradient_text'>
          Let's Build Something beyond your imagination with Open AI
        </h1>
        <p>OpenAI is a renowned research lab that focuses on developing safe and beneficial AI. With a team of experts, they have created advanced models such as GPT-3 and conduct research across various AI fields like robotics and computer vision. Founded in 2015 by tech pioneers Elon Musk and Sam Altman,</p>
        <div className="header_content_input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Let's Start</button>
        </div>
        <div className="header_content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_img">
        <img src={AI} alt="AI" />
      </div>
    </div>
  )
}

export default Header

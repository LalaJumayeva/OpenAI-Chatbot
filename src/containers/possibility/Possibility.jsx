import React from 'react';
import "./possibility.css";
import Possibilityimage from "../../assets/possibility.png";
import wormshape from "../../assets/wormshape.png"

const Possibility = () => {
  return (
    <div className="possibility section_padding" id="possibility">
      <div className="possibility_image">
        <img src={Possibilityimage} alt="possibility" />
      </div>
      <div className="possibility_content">
        <img src={wormshape} alt="wormshape" />
        <h4>Let's Get Started</h4>
        <h1 className='gradient_text'>The possibilities are infinite and go beyond what you can imagine.</h1>
        <p>By adopting an open-minded and curious approach, we can expand our horizons and explore new paths that we may have previously overlooked. There is always more out there for us to discover, and that we should approach life with a sense of wonder and excitement, ready to embrace whatever comes our way.</p>
        <h4>Let's Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility

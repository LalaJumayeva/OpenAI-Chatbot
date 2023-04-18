import React from 'react';
import "./feature.css";

const Feature = ({title, text}) => {
  return (
  <div className="feature_container">
    <div className="feature_titles">
      <div>
      <div className='line'/>
        <h1>{title}</h1>
        </div>
      <div className="feature_text">
        <p>{text}</p>
      </div>
    </div>
  </div>
  )
}

export default Feature

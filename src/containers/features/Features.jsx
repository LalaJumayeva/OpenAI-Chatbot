import React from 'react';
import "./features.css";
import { Feature } from '../../components';
import shapes from "../../assets/shapes.png"


const featuresData = [
  {
    title: 'Embrace Change',
    text: 'The importance of being aware of the fact that the present moment is an essential part of shaping the future, and that taking action today is crucial for creating a better tomorrow.'
  },
  {
    title: 'Technology Adoption',
    text: 'The significance of embracing new technologies and tools that can help us work more efficiently and effectively in order to achieve our goals faster.'
  },
  {
    title: 'Open-mindedness',
    text: 'The importance of having an open mind and being willing to adapt to change in order to stay ahead of the curve and seize new opportunities that may arise.'
  },
  {
    title: 'Personal responsibility',
    text: 'The significance of taking personal responsibility and being proactive in creating a better future for oneself and others, by staying informed, embracing change, and cultivating a growth mindset.'
  }
]

const Features = () => {
  return (
    <div className="features section_padding">
      <div className="features_heading">
        <h1 className="gradient_text">
          Realize the present as the future, embrace change, and create a better tomorrow.
        </h1>
        <p>Let's Get Started!</p>
        <img src={shapes} alt="shapes" />
      </div>

      <div className="features_container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features

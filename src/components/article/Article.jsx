import React from 'react';
import "./article.css";

const Article = ({imgSRC, date, title, author, lorem}) => {
  return (
    <div className="article_container">
      <div className="img">
      <img src={imgSRC} alt="img" />
      </div>
      <div className="article_content">
        <div className="up">
        <p>{date}</p>
        <h4>{title}</h4>
        <span>{lorem}</span>
        </div>
        <h4 className='readMore'>Read more..</h4>
        <p>Author- " {author} "</p>
      </div>
    </div>
  )
}

export default Article

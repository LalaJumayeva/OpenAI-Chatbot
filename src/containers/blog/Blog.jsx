import React from 'react';
import "./blog.css";
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from "./images";


const Blog = () => {
  return (
    <div className="blog section_padding" id="blog">
      <h1 className='gradient_text'>We're chronicling the buzz-worthy events of the moment through our blog.</h1>
      <div className="blog_container">
        <div className="blog_main_content">
          <Article imgSRC={blog01} date="04/09/2023" title="Breaking Down ChatGPT: How OpenAI's Language Model Works" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae ipsum sit molestias, nemo cum! Nostrum dolor reiciendis in, aspernatur error debitis cumque consequuntur  adipisicing elit. Libero quae ipsum sit molestias, nemo cum! Nostrum dolor reiciendis in, aspernatur  adipisicing elit. Libero quae ipsum sit molestias, nemo cum! Nostrum dolor reiciendis in, aspernatur  adipisicing elit. Libero quae ipsum sit molestias, nemo cum! Nostrum dolor reiciendis in, aspernatur. Alias laborum tenetur voluptatibus dolorum ex?" author="The Language Modeler's Log" />
        </div>
        <div className="blog_other_contents">
          <Article imgSRC={blog02} date="01/04/2023" title="The Power of OpenAI: Exploring ChatGPT's Capabilities" author="The OpenAI Observer" />
          <Article imgSRC={blog03} date="28/03/2023" title="Inside OpenAI: Behind the Scenes of ChatGPT's Creation" author="The AI Advocate" />
          <Article imgSRC={blog04} date="16/02/2023" title="Discovering ChatGPT: A Comprehensive Guide" author="The ChatGPT Insider" />
          <Article imgSRC={blog05} date="25/01/2023" title="ChatGPT's Role in Shaping the Future of AI" author="TechTalk with Sam" />
        </div>
      </div>
    </div>
  )
}

export default Blog

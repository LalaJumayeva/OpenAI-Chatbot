import React from 'react';
import "./whatgpt.css";
import { Feature } from '../../components';

const WhatGPT = () => {
  return (
    <div className="whatgpt section_margin" id="whatgpt">
      <div className="gpt_feature">
        <Feature title="What Is ChatGPT?" text="ChatGPT is a state-of-the-art large-scale language model developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It has been trained on vast amounts of text data from various sources and is capable of generating human-like responses to natural language inputs with remarkable accuracy and fluency."/>
      </div>
      <div className="whatgpt_heading">
        <h1 className="gradient_text">
        Your potential with help of AI is infinite
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt_container">
        <Feature title="Virtual Assistant" text="A virtual assistant is an AI-powered software that can assist users with various tasks and services. It is designed to interact with users through natural language interfaces, such as voice or text-based communication."/>
        <Feature title="NLP Capability" text="Natural language processing (NLP) is a branch of artificial intelligence (AI) that deals with the interaction between computers and humans through natural language, enabling machines to understand, interpret, and generate human-like responses."/>
        <Feature title="Versatility" text="Versatility refers to the ability of ChatGPT to perform a wide range of language-related tasks and applications, such as language translation, text summarization, and question-answering, making it useful for various natural language processing applications."/>
      </div>
    </div>
  )
};

export default WhatGPT;

import React from 'react'
import { Feature } from '../../components';
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbot"
          text="The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination"
        />
        <Feature
          title="Knowledgebase"
          text="The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination"
        />
        <Feature
          title="Education"
          text="The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination The possibilities are beyond your imagination"
        />
      </div>
    </div>
  );
}

export default WhatGPT3
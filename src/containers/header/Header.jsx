import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import AI from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAi
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt adipisci quia similique id optio. At, facilis maiores libero rem repudiandae quas repellat porro saepe. Minima beatae veniam distinctio doloremque vitae.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access to visit in less than 24 hours</p>
        </div>
      </div>
       <div className="gpt3__header-image">
         <img src={AI} alt="AI" />
       </div> 
    </div>
  );
}

export default Header
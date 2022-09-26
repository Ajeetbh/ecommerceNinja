import React from 'react';
import '../style/about.css'

const About = (props) => {
  return (
    <div>
    <div className='about2'>
      <div><h1>We are pioneers in the tech-driven supply chain space for fresh produce </h1></div>
      <div className='image'>
        <img src={props.aboutimage1} alt="image3"/>
      </div>
    </div>
    <div className='about2-info'>
      <div>
        <h1>Supply Chain and Tech</h1>
      </div>
      <div>
        <p>Ninjacart is India's largest fresh produce supply chain company that is solving one of the toughest problems in the world through technology.<br/><br/>
          We connect producers of food directly with retailers, restaurants, and service providers using in-house applications that drive end to end operations. Currently, our Supply Chain is equipped to move 1400 tonnes of perishables from farms to businesses, every day, in less than 12 hours.</p>
      </div> 
      </div>
    </div>
  )
}

export default About;

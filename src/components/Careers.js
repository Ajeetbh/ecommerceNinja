import React from 'react'
import image4 from '../images/career.webp';
import '../style/career.css'

const Careers = () => {
  return (
    <>
    <div className="career">
      <div className="careerInfo">
        <h2>A Ninja is resilient, smart, and ambitious. Sounds like you?</h2>
        <p>We're always on the lookout for the right person to join the Ninja Clan.</p>
        <span>Find suitable positions</span>
      </div>
      <div className='careerImage'>
        <img src={image4} alt="careerimage"/>
      </div>
    </div>
    <div className='info'>
      <h1>Be a part of something great</h1>
      <p><span>We are 4000+ people strong.</span> Ninjacart is the place for <span>innovators, problem-solvers</span> and <span>executionists</span>. If you're looking for a job that presents <span>real-world challenges </span>and lets you explore your potential, the infectious energy here will make you create wonders that exceed your own expectations. </p>
    </div>
    < div className='info1'>
      <h1>Why we do it</h1>
      <p>For decades, the traditional Fresh Produce Supply Chain was highly inefficient with zero food security, until a few brave men decided to tackle the age-old problem and built a 100% traceable supply chain.
       We, at Ninjacart, intend to improve the lives of producers, business owners, and consumers in a meaningful manner while solving one of the hardest supply chain problems our country has to offer with technology. <span>Know more</span></p>
    </div>
    </>
  )
}

export default Careers;

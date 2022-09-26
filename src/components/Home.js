import React from 'react'
import '../style/home.css';

const Home = (props) => {
  return (
    <>
    <div className='home_info'>
      <div className='info-detail'>
        <h1>Revolutionizing the Fresh Produce Supply Chain</h1>
        <p>Driven by cutting edge technology, we source fresh produce from farmers and sell to businesses, across India</p>
        <span>Learn More</span>
      </div>
      <div className='info-image'>
        <img src={props.image1} alt="homeimage"/>
      </div>
    </div>

    <div className='about1'>
      <div className='about1-info'>
        <h1>About Us</h1>
        <p>Ninjacart is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.</p>
        <span>Know more</span>
      </div>
      <div className='about1-image'>
        <h2>ninjacart</h2>
        <img src={props.aboutimage} alt="about1"/>
      </div>
    </div>
    <div className='fresh-product'>
      <div className='header'><h1>The future of <span>Fresh Produce</span> supply chain is Ninjacart</h1></div>
      <div className='span'><span>Join the revolution</span></div>
    </div>
    </>
  )
}

export default Home;

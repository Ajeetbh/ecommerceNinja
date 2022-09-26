import React from 'react';
import '../style/buysell.css'

const BuySell = () => {
  return (
    <div className='buy'>
      <div className='buyInfo'>
        <h1>Benefit from India’s fastest Supply Chain for Fresh Produce</h1>
        <p>Ninjacart sources directly from farmers and moves fresh produce to businesses every day, in just 12 hours using analytics and technology.</p>
      </div>
      <div className='sell'>
        <div className='sell1'>
          <p>Become a Ninjacart customer</p>
          <h1>Get farm-fresh vegetables and fruits delivered to your doorstap.</h1>
          <span>Get in touch</span>
        </div>
        <div className='sell2'>
          <p>Become a Ninjacart seller</p>
          <h1>Be a part of bringing about a change in the agriculture industry.</h1>
          <span>Get in touch</span>
        </div>
      </div>
    </div>
  )
}
export default BuySell;

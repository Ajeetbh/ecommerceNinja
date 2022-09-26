import React from 'react'
import '../style/people.css'
import e1 from '../images/employee1.jpg'
import e2 from '../images/employee2.jpg'
import e3 from '../images/employee3.jpg'

const People = () => {
  return (
    <>
    <div className='peopleInfo'>
      <p>Our team</p>
      <h1>Meet the minds shapping an industry</h1>
    </div>
    <div className='image'>
      <div><img src={e1} alt='e1'/></div>
      <div><img src={e2} alt='e2'/></div>
      <div><img src={e3} alt='e3'/></div>
      
    </div>
    </>
  )
}

export default People

import React from 'react';
import '../style/navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li className="logo">ninjacart</li>
        <li><Link to='/' className='home'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/buy-sell'>Buy/Sell</Link></li>
        <li><Link to='/careers'>Careers</Link></li>
        <li><Link to='/people'>People</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/ventures'>Ventures</Link></li>
        <li><Link to='/advisory-board'>Advisory Board</Link></li>
      </ul>
    </div>
  )
}
export default Navbar;

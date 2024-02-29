import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div id='Navbar'>
<div className="nav-items">
    <ul>
        <li className="nav-item searchInput">
          <div className='icon'><CiSearch /></div>
          <input type="text" name="searchItem" id="searchItem" /></li>
        <li className="nav-item"><a href="#">Categories</a></li>
        <li className="nav-item"><a href="#">Website Builders</a></li>
        <li className="nav-item"><a href="#">Today's deals</a></li>
    </ul>
</div>

    </div>
  )
}

export default Navbar
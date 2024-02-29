import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer flex-center'>

        <div className="footer-categories">
            <h4 className="head">
                CATEGORIES
            </h4>
            <div className="list">
                <a href="#">Web Builder</a>
                <a href="#">Hosting </a>
                <a href="#">Data center</a>
                <a href="#">Robotic-Automation</a>
            </div>
        </div>
        <div className="footer-categories">
            <h4 className="head">
                CONTACT
            </h4>
            <div className="list">
                <a href="#"> Contact</a>
                <a href="#">Privacy Policies </a>
                <a href="#">Term Of Service</a>
                <a href="#">Categories</a>
                <a href="#">About</a>
            </div>
        </div>
        <select name="country" id="country">
            <option value="United States">United States</option>
        </select>
        
    </div>
  )
}

export default Footer
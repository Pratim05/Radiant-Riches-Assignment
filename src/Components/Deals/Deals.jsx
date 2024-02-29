import React from 'react'
import image from '../../assets/download 6.png'
import './Deals.css'

const Deals = () => {
  return (
    <div className='Deals flex-center'>
        <div className="image flex-center">
        <img src={image} alt="" />
        </div>
        <div className="discounts">
        <p className='discount'>20% off</p>
        <p className='discount'> Limited Time</p>
        </div>
        <h5>Webbuilder 1</h5>
        <p className="description">Computer Modern clasic with wix support</p>
        <div className="prices">
            <span className="price">$39.96</span>
            <span className="real-price">$49.96</span>
            <span className="off-per">(20% Off)</span>
        </div>
        <button>View Deals</button>
    </div>
  )
}

export default Deals
import React from 'react'
import image from '../../assets/download 6.png'
import './BuilderContainer.css'
import { Rating } from 'react-simple-star-rating'

const CDKbuilderContainer = ({Builder_info}) => {
  
  return (
    <div className='BuilderContainer'>
    <div className="left flex-center">
        <img src={image} alt="" />
        <p>{Builder_info.builder_name}</p>
    </div>
    <div className="middle">
        <div className="middle-top">
            <p><span className='Builder-name'>{Builder_info.builder_type}</span>{Builder_info.desc}</p>
        </div>
        <div className="middle-mid">
          <div className="main-highlights">
            <p className='discount'>26% off</p>
            <h4>Main Highlights</h4>
           <div className="orange-bg">
            <p className="highlights"><span>9.9</span>Building Responsive</p>
            <p className="highlights"><span>8.9</span>Cool</p>
            <p className="highlights"><span>8.9</span>Docs</p>
           </div>
           <h5>Why we love it</h5>
           <div className="feature">
           <p className="highlights"><span>&#10003;</span>Documentation</p>
           <p className="highlights"><span>&#10003;</span>Easy Use</p>
           <p className="highlights"><span>&#10003;</span>Out Of Box</p>
           </div>
           
           
          </div>
        </div>
        <div className="middle-bottom">
            <select name="ShowMore" id="ShowMore">
                <option value="Show More" selected>Show More</option>
            </select>

        </div>
    </div>
    <div className="right ">
        <div className="ratings flex-center">
        <h3 className="rating-no">{Builder_info.rating_no}</h3>
        <h5 className="rating-type">{Builder_info.rating_type}</h5>
        <div className="stars">
        <Rating 
        initialValue={Builder_info.rating_stars} />
        </div>
        </div>
        <button>View</button>
    </div>
    </div>
  )
}

export default CDKbuilderContainer
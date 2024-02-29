import React from 'react'
import image from '../../assets/download 6.png'
import './BuilderContainer.css'
import { Rating } from 'react-simple-star-rating'
import { IoDiamondOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";


const BuilderContainer = ({Builder_info}) => {
  
  return (
    <div className='BuilderContainer'>

{
  Builder_info.best_for ? (<div className="top-left flex-center">
 {Builder_info.best_for_icon} {" "} {Builder_info.best_for}
  </div>): <></>
}

      {/* <div className="top-left flex-center">
      <IoDiamondOutline /> Best Choice
      </div> */}
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
            <h4>Main Highlights</h4>
            <p>{Builder_info.main_highlights}</p>
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

export default BuilderContainer
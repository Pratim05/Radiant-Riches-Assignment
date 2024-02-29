import React from 'react'
import './Body.css'
import { GoVerified } from "react-icons/go";
import { RxInfoCircled } from "react-icons/rx";
import BuilderContainer from '../Builder/BuilderContainer';
import CDKbuilderContainer from '../Builder/CDKbuilderContainer';
import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer';

import { Builders_info } from '../../Data/information';



const Body = () => {
  return (
    <div id='Body'>
        <h1 className='heading'>Best Website builders in the US</h1>
        <div className='border-t-b'>
        <div className="update-date flex-center">
            <div className="icon"><GoVerified /></div>
            <div className="text"><p>Last Updated - February 22 , 2020</p></div>
        </div>
        <div className="update-date flex-center">
            <div className="icon"><RxInfoCircled /></div>
            <div className="text"><p>Advertising Disclosure</p></div>
        </div>
        <select name="Top-relevants" id="Top-relevants">
        <option value="" selected >Top Relevant</option>
        <option value="" ></option>
        </select>
        </div>
        <ul className="quick-btns">
            <li><a href="#">Tools</a></li>
            <li><a href="#">AWS Builder</a></li>
            <li><a href="#">Start Build</a></li>
            <li><a href="#">Build Supplies</a></li>
            <li><a href="#">Tooling</a></li>
            <li><a href="#">BlueHosting</a></li>
        </ul>
        <ul className="breadcrumb ">
            <li><a href="#">Home</a></li>
            <li>{'>'}<a href="#">Hosting for all</a></li>
            <li>{'>'}<a href="#">Hosting</a></li>
            <li>{'>'}<a href="#">Hosting6</a></li>
            <li>{'>'}<a href="#">Hosting5</a></li>
            
        </ul>

        <div className="Builder-components">
          <ol>
            <li><BuilderContainer
            Builder_info={Builders_info.Builder_1_info} 
            /></li>
            <li><BuilderContainer
            Builder_info={Builders_info.Builder_info} 
            /></li>
            <li><BuilderContainer
            Builder_info={Builders_info.Builder_1_info2} 
            /></li>
            <li><CDKbuilderContainer
            Builder_info={Builders_info.CDKBuilder_info} 
            /></li>
            
          </ol>
        </div>
        <div className="related-deals">
          <h2>Realated deals you might like for</h2>
          <div className="deals-card flex-center">
            <Deals/>
            <Deals/>
            <Deals/>
          </div>
        </div>
        <form className="sign-up">
          <h2>Sign up and get exclusive special deals</h2>
        
         <div className="inputs flex-center"> <input type="text" />
          <input type="submit" value="Sign Up" /></div>
        </form>

        <Footer/>

        </div>
   
  )
}

export default Body
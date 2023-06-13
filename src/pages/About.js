import React, { Component } from 'react';
import Pic from '../assets/Myself.JPG';
import "./About.css"
  
export default class About extends Component {
  render() {
    return (
      <div>
<div>
    <div className="split left">
      <div className="centered">
        <img className="profile_image" src={Pic} alt="Profile Pic"></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Sergio Rodriguez</div>
        <div className="brief_description">
          // Details about you goes here
        </div>
      </div>
    </div>
  </div>
 
      </div>
    )
  }
}
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
      <div className="name_title">Sergio Rodriguez</div>
      <div className="centered">
        <div className="brief_description">
          <ul>Computer Science studnet</ul>
          <ul>Interest in Web Development</ul>
          <ul>Webmaster for local CSUS SHPE</ul>
        </div>
      </div>
    </div>
  </div>
 
      </div>
    )
  }
}
import React, { useState } from 'react'

export default function Navbar() {
  const handleMode=()=>{
    let bkg=document.querySelector('body');
    let txt=document.querySelector('.form-container');
    let area=document.querySelector('.form-container .form-group textarea');
    let prev=document.querySelector('.card');
    let prev1=document.querySelector('.prev');
    let prev2=document.querySelector('.primg');
    if(mode=='dark'){
      setmode('light');
      bkg.style.backgroundColor='grey';
      txt.style.background='linear-gradient(#c5c2c2, #c7c3c3) padding-box,linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box';
      area.style.color='black';
      prev.style.background='#a5afaf';
      prev1.style.color='black';
      prev2.src='prev2.png';
    }
   else{
      setmode('dark');
      bkg.style.backgroundColor='#042743';
      txt.style.background='linear-gradient(#212121, #212121) padding-box,linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box';
      area.style.color='white';
      prev.style.background='#2e3c43';
      prev1.style.color='#bd9f67';
      prev2.src='pr.png';
   }
  }
  const[mode,setmode]=useState('dark');
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
    <div className="container-fluid gap-2">
      <img className="editimge"src="images.png" alt="" />
      <a className="navbar-brand" > ModMyText</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link text-${(mode==='dark')?'white':'black'} href="#"`}>Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${(mode==='dark')?'white':'black'} href="#"`}>About Us</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        <form className="d-flex gap-3" role="user-based">
<label
  for="themeToggle"
  class="themeToggle st-sunMoonThemeToggleBtn"
  type="checkbox"
  onChange={handleMode}
>
  <input type="checkbox" id="themeToggle" class="themeToggleInput" />
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="none"
  >
    <mask id="moon-mask">
      <rect x="0" y="0" width="20" height="20" fill="white"></rect>
      <circle cx="11" cy="3" r="8" fill="black"></circle>
    </mask>
    <circle
      class="sunMoon"
      cx="10"
      cy="10"
      r="8"
      mask="url(#moon-mask)"
    ></circle>
    <g>
      <circle class="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
      <circle class="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
      <circle class="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
      <circle class="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
      <circle class="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
      <circle class="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
    </g>
  </svg>
</label>


          <button className="btn btn-outline-success" type="submit">Sign In</button>
          <button className=" mkebutton btn btn-outline-success" type="submit"> <img className="editacc"src="pngegg.png" alt="" /> Create Account</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

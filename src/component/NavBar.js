import React from 'react'
import {   Link } from "react-router-dom";

const NavBar = (props)=>{

  const navigattop=()=>{
    window.scrollTo(0,0);
  }
  
  
    return (
      
      <div className="">
         <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Daily News</a>
    <button id='hambtn'  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >
      {/* <spatoggler-icon" /> */}
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul  id='listul' className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"><a className="nav-link active" aria-current="page" href="/" >Home</a>        </li> */}
        <li  className="nav-item"><Link  className="nav-link active" to='/general' aria-current="page"  >general</Link></li>
        <li className="nav-item"><Link   className="nav-link active" to='/business' aria-current="page" onClick={navigattop}  >Business</Link> </li>
        <li className="nav-item"><Link  className="nav-link active" to='/Entertainment' aria-current="page" onClick={navigattop}>Entertainment </Link>        </li>
        <li className="nav-item"><Link  className="nav-link active" to='/health' aria-current="page" onClick={navigattop}  >health</Link></li>
        <li className="nav-item"><Link  className="nav-link active" to='/science' aria-current="page" onClick={navigattop}  >science</Link></li>
        <li className="nav-item"><Link  className="nav-link active" to='/sports' aria-current="page" onClick={navigattop}  >Sports</Link></li>
        <li className="nav-item"><Link  className="nav-link active" to='/technology' aria-current="page"  onClick={navigattop} >Technology</Link></li>
      </ul>
     
    </div>
  </div>
  
</nav>

      </div>
    )
  
}
export default NavBar
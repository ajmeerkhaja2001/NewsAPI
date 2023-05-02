import './App.css';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
// import Spineer from './component/spinner';
import React, { Component, useState } from 'react'

const App =()=> {
  
  const[progress,setProgress]=useState(0)
  
  const progressstatus = ()=>{
    setInterval(setProgress(progress+10),100)
    clearInterval(1000);

  }


  return (
    <>
  

    
    <Router >
<LoadingBar
color='red'
progress={progress}
/>

        <NavBar/>
        <Routes>
    <Route exact path='/general'  element={<News setProgress={progressstatus}  catagorie='general'/>}/>
       <Route exact path='/Business' element={ <News setProgress={progressstatus}  catagorie='Business'/>}/>
       <Route exact path='/Entertainment' element={ <News setProgress={progressstatus}  catagorie='Entertainment'/>}/>
       <Route exact path='/general' element={  <News setProgress={progressstatus}  catagorie='general'/>}/>
       <Route exact path='/health' element={<News setProgress={progressstatus}  catagorie='health'/>}/>
       <Route exact path='/science' element={ <News setProgress={progressstatus}  catagorie='science'/>}/>
       <Route exact path='/sports' element={ <News setProgress={progressstatus}  catagorie='sports'/>}/>
       <Route exact path='/technology' element={<News setProgress={progressstatus}  catagorie='technology'/>}/>
  </Routes>
        
</Router>
    
    </>
  
  );

}

export default App;

import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
// import Background from './images/bg-header-desktop.svg';
import data_list from './data.json';
// import icon_remove from './images/icon-remove.svg'
import User from './User.js'
import Distribution from './Distribution.js';


const App=() =>{
    const [rootdata,setRootdata]=useState([])
   

  // useEffect(()=>{
  //   setRootdata([])
  //   console.log("init");
  // },[])
  
useEffect(()=>{
 console.log('root',rootdata);
 }
,
  [rootdata])
 
  



  return (
    <div className="App" style={{backgroundColor:"#fafafa",paddingTop:"40px"}} >
    
    <BrowserRouter>

    <Route  exact path="/" render={(props) => <User {...props} rootdata={rootdata} setRootdata={setRootdata}/> } />
    <Route exact path="/distribution" render={(props) =>  <Distribution {...props} rootdata={rootdata} /> } />
    
    </BrowserRouter>
    {rootdata.length>0 && <div className="">
    <h5 className="ml-5 mt-5 card-container">
    Distribution Side</h5>
     <div className="mt-5"><Distribution  rootdata={rootdata} /></div></div>}
    
    <footer style={{backgroundColor:'whitesmoke',padding:"10px 10px 40px 10px",textAlign:"center",marginTop:"40px"}}>
      <p style={{margin:"0 auto 0 auto"}}>Created by: Soham Chhapre $ <a href="mailto:1899sohamchhapre@gmail.com">
      <i className="fa fa-envelope-square" style={{fontSize:'26px'}}></i></a>
      <a href="https://www.github.com/SohamChhapre" target="_blank">
      <i className="fa fa-github" style={{fontSize:'26px',marginLeft:"10px"}}></i></a> $</p>
    </footer> 
    </div>
  );
}

export default App;

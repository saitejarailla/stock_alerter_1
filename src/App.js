import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Home from './components/Home';
import SetAlert from './components/SetAlert';
import Prediction from './components/Prediction';
import KnowMore from './components/KnowMore';
import navBtn from './components/images/navbtn.png';
import navicon from './components/images/navicon.png';

function App() {

  let [status,SetStatus] = useState("false");

  return (
    <div>
      <div className='smallNav'>
        {/* <img src={navicon} height='70%' className='navIcon'/> */}
        
        <div className='forIcon'></div>
        <button className='navBtn' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}} ><img src={navBtn} width="50vh" /></button>
      </div>
      <div className='profileNavbar row justify-content-around'>
            <Link to='' className='navItems col-2'>Home</Link>
            <Link to='set-alert'  className='navItems col-2 '>Set Alert</Link>
            <Link to='prediction'  className='navItems col-2'>Prediction</Link>
            <Link to='know-more'  className='navItems col-2'>Know More</Link>
      </div>

      {/* conditional rendering */}
      {
          (status === "true") &&  
          <div className='dropdown'>
            <div className='smallnav '>
              <div className='row'>
                  <Link to='' className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Home</Link>
                  <Link to='set-alert'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Set Alert</Link>
                  <Link to='prediction'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Predictions</Link> 
                  <Link to='know-more'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Know More</Link>
              </div>
            </div>
          </div>
        }

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/set-alert' element={<SetAlert/>}/>
        <Route path='/prediction' element={<Prediction/>}/>
        <Route path='/know-more' element={<KnowMore/>}/>
      </Routes>
      
    </div>
   
  );
}

export default App;

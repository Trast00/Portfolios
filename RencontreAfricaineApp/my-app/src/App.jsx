import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import PremuimAds from './components/premuimAds/PremuimAds';
import Appads from './components/appAds/AppAds'
import Discover from './discover/Discover';
import Contact from './components/contact/Contact';
import Publication from './publication/Publication'
import Discussion from './discussion/Discussion';


const App = () => {
  return (
  <div className='app'>
    <Navbar />
    <div className="pageBody">
      
      <div className="left">
        <Contact />
        <PremuimAds />
        <Appads />
      </div>

      <div className="center">
        <Discover />

        <Discussion />
        
        <Publication />
      </div>

      <div className="right"></div>
    </div>
  </div>
  );};


export default App;

import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import {action,originals} from './urls'

function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Row url = {originals} title = 'Netflix Originals'/>
     <Row url = {action} title = 'Actions' isSmall/>
    </div>
  );
}

export default App;

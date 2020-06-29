
import './App.css';
//import axios from 'axios';
import React, { Component } from 'react';
import Time from './Time'
import Delete from './Delete'



class App extends Component {
 render() {
    return (
      <div className="container">
      <h1>How to Help Local Animal Shelters</h1>
      
      <ol>
          <li>Donate pet items</li>
          <li>Provide a temporary home</li>
          <li>Get active or help socialize</li>
          <li>Put your talents to good use</li>
      </ol>
      
         <Time/>
         <Delete/>
      </div>
    );
  }
}

export default App;
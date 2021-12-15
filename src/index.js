import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp';
//import './index.css';
//import App from './App';
import Home from './Home';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/> 
      <Route path='/simple/states' element={<SimpleGoldenAcornApp />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


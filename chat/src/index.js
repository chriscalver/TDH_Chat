import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Home from './Home';
import SupportAdmin from './SupportAdmin';

const path = window.location.pathname;


/////////  Code for Support Page 

ReactDOM.render(
  <React.StrictMode>
    {console.log(path)}
    { path.includes('/support') ?  <Home /> :<SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);
